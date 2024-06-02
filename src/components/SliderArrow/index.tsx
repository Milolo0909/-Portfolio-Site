import React from "react";
import styles from "./SliderArrow.module.scss";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const NextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`${styles.slickArrow} ${styles.slickNext} ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export const PrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`${styles.slickArrow} ${styles.slickPrev} ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
