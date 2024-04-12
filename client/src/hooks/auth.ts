import { isAuthenticated } from "@/lib/actions";
import { useAuthStore } from "@/stores/auth";
import { useEffect, useState } from "react";

const useAuthStatus = () => {
  const [isAuthed, setIsAuthenticated] = useState(false);
  const invalidateSession = useAuthStore((state) => state.invalidateSession);

  console.log({ isAuthed });

  useEffect(() => {
    const cb = async () => {
      const nextIsAuthed = await isAuthenticated();
      setIsAuthenticated(nextIsAuthed);

      if (!nextIsAuthed) {
        invalidateSession();
      }
    };

    cb();
  }, []);

  return isAuthed;
};

export { useAuthStatus };
