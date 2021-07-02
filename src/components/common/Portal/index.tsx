import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const StackedPortalContext = createContext<{
  setParentVisible: Dispatch<SetStateAction<boolean>>;
  closeParent: (isAutoClosing?: true) => void;
}>({
  setParentVisible: () => null,
  closeParent: () => null,
});

export interface IStackedPortalProps {
  closeParentOnClose?: boolean;
  handleClose: (isAutoClosing?: any) => void;
}

export const StackedPortal: FunctionComponent<IStackedPortalProps> = ({
  closeParentOnClose,
  handleClose,
  children,
}) => {
  const rootModalEl = useRef<HTMLElement>();
  const { closeParent, setParentVisible } = useContext(StackedPortalContext);
  const [portalOpen, setPortalOpen] = useState(false);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    rootModalEl.current = document.getElementById("app-portal")!;
    setPortalOpen(true);
    setParentVisible(false);
    return () => {
      setParentVisible(true);
      setPortalOpen(false);
      if (closeParentOnClose) {
        closeParent(true);
      }
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.keyCode === 27) {
        handleClose();
      }
    };
    if (visible) {
      document.addEventListener("keydown", closeOnEscape);
      return () => document.removeEventListener("keydown", closeOnEscape);
    }
  }, [visible, handleClose]);

  return (
    <StackedPortalContext.Provider
      value={{ setParentVisible: setVisible, closeParent: handleClose }}
    >
      {portalOpen &&
        createPortal(
          <div style={{ display: visible ? "block" : "none" }}>{children}</div>,
          rootModalEl.current!
        )}
    </StackedPortalContext.Provider>
  );
};
