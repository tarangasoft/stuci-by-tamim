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

    const onClick = (event: MouseEvent) => {
      const colors = ["#ff9ebb", "#ff6b8b", "#f48fb1", "#ce93d8", "#ffcc80", "#ffe082", "#a5d6a7", "#80cbc4"];
      const count = 10;
      for (let i = 0; i < count; i++) {
        const flower = document.createElement("div");
        flower.className = "click-flower";
        flower.style.left = `${event.clientX}px`;
        flower.style.top = `${event.clientY}px`;

        const size = Math.random() * 14 + 8;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 5 + 2.5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        flower.style.background = color;
        // Petal shape
        flower.style.borderRadius = "75% 0 75% 50%";
        flower.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(flower);

        let posX = event.clientX;
        let posY = event.clientY;
        let opacity = 1;
        let scale = 1;
        let rot = Math.random() * 360;
        const rotVel = (Math.random() - 0.5) * 12;

        const anim = () => {
          posX += vx;
          posY += vy;
          opacity -= 0.022;
          scale -= 0.012;
          rot += rotVel;

          if (opacity <= 0 || scale <= 0) {
            flower.remove();
          } else {
            flower.style.left = `${posX}px`;
            flower.style.top = `${posY}px`;
            flower.style.opacity = `${opacity}`;
            flower.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`;
            requestAnimationFrame(anim);
          }
        };
        requestAnimationFrame(anim);
      }
    };

    const tick = () => {
      x += (targetX - x) * 0.16;
      y += (targetY - y) * 0.16;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(45deg)`;
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", setHover);
    window.addEventListener("click", onClick);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", setHover);
      window.removeEventListener("click", onClick);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
