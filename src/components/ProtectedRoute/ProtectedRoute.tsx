import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("telegram_user");
    if (storedUser) {
      setIsAuth(true);
    }
  }, []);

  if (isAuth) {
    return <>{children}</>;
  } else {
    return <Navigate to="/auth" />;
  }
};
