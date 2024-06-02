import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../SliderArrow/index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./ProjectsSlider.module.scss";

const projects = [
    {
        title: "React Movies",
        description:
            "Этот проект представляет собой веб-сайт для поиска и получения информации о фильмах.",
        repository: "https://github.com/Milolo0909/React-Movies",
        link: "https://github.com/Milolo0909/React-Movies/raw/main/src/assets/site_work.gif",
    },
    {
        title: "Mines Game",
        description:
            "Этот проект представляет собой веб-сайт с пародией на азартную игру Mines.",
        repository: "https://github.com/Milolo0909/Mines-Game",
        link: "https://github.com/Milolo0909/Mines-Game/raw/main/site_work.gif",
    },
    {
        title: "Ujjo",
        description: "Этот проект представляет собой адаптивный сайт-визитку.",
        repository: "https://github.com/Milolo0909/Ujjo",
        link: "https://github.com/Milolo0909/Ujjo/raw/main/img/screenshots/screenshot1.jpg",
    },
    {
      title: "Cyberpunk",
      description: "Этот проект представляет собой адаптивный сайт-визитку.",
      repository: "https://github.com/Milolo0909/Cyberpunk",
      link: "https://github.com/Milolo0909/Cyberpunk/raw/main/img/screenshots/screenshot1.jpg",
  },
];

const ProjectSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Slider {...settings} className={styles.slider}>
            {projects.map((project, index) => (
                <div key={index} className={styles.project}>
                    <div className="animated_text">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                    <a href={project.repository} target="_blank">
                        Репозиторий проекта
                    </a>
                    <img src={project.link} alt="Гифка или скриншот сайта" />
                </div>
            ))}
        </Slider>
    );
};

export default ProjectSlider;
