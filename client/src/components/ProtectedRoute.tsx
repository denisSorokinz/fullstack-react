"use client";

import { useAuthStatus } from "@/hooks/auth";
import { isAuthorizedFor } from "@/lib/actions";
import { FC, PropsWithChildren, useEffect, useState } from "react";

type Props = {
  path: string;
};
const ProtectedRoute: FC<PropsWithChildren<Props>> = ({ path, children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [message, setMessage] = useState("");

  // const isAuthenticated = useAuthStatus();
  useEffect(() => {
    const cb = async () => {
      console.log('view:', path)

      const { isAuthorized: nextIsAuthorized, message: nextMessage } =
        await isAuthorizedFor({
          action: "view:page",
          payload: path,
          shouldRefreshSession: true,
        });

      console.log({ nextIsAuthorized, nextMessage });

      setIsAuthorized(nextIsAuthorized);
      nextMessage && setMessage(nextMessage);
    };

    cb();
  }, []);

  if (!isAuthorized) return <h1>{message || `Not authorized to access`}</h1>;

  return <>{children}</>;
};

export default ProtectedRoute;
