import { FC, ReactNode, useEffect, useState } from "react";

type Props = {
  render: () => JSX.Element;
};
const RenderOnMount: FC<Props> = ({ render }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  return isMounted ? <>{render()}</> : <></>;
};

export default RenderOnMount;
