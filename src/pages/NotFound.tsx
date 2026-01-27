import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark">
      <div className="text-center px-6">
        <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
        <p className="mb-6 text-xl text-brand-slate">Oops! Page not found</p>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white hover:bg-brand-primary/90 px-6 py-3 rounded-xl font-medium transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
