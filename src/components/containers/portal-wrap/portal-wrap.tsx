import { FC, useState, useEffect, ReactElement } from "react";
import { createPortal } from "react-dom";

interface IPortalWrap {
  children: ReactElement;
}

const PortalWrap: FC<IPortalWrap> = ({ children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};

export default PortalWrap;
