"use client";

import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./Pointer.module.css";

export default function Pointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  const springProps = useSpring({
    x: position.x,
    y: position.y,
    opacity: isVisible && !shouldHide ? 1 : 0,
    reset: false,
    config: {
      tension: 120,
      friction: 14,
    },
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isLink = target.closest("a") !== null;
      const isOnPointerHideElement =
        target.closest("[data-pointer-hide]") !== null;
      setShouldHide(isLink || isOnPointerHideElement);
    };

    const hidePointer = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseleave", hidePointer);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseleave", hidePointer);
    };
  }, []);

  return (
    <animated.div
      className={styles.pointer}
      style={{
        left: springProps.x,
        top: springProps.y,
        opacity: springProps.opacity,
      }}
    />
  );
}
