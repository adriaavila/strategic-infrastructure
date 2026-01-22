---
name: "Rediseño Personalizado: Manteniendo BentoGrids"
overview: Rediseñar la web para vender servicios personalizados manteniendo la estructura visual de BentoGrids. Enfoque en reescritura de copy consultivo, Engagement Model antes de servicios, y reemplazo de Pricing por Scoping, sin cambiar la estructura visual de las tarjetas.
todos:
  - id: rewrite-hero-copy
    content: "Reescribir Hero: copy consultivo, CTAs conversacionales, eliminar stats row"
    status: pending
  - id: create-engagement-model
    content: Crear EngagementModel.tsx con timeline de 4 etapas (Diagnose → Design → Build → Iterate)
    status: pending
  - id: rewrite-bentogrid-copy
    content: "Modificar solo copy en MarketingServices: títulos de sección, subtítulos y descripciones de tarjetas (mantener visuals)"
    status: pending
  - id: rewrite-automations-copy
    content: "Modificar solo copy en Automations: subtítulo y descripciones de tarjetas (mantener visuals)"
    status: pending
  - id: create-scoping
    content: "Crear Scoping.tsx reemplazando Pricing: proceso de scoping, factores, formato de estimación"
    status: pending
  - id: simplify-integrations
    content: "Simplificar Integrations: copy más directo, reducir loops de animación, mantener estructura"
    status: pending
  - id: rewrite-faq
    content: "Reescribir FAQ completamente: preguntas de servicios personalizados, tono directo"
    status: pending
  - id: update-index-structure
    content: "Actualizar Index.tsx: agregar EngagementModel, cambiar Pricing por Scoping, nuevo orden"
    status: pending
---

# Rediseño: Servicios Personalizados (Manteniendo BentoGrids)

## Objetivo

Reposicionar la web como servicios personalizados manteniendo la estructura visual existente de BentoGrids. El cambio principal está en la copia, el mensaje y la adición de contexto consultivo, no en el rediseño visual completo.

## Estructura Final de Página

```
Hero (modificado - copy consultivo)
  ↓
Engagement Model (NUEVA - antes de servicios)
  ↓
MarketingServices (BentoGrid - copy modificado, estructura visual igual)
  ↓
Automations (BentoGrid - copy modificado, estructura visual igual)
  ↓
Scoping (NUEVA - reemplaza Pricing)
  ↓
Integrations (modificado - copy más directo)
  ↓
FAQ (reescrito completamente)
```

## Cambios Detallados

### 1. Hero Component ([src/components/landing/Hero.tsx](src/components/landing/Hero.tsx))

**Mantener:**

- ParticleBackground (visual existente)
- Estructura de layout
- Framer Motion animations

**Modificar copy:**

- Headline: "Soluciones adaptadas a tu operación, no a un catálogo"
- Subheader: "Entendemos tus restricciones, objetivos y contexto antes de proponer."
- Badge: Eliminar o cambiar texto a algo más consultivo

**Cambiar CTAs:**

- "Empezar ahora" → "Describe tu sistema"
- "Hablar con un experto" → "Reserva revisión técnica"

**Eliminar:**

- Stats row (500+ automatizaciones, 24/7, 10x ROI)
- Pulse animation en badge (preferencia de motion)

---

### 2. Engagement Model (NUEVA - [src/components/landing/EngagementModel.tsx](src/components/landing/EngagementModel.tsx))

**Crear nueva sección** que se muestra ANTES de los servicios para establecer el proceso.

**Timeline de 4 etapas:**

1. **Diagnose** - Mapeo de sistema, dependencias, limitaciones
2. **Design** - Propuesta que respeta restricciones
3. **Build** - Implementación incremental
4. **Iterate** - Ajustes basados en uso real

**Copy:**

