"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let frame = 0;

    const move = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const setHover = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, input, select, textarea, .magnetic");
      const image = target?.closest("[data-cursor='image']");
      const lang = target?.closest("[data-cursor='language']");
      cursor.dataset.hover = interactive ? "true" : "false";
      cursor.dataset.image = image ? "true" : "false";
      cursor.dataset.language = lang ? "true" : "false";
    };

    const tick = () => {
      x += (targetX - x) * 0.16;
      y += (targetY - y) * 0.16;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", setHover);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", setHover);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
