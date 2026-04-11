import { Suspense, lazy, type ReactNode, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { DeferredAnalytics } from "./components/DeferredAnalytics";
import { PostHogProvider } from "./components/PostHogProvider";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Historia = lazy(() => import("./pages/Historia"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Proyectos = lazy(() => import("./pages/Proyectos"));
const Automatizaciones = lazy(() => import("./pages/Automatizaciones"));
const Marketing = lazy(() => import("./pages/Marketing"));
const Servicios = lazy(() => import("./pages/Servicios"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Brief = lazy(() => import("./pages/Brief"));
const LegalTerms = lazy(() => import("./pages/LegalTerms"));
const LegalPrivacy = lazy(() => import("./pages/LegalPrivacy"));
const IndustriasHub = lazy(() => import("./pages/IndustriasHub"));
const CiudadesHub = lazy(() => import("./pages/CiudadesHub"));
const SiteMapPage = lazy(() => import("./pages/SiteMapPage"));
const PseoPage = lazy(() => import("./pages/PseoPage"));
const MarketingLibrary = lazy(() => import("./pages/MarketingLibrary"));
const AgentDemo = lazy(() => import("./pages/AgentDemo"));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const RouteFallback = () => <div className="min-h-screen bg-background" aria-hidden="true" />;

const SuspendedRoute = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<RouteFallback />}>{children}</Suspense>
);

const App = () => (
  <>
    <DeferredAnalytics />
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <PostHogProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<SuspendedRoute><Blog /></SuspendedRoute>} />
          <Route path="/blog/:slug" element={<SuspendedRoute><BlogPost /></SuspendedRoute>} />
          <Route path="/historia" element={<SuspendedRoute><Historia /></SuspendedRoute>} />
          <Route path="/contacto" element={<SuspendedRoute><Contacto /></SuspendedRoute>} />
          <Route path="/brief" element={<SuspendedRoute><Brief /></SuspendedRoute>} />
          <Route path="/automatizaciones" element={<SuspendedRoute><Automatizaciones /></SuspendedRoute>} />
          <Route path="/marketing" element={<SuspendedRoute><Marketing /></SuspendedRoute>} />
          <Route path="/marketing/contenidos" element={<SuspendedRoute><MarketingLibrary /></SuspendedRoute>} />
          <Route path="/terminos" element={<SuspendedRoute><LegalTerms /></SuspendedRoute>} />
          <Route path="/privacidad" element={<SuspendedRoute><LegalPrivacy /></SuspendedRoute>} />
          <Route path="/servicios" element={<SuspendedRoute><Servicios /></SuspendedRoute>} />
          <Route path="/industrias" element={<SuspendedRoute><IndustriasHub /></SuspendedRoute>} />
          <Route path="/ciudades" element={<SuspendedRoute><CiudadesHub /></SuspendedRoute>} />
          <Route path="/mapa-del-sitio" element={<SuspendedRoute><SiteMapPage /></SuspendedRoute>} />
          <Route path="/proyectos" element={<SuspendedRoute><Proyectos /></SuspendedRoute>} />
          <Route path="/proyectos/:slug" element={<SuspendedRoute><ProjectDetail /></SuspendedRoute>} />
          <Route path="/agente" element={<SuspendedRoute><AgentDemo /></SuspendedRoute>} />
          <Route path="/:slug" element={<SuspendedRoute><PseoPage /></SuspendedRoute>} />
          <Route path="*" element={<SuspendedRoute><NotFound /></SuspendedRoute>} />
        </Routes>
        <WhatsAppButton />
      </PostHogProvider>
    </BrowserRouter>
  </>
);

export default App;
