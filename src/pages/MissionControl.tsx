import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  FolderTree,
  LayoutDashboard,
  Plus,
  RefreshCcw,
  UserRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type AgentStatus = "ready" | "incomplete";
type TaskStatus = "inbox" | "in_progress" | "done";
type ActivityType = "created" | "assigned" | "status_changed";

interface Agent {
  slug: string;
  name: string;
  path: string;
  status: AgentStatus;
  missingFiles: string[];
  hasOpenClawDir: boolean;
}

interface AgentsSnapshot {
  generatedAt: string;
  source: string;
  requiredFiles: string[];
  total: number;
  agents: Agent[];
}

interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  agentSlug: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ActivityItem {
  id: string;
  type: ActivityType;
  taskId: string;
  message: string;
  createdAt: string;
}

const TASKS_STORAGE_KEY = "mission-control-v0.tasks";
const ACTIVITY_STORAGE_KEY = "mission-control-v0.activity";
const TASK_COLUMNS: Array<{ key: TaskStatus; label: string; hint: string }> = [
  { key: "inbox", label: "Inbox", hint: "Pendientes de arrancar" },
  { key: "in_progress", label: "In progress", hint: "Trabajo en marcha" },
  { key: "done", label: "Done", hint: "Cerradas" },
];

const DEFAULT_TASKS: TaskItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Revisar backlog inicial",
    description: "Limpiar tareas que entraron sin priorización.",
    status: "inbox",
    agentSlug: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const DEFAULT_ACTIVITY: ActivityItem[] = [
  {
    id: crypto.randomUUID(),
    type: "created",
    taskId: "seed",
    message: "Mission Control listo para crear, asignar y mover tareas.",
    createdAt: new Date().toISOString(),
  },
];

function readLocalStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function persistLocalStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function relativeTime(value: string) {
  const diffMs = Date.now() - new Date(value).getTime();
  const diffMinutes = Math.max(1, Math.round(diffMs / 60000));

  if (diffMinutes < 60) return `hace ${diffMinutes} min`;

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `hace ${diffHours} h`;

  const diffDays = Math.round(diffHours / 24);
  return `hace ${diffDays} d`;
}