```
Título: "Cómo trabajamos"
Subtítulo: "Cada proyecto es diferente. Por eso no usamos plantillas."

Cada etapa incluye:
- Título + duración
- Descripción breve
- Criterio de éxito (pregunta que respondemos)
```

**Diseño:**

- Timeline vertical u horizontal
- Usar Framer Motion para entrada secuencial
- No loops infinitos

---

### 3. MarketingServices ([src/components/landing/BentoGrid.tsx](src/components/landing/BentoGrid.tsx))

**Mantener:**

- Estructura visual completa (BentoCard con visuals)
- Animaciones Framer Motion existentes
- Layout de grid
- Visuals (WebDesignVisual, BrandingVisual, MarketingVisual, ContentVisual)

**Modificar solo COPY dentro de las tarjetas:**

**Títulos:** Mantener iguales (Diseño Web, Branding, Marketing Digital, Creación de Contenido)

**Descripciones:** Reescribir para sonar consultivo:

Actual: "Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes..."

Nuevo: "Evaluamos qué tipo de web tiene sentido para tu operación. Desde integraciones críticas hasta velocidad que afecta tu negocio, cada decisión se toma con tu contexto en mente."

Actual: "Estrategias de redes sociales, campañas de ads y SEO..."

Nuevo: "Identificamos qué canales funcionan para tu audiencia específica. No hacemos campañas genéricas; cada estrategia se adapta a tus objetivos y recursos."

**Título de sección:**

- De: "Servicios de Marketing"
- A: "Áreas de Capacidad" o "Servicios de Marketing" (puede mantenerse, pero subtexto cambia)

**Subtítulo:**

- De: "Todo lo que necesitas para destacar en el mundo digital"
- A: "Evaluamos qué tiene sentido para tu proyecto antes de recomendar cualquier solución"

**Eliminar de visuals:**

- Porcentajes ficticios en MarketingVisual (+240%, +85%, +120%)

---

### 4. Automations ([src/components/landing/Automations.tsx](src/components/landing/Automations.tsx))

**Mantener:**

- Estructura visual completa (BentoCard con visuals)
- Animaciones Framer Motion
- Layout de grid
- Visuals (ChatVisual, DataVisual, PipelineVisual, ReactivationVisual)

**Modificar solo COPY:**

**Títulos:** Mantener iguales o ajustar ligeramente si es necesario

**Descripciones:** Reescribir para sonar consultivo:

Actual: "Tu vendedor que nunca duerme. Respuesta inmediata..."

Nuevo: "Automatización de atención que evaluamos caso por caso. No todos los negocios necesitan respuestas 24/7; determinamos qué consultas pueden automatizarse y cuándo es mejor escalamiento humano."

Actual: "Data-entry automático. Convierte facturas..."

Nuevo: "Procesamiento de documentos adaptado a tus formatos y flujos. Evaluamos precisión necesaria, validación requerida y cómo se integra con tus sistemas existentes."

**Subtítulo de sección:**

- De: "Soluciones que transforman la manera en que operas tu negocio"
- A: "Evaluamos qué procesos tienen sentido automatizar en tu operación específica"

---

### 5. Scoping (NUEVA - [src/components/landing/Scoping.tsx](src/components/landing/Scoping.tsx))

**Reemplaza Pricing completamente**

**Estructura:**

- 3 pasos del proceso de scoping
- Factores que afectan el scope
- CTA: "Agendar scoping call" con explicación de qué esperar

**Copy:**

```
Título: "Cómo definimos el scope"
Subtítulo: "Cada proyecto es diferente. Por eso trabajamos con rangos de estimación, no precios fijos."

Pasos:
1. Revisión técnica (30-60 min)
2. Propuesta (3-5 días)
3. Ajustes

Factores que afectan el scope:
- Complejidad de integración con sistemas existentes
- Legacy systems que deben mantenerse
- Restricciones de tiempo/recursos
- Nivel de personalización requerido
```

**Diseño:**

