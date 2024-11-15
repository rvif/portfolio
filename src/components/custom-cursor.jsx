import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 1,
      transformOrigin: "center center",
    });

    gsap.set(cursorBorder, {
      transformOrigin: "center center",
    });

    const handleMouseMove = (e) => {
      setIsVisible(true);
      mouseX = e.clientX;
      mouseY = e.clientY;

      const deltaX = mouseX - lastX;
      const deltaY = mouseY - lastY;
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX);

      const baseDeform = 0.15;
      const maxDeform = 0.4;
      const deformation = Math.min(baseDeform + speed * 0.01, maxDeform);

      gsap.to(cursor, {
        duration: 0.15,
        x: mouseX,
        y: mouseY,
      });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (speed > 0.1) {
        const rotationAngle = (angle * 180) / Math.PI;
        const isLeftHemisphere = Math.abs(angle) > Math.PI / 2;

        gsap.killTweensOf(cursorBorder);

        if (isLeftHemisphere) {
          const mirroredAngle =
            rotationAngle > 0 ? rotationAngle - 180 : rotationAngle + 180;

          gsap.to(cursorBorder, {
            duration: 0.2,
            rotation: mirroredAngle,
            scaleX: 1 + deformation,
            scaleY: 1 - deformation * 0.5,
            ease: "power2.out",
            overwrite: true,
          });
        } else {
          gsap.to(cursorBorder, {
            duration: 0.2,
            rotation: rotationAngle,
            scaleX: 1 + deformation,
            scaleY: 1 - deformation * 0.5,
            ease: "power2.out",
            overwrite: true,
          });
        }
      }

      timeoutRef.current = setTimeout(() => {
        gsap.to(cursorBorder, {
          duration: 0.4,
          scaleX: 1,
          scaleY: 1,
          ease: "power2.out",
          overwrite: true,
        });
      }, 50);

      lastX = mouseX;
      lastY = mouseY;
    };

    const handleMouseDown = () => {
      gsap.to(cursorBorder, {
        duration: 0.15,
        scale: 0.8,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorBorder, {
        duration: 0.15,
        scale: 1,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "fixed w-8 h-8 pointer-events-none z-[9999]",
        "transition-opacity duration-150",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        ref={cursorBorderRef}
        className="absolute inset-0 rounded-full border-2 border-primary/70"
      />
    </div>
  );
}