function formatStatusLabel(status: TaskStatus) {
  if (status === "in_progress") return "In progress";
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function getAgentLabel(agentSlug: string | null, agents: Agent[]) {
  if (!agentSlug) return "Sin asignar";
  const agent = agents.find((item) => item.slug === agentSlug);
  return agent?.name || agentSlug;
}

const MissionControl = () => {
  const [snapshot, setSnapshot] = useState<AgentsSnapshot | null>(null);
  const [loadingAgents, setLoadingAgents] = useState(true);
  const [agentsError, setAgentsError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<string>("unassigned");

  const agents = snapshot?.agents ?? [];
  const readyAgents = agents.filter((agent) => agent.status === "ready");

  useEffect(() => {
    setTasks(readLocalStorage(TASKS_STORAGE_KEY, DEFAULT_TASKS));
    setActivity(readLocalStorage(ACTIVITY_STORAGE_KEY, DEFAULT_ACTIVITY));
  }, []);

  useEffect(() => {
    persistLocalStorage(TASKS_STORAGE_KEY, tasks);
  }, [tasks]);

  useEffect(() => {
    persistLocalStorage(ACTIVITY_STORAGE_KEY, activity);
  }, [activity]);

  const loadAgents = async () => {
    setLoadingAgents(true);
    setAgentsError(null);

    try {
      const response = await fetch(`/agents-snapshot.json?ts=${Date.now()}`);
      if (!response.ok) throw new Error("No se pudo cargar el snapshot de agentes");

      const data = (await response.json()) as AgentsSnapshot;
      setSnapshot(data);
    } catch (error) {
      setAgentsError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoadingAgents(false);
    }
  };

  useEffect(() => {
    void loadAgents();
  }, []);

  const addActivity = (entry: Omit<ActivityItem, "id" | "createdAt">) => {
    setActivity((current) => [
      {
        ...entry,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      },
      ...current,
    ].slice(0, 30));
  };

  const createTask = () => {
    const cleanTitle = title.trim();
    const cleanDescription = description.trim();
    if (!cleanTitle) return;

    const now = new Date().toISOString();
    const agentSlug = selectedAgent === "unassigned" ? null : selectedAgent;
    const newTask: TaskItem = {
      id: crypto.randomUUID(),
      title: cleanTitle,
      description: cleanDescription,
      status: "inbox",
      agentSlug,
      createdAt: now,
      updatedAt: now,
    };

    setTasks((current) => [newTask, ...current]);
    addActivity({
      type: "created",
      taskId: newTask.id,
      message: `Tarea creada: ${cleanTitle}`,
    });

    if (agentSlug) {
      addActivity({
        type: "assigned",
        taskId: newTask.id,
        message: `Asignada a ${getAgentLabel(agentSlug, agents)}`,
      });
    }

    setTitle("");
    setDescription("");
    setSelectedAgent("unassigned");
  };

  const updateTask = (taskId: string, updates: Partial<TaskItem>, activityMessage?: Omit<ActivityItem, "id" | "createdAt">) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId
          ? {
              ...task,
              ...updates,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    );

    if (activityMessage) addActivity(activityMessage);
  };

  const groupedTasks = useMemo(
    () =>
      TASK_COLUMNS.map((column) => ({
        ...column,
        tasks: tasks.filter((task) => task.status === column.key),
      })),
    [tasks],
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container-custom py-10">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge variant="outline" className="w-fit border-primary/30 bg-primary/10 text-primary">
              Mission Control v0
            </Badge>
            <div>
              <h1 className="text-4xl font-semibold">Agentes, tareas y actividad en una sola vista</h1>
              <p className="mt-2 max-w-3xl text-base text-muted-foreground">
                MVP local para operar una agencia de agentes sin backend complejo: snapshot real de
                <span className="mx-1 font-mono text-foreground">~/.openclaw/agency-agents</span>,
                tablero simple y actividad persistida en el navegador.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <MetricCard icon={Bot} label="Agentes" value={String(snapshot?.total ?? 0)} />
            <MetricCard icon={CheckCircle2} label="Ready" value={String(readyAgents.length)} />
            <MetricCard icon={LayoutDashboard} label="Tareas" value={String(tasks.length)} />
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_2fr_1.1fr]">
          <section className="space-y-6">
            <Card className="border-white/10 bg-card/80">
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                <div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Bot className="h-5 w-5 text-primary" />
                    Agentes instalados
                  </CardTitle>
                  <CardDescription>
                    Snapshot generado desde {snapshot?.source ?? "~/.openclaw/agency-agents"}
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => void loadAgents()} disabled={loadingAgents}>
                  <RefreshCcw className={cn("h-4 w-4", loadingAgents && "animate-spin")} />
                  Refrescar
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {agentsError ? (
                  <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                    {agentsError}
                  </div>
                ) : null}

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{loadingAgents ? "Cargando agentes..." : `${agents.length} agentes detectados`}</span>
                  <span>{snapshot?.generatedAt ? `Snapshot: ${new Date(snapshot.generatedAt).toLocaleString()}` : ""}</span>
                </div>

                <div className="max-h-[680px] space-y-3 overflow-y-auto pr-1">
                  {agents.map((agent) => (
                    <div key={agent.slug} className="rounded-xl border border-white/10 bg-background/60 p-4">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <div>
                          <div className="font-medium text-foreground">{agent.name}</div>
                          <div className="text-xs text-muted-foreground">{agent.slug}</div>
                        </div>
                        <Badge
                          variant="outline"
                          className={cn(
                            "capitalize",
                            agent.status === "ready"
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                              : "border-amber-500/30 bg-amber-500/10 text-amber-300",
                          )}
                        >
                          {agent.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="break-all font-mono text-[11px]">{agent.path}</div>
                        {agent.missingFiles.length > 0 ? (
                          <div>Faltan: {agent.missingFiles.join(", ")}</div>
                        ) : (
                          <div>Checklist base completa</div>
                        )}
                        <div>{agent.hasOpenClawDir ? "Incluye .openclaw" : "Sin .openclaw detectado"}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <Card className="border-white/10 bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Plus className="h-5 w-5 text-primary" />
                  Crear tarea
                </CardTitle>
                <CardDescription>Alta rápida con asignación opcional a un agente ya instalado.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="task-title">Título</Label>
                  <Input
                    id="task-title"
                    placeholder="Ej: preparar propuesta para cliente nuevo"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="task-description">Descripción</Label>
                  <Textarea
                    id="task-description"
                    placeholder="Contexto corto, alcance o siguiente paso"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Asignar agente</Label>
                  <Select value={selectedAgent} onValueChange={setSelectedAgent}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un agente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unassigned">Sin asignar</SelectItem>
                      {agents.map((agent) => (
                        <SelectItem key={agent.slug} value={agent.slug}>
                          {agent.name} · {agent.slug}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full" onClick={createTask} disabled={!title.trim()}>
                    <Plus className="h-4 w-4" />
                    Crear tarea
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 xl:grid-cols-3">
              {groupedTasks.map((column) => (
                <Card key={column.key} className="border-white/10 bg-card/80">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg">{column.label}</CardTitle>
                        <CardDescription>{column.hint}</CardDescription>
                      </div>
                      <Badge variant="secondary">{column.tasks.length}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {column.tasks.length === 0 ? (
                      <div className="rounded-lg border border-dashed border-white/10 p-4 text-sm text-muted-foreground">
                        Sin tareas en esta columna.
                      </div>
                    ) : null}

                    {column.tasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        agents={agents}
                        onAssign={(agentSlug) =>
                          updateTask(
                            task.id,
                            { agentSlug },
                            {
                              type: "assigned",
                              taskId: task.id,
                              message: `Asignación actualizada: ${task.title} → ${getAgentLabel(agentSlug, agents)}`,
                            },
                          )
                        }
                        onMove={(status) =>
                          updateTask(
                            task.id,
                            { status },
                            {
                              type: "status_changed",
                              taskId: task.id,
                              message: `Estado cambiado: ${task.title} → ${formatStatusLabel(status)}`,
                            },
                          )
                        }
                      />
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <Card className="border-white/10 bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Activity className="h-5 w-5 text-primary" />
                  Actividad reciente
                </CardTitle>
                <CardDescription>Creación, asignación y cambios de estado.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {activity.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-white/10 p-4 text-sm text-muted-foreground">
                    Aún no hay actividad.
                  </div>
                ) : null}
                {activity.map((entry) => (
                  <div key={entry.id} className="rounded-xl border border-white/10 bg-background/60 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="outline" className="capitalize">
                        {entry.type.replace("_", " ")}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{relativeTime(entry.createdAt)}</span>
                    </div>
                    <p className="mt-3 text-sm text-foreground/90">{entry.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-card/80">
              <CardHeader>
                <CardTitle className="text-xl">Notas del MVP</CardTitle>
                <CardDescription>Lo justo para operar hoy, sin backend pesado.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <FolderTree className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Los agentes vienen de un snapshot JSON regenerado en predev/prebuild.</span>
                </div>
                <div className="flex gap-3">
                  <UserRound className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Las tareas y la actividad viven en localStorage del navegador.</span>
                </div>
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Si agregas agentes nuevos, reinicia el dev server o corre el script de snapshot.</span>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
};

function MetricCard({ icon: Icon, label, value }: { icon: typeof Bot; label: string; value: string }) {
  return (
    <Card className="border-white/10 bg-card/80">
      <CardContent className="flex items-center gap-3 p-4">
        <div className="rounded-xl bg-primary/10 p-2 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
          <div className="text-2xl font-semibold text-foreground">{value}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function TaskCard({
  task,
  agents,
  onAssign,
  onMove,
}: {
  task: TaskItem;
  agents: Agent[];
  onAssign: (agentSlug: string | null) => void;
  onMove: (status: TaskStatus) => void;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-background/60 p-4">
      <div className="space-y-2">
        <div className="font-medium text-foreground">{task.title}</div>
        {task.description ? <p className="text-sm text-muted-foreground">{task.description}</p> : null}
      </div>

      <div className="mt-4 grid gap-3">
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">Agente</Label>
          <Select value={task.agentSlug ?? "unassigned"} onValueChange={(value) => onAssign(value === "unassigned" ? null : value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="unassigned">Sin asignar</SelectItem>
              {agents.map((agent) => (
                <SelectItem key={agent.slug} value={agent.slug}>
                  {agent.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">Mover a</Label>
          <div className="grid grid-cols-3 gap-2">
            {TASK_COLUMNS.map((column) => (
              <Button
                key={column.key}
                variant={task.status === column.key ? "default" : "outline"}
                size="sm"
                onClick={() => onMove(column.key)}
                disabled={task.status === column.key}
              >
                {column.key === "in_progress" ? <ArrowRight className="h-4 w-4" /> : null}
                {column.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>{getAgentLabel(task.agentSlug, agents)}</span>
        <span>{relativeTime(task.updatedAt)}</span>
      </div>
    </div>
  );
}

export default MissionControl;
