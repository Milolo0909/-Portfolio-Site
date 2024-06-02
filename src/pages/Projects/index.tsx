import { useState } from "react";
import { Link } from "react-router-dom";

import DraggableWindow from "../../components/DraggableWindow";

import styles from "./Projects.module.scss";

import folderImg from "../../assets/folder.png";
import ProjectsSlider from "../../components/ProjectsSlider";

const Projects = () => {
  const [maxZIndex, setMaxZIndex] = useState(1);

  const handleSetActiveWindow = (updateZIndex: (newZIndex: number) => void) => {
    setMaxZIndex(() => {
      const newMaxZIndex = maxZIndex + 1;
      updateZIndex(newMaxZIndex);
      return newMaxZIndex;
    });
  };

  return (
    <div className={styles.projects}>
      <DraggableWindow
        element={
          <>
            <div className="animated_text">
              <h2>Вернуться на главную</h2>
            </div>
            <Link to={"/"} className={styles.folder}>
              <img src={folderImg} alt="Нажмите сюда" />
            </Link>
          </>
        }
        handleSetActiveWindow={handleSetActiveWindow}
      />
      <ProjectsSlider />
    </div>
  );
};

export default Projects;