- Cards similares a pricing pero sin precios fijos
- Usar Framer Motion para entrada secuencial

---

### 6. Integrations ([src/components/landing/Integrations.tsx](src/components/landing/Integrations.tsx))

**Mantener:**

- Estructura visual del mesh
- Integración logos
- Layout general

**Modificar COPY:**

- Título: De "Conectividad total" → "Integraciones"
- Subtítulo: "Trabajamos con las herramientas que ya usas. No necesitas cambiar tu stack para implementar nuevas capacidades."

**Reducir animaciones:**

- Mantener entrada de logos
- Eliminar o reducir: animate-ping loops, animated dots viajando indefinidamente
- Eliminar: pulse en badge
- Mantener: hover effects básicos

**Eliminar:**

- Badge "Ecosystem" con pulse
- Stats inferiores si son genéricos (pueden mantenerse si son técnicos y específicos)

---

### 7. FAQ ([src/components/landing/FAQ.tsx](src/components/landing/FAQ.tsx))

**Reescribir completamente**

**Nuevas categorías:**

1. Scoping y Proceso
2. Expectativas
3. Implementación

**Nuevas preguntas:**

- "¿Cómo determinan el precio de un proyecto?"
- "¿Qué sucede si cambian los requisitos durante el desarrollo?"
- "¿Cuánto tiempo toma el scoping?"
- "¿Qué necesito tener listo antes de la revisión técnica?"
- "¿Ofrecen mantenimiento post-lanzamiento?"
- "¿Trabajan con equipos que tienen conocimientos técnicos limitados?"

**Tono:**

- Respuestas directas, sin marketing
- Reconocer limitaciones cuando apliquen
- Explicar tradeoffs

**Eliminar:**

- Preguntas sobre "planes" o "tarifas"
- Respuestas con "absolutamente", "sin sorpresas"
- Garantías genéricas

---

### 8. Index Page ([src/pages/Index.tsx](src/pages/Index.tsx))

**Actualizar:**

- Importar EngagementModel
- Importar Scoping (en lugar de Pricing)
- Nuevo orden: Hero → EngagementModel → MarketingServices → Automations → Scoping → Integrations → FAQ

---

## Copy Guidelines (Aplicar a descripciones de BentoGrids)

### En las descripciones de tarjetas:

**Evitar:**

- "Modernos, rápidos, optimizados" (genéricos)
- Porcentajes sin contexto (+240%)
- "Todo lo que necesitas"
- Promesas absolutas

**Usar:**

- "Evaluamos si...", "Consideramos..."
- "Adaptado a...", "Según tu..."
- "Caso por caso"
- "En tu contexto específico"

**Ejemplos de reescritura:**

**Diseño Web:**

```
Antes: "Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes. Desde landing pages hasta tiendas online."

Después: "Evaluamos qué tipo de web tiene sentido para tu operación. Consideramos integraciones críticas, velocidad que afecta tu negocio, y cómo se alinea con tus procesos existentes. Desde landing pages hasta e-commerce complejo, cada decisión se toma con tu contexto en mente."
```

**Marketing Digital:**

```
Antes: "Estrategias de redes sociales, campañas de ads y SEO para aumentar tu visibilidad online."

Después: "Identificamos qué canales usan realmente tus clientes. No hacemos campañas genéricas; cada estrategia se adapta a tu audiencia, objetivos de negocio y recursos disponibles. Evaluamos tradeoffs entre alcance rápido y crecimiento sostenible."
```

---

## Animaciones: Estrategia

### Mantener:

- Framer Motion en BentoGrids (ya implementado)
- Scroll-triggered animations (useInView)
- Hover effects suaves en tarjetas
- Stagger animations para entrada secuencial

### Eliminar/Reducir:

- Stats genéricos animados (Hero stats)
- Pulse loops sin propósito
- Animated dots en integraciones (si son solo decorativos)

### Agregar:

