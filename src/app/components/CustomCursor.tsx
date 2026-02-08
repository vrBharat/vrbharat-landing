"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on client-side and non-touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      if (cursorDotRef.current && cursorRingRef.current) {
        // Dot follows strictly
        cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

        // Ring follows with slight delay/smoothness (handled by CSS transition usually, or JS for more control)
        // For simple performance, we can just update position here and let CSS transition handle the lag if needed,
        // or use requestAnimationFrame for a custom lerp. Let's use direct update + CSS transition for now.
        cursorRingRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onMouseDown = () => {
      setIsHovering(true);
    };

    const onMouseUp = () => {
      setIsHovering(false);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-hover") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform mix-blend-difference"
      />
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-all duration-150 ease-out mix-blend-difference ${
          isHovering ? "scale-150 bg-white/10 border-white" : "scale-100"
        }`}
      />
    </>
  );
}
