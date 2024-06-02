import React, { useState } from "react";
import DraggableWindow from "../../components/DraggableWindow";
import { Link } from "react-router-dom";

import styles from "./Main.module.scss";

import folderImg from "../../assets/folder.png";

const Main: React.FC = () => {
    const [maxZIndex, setMaxZIndex] = useState(1);

    const handleSetActiveWindow = (
        updateZIndex: (newZIndex: number) => void
    ) => {
        setMaxZIndex(() => {
            const newMaxZIndex = maxZIndex + 1;
            updateZIndex(newMaxZIndex);
            return newMaxZIndex;
        });
    };

    return (
        <div className={styles.main}>
            <DraggableWindow
                element={
                    <div className="animated_text">
                        <h1>
                            Привет! <br /> Я Матвей!
                        </h1>
                    </div>
                }
                handleSetActiveWindow={handleSetActiveWindow}
            />
            <DraggableWindow
                element={
                    <div className="animated_text">
                        <h2>Обо мне</h2> <br />
                        <p>
                            Мне 14 лет, и я начинающий frontend-разработчик. Ищу
                            возможности для получения практического опыта и
                            улучшения своих навыков. Всегда рад учиться и
                            развиваться.
                        </p>
                    </div>
                }
                fontSize="24px"
                handleSetActiveWindow={handleSetActiveWindow}
            />
            <DraggableWindow
                element={
                    <>
                        <div className="animated_text">
                            <h2>Ссылки</h2> <br />
                        </div>
                        <ul className={styles.socials}>
                            <li>
                                <a href="mailto:milolo0909@mail.ru">
                                    milolo0909@mail.ru
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/milolo0909">Telegram</a>
                            </li>
                            <li>
                                <a href="https://github.com/Milolo0909">Github</a>
                            </li>
                            <li>
                                <a href="https://vk.com/milolo0909">VK</a>
                            </li>
                        </ul>
                    </>
                }
                fontSize="36px"
                handleSetActiveWindow={handleSetActiveWindow}
            />
            <DraggableWindow
                element={
                    <div className="animated_text">
                        <h2>Мой стек технологий</h2> <br />
                        <p>
                            HTML, CSS, SCSS, JavaScript, TypeScript, React,
                            Redux Toolkit, Git
                        </p>
                    </div>
                }
                fontSize="32px"
                handleSetActiveWindow={handleSetActiveWindow}
            />
            <DraggableWindow
                element={
                    <>
                        <div className="animated_text">
                            <h2>Мои проекты</h2>
                        </div>
                        <Link to={"/projects"} className={styles.folder}>
                            <img src={folderImg} alt="Нажмите сюда" />
                        </Link>
                    </>
                }
                handleSetActiveWindow={handleSetActiveWindow}
            />
        </div>
    );
};

export default Main;
