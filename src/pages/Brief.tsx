import { Navigate, useLocation } from "react-router-dom";

const Brief = () => {
  const location = useLocation();
  return <Navigate to={`/${location.search}#builder`} replace />;
};

export default Brief;