- Engagement Model: Timeline draw animation en scroll
- prefers-reduced-motion media query

---

## Archivos a Crear

1. **src/components/landing/EngagementModel.tsx** (NUEVO)

   - Timeline component con 4 etapas
   - Framer Motion para animaciones
   - CTA al final

2. **src/components/landing/Scoping.tsx** (NUEVO, reemplaza Pricing)

   - Proceso de 3 pasos en cards
   - Factores que afectan scope
   - Sin precios fijos

---

## Archivos a Modificar

1. **src/components/landing/Hero.tsx**

   - Reescribir copy (headline, subheader)
   - Cambiar CTAs
   - Eliminar stats row
   - Opcional: remover pulse en badge

2. **src/components/landing/BentoGrid.tsx**

   - Modificar solo textos: título de sección, subtítulo, descripciones dentro de BentoCard
   - Mantener toda estructura visual, componentes, animaciones
   - Eliminar porcentajes de MarketingVisual

3. **src/components/landing/Automations.tsx**

   - Modificar solo textos: subtítulo, descripciones dentro de BentoCard
   - Mantener estructura visual completa

4. **src/components/landing/Integrations.tsx**

   - Reescribir título y subtítulo
   - Reducir loops de animación
   - Mantener estructura visual general

5. **src/components/landing/FAQ.tsx**

   - Reescribir completamente: nuevas preguntas, nuevas categorías
   - Mantener estructura de Accordion

6. **src/pages/Index.tsx**

   - Actualizar imports: agregar EngagementModel, cambiar Pricing por Scoping
   - Actualizar orden de secciones

7. **src/index.css** (opcional)

   - Agregar prefers-reduced-motion si no existe

---

## Ejemplos de Copy Modificado

### BentoGrid - Diseño Web (mantener visual, cambiar descripción)

```
Título: Diseño Web (igual)

Descripción nueva:
"Evaluamos qué tipo de web tiene sentido para tu operación. Consideramos integraciones críticas con tus sistemas existentes, velocidad que afecta tu operación, y cómo los visitantes interactúan con tu negocio. Desde landing pages hasta e-commerce, cada decisión se toma con tu contexto específico en mente."
```

### BentoGrid - Marketing Digital

```
Título: Marketing Digital (igual)

Descripción nueva:
"Identificamos qué canales usan realmente tus clientes. No hacemos campañas genéricas; cada estrategia se adapta a tu audiencia, objetivos medibles y recursos disponibles. Evaluamos tradeoffs entre alcance rápido y crecimiento sostenible antes de recomendar."
```

### Automations - Caza-Prospectos 24/7

```
Título: Atención Automatizada 24/7 (renombrar ligeramente)

Descripción nueva:
"Evaluamos si la automatización de atención tiene sentido en tu caso. No todos los negocios necesitan respuestas 24/7; determinamos qué consultas pueden resolverse automáticamente y cuándo es mejor escalamiento humano. Todo depende de tu audiencia y objetivos."
```

---

## Resumen de Cambios Visuales vs Copy

### Sin cambios visuales (solo copy):

- MarketingServices: BentoCard structure, visuals, animations
- Automations: BentoCard structure, visuals, animations

### Cambios visuales menores:

- Hero: Eliminar stats row
- Integrations: Reducir loops, mantener estructura

### Nuevas secciones:

- EngagementModel: Timeline nueva
- Scoping: Cards similar a Pricing pero sin precios

---

## Implementación por Archivo

### Prioridad Alta (Core positioning):

1. Hero copy y CTAs
2. EngagementModel component
3. Scoping component (reemplaza Pricing)
4. BentoGrid descripciones (MarketingServices)
5. Automations descripciones

### Prioridad Media (Polish):

6. Integrations copy y animaciones
7. FAQ completo
8. Index.tsx orden

### Prioridad Baja (Optimización):

9. prefers-reduced-motion
10. Eliminar stats de MarketingVisual