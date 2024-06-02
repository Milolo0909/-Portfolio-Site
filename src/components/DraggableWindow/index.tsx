import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import styles from "./DraggableWindow.module.scss";

type DraggableWindowProps = {
  element: React.ReactNode;
  fontSize?: string;
  handleSetActiveWindow: (updateZIndex: (newZIndex: number) => void) => void;
};

const DraggableWindow: React.FC<DraggableWindowProps> = ({
  element,
  fontSize,
  handleSetActiveWindow,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState(1);

  const handleFocus = () => {
    handleSetActiveWindow((newZIndex: number) => {
      setZIndex(newZIndex);
    });
  };

  return (
    <Draggable nodeRef={nodeRef} bounds="parent" onMouseDown={handleFocus}>
      <div ref={nodeRef} className={styles.window} style={{ fontSize, zIndex }}>
        {element}
      </div>
    </Draggable>
  );
};

export default DraggableWindow;
