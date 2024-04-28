import { validateAndRefreshSession } from "@/lib/actions";
import { useAuthStore } from "@/stores/auth";
import { useEffect, useState } from "react";

const useAuthStatus = () => {
  const [isAuthed, setIsAuthenticated] = useState(false);
  const invalidateSession = useAuthStore((state) => state.invalidateSession);

  useEffect(() => {
    const cb = async () => {
      const session = await validateAndRefreshSession();
      setIsAuthenticated(Boolean(session));

      if (!session) invalidateSession();
    };

    cb();
  }, []);

  return isAuthed;
};

export { useAuthStatus };
