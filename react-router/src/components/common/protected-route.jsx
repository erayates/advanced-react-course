import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ to, authenticated, element }) => {
  if (!authenticated) return <Navigate to={to} />;
  return (
    <Routes>
      <Route path="/" element={element} />
    </Routes>
  );
};

export default ProtectedRoute;
