import React, { useEffect, useRef } from "react";

const Cursor = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            if (glowRef.current) {
                glowRef.current.style.background = `
            radial-gradient(
              600px circle at ${e.clientX}px ${e.clientY}px, 
              rgba(100, 206, 255, 0.2), 
              transparent 80%
            )
          `;
            }
        };

        window.addEventListener("mousemove", onMove);

        return () => {
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none", // 클릭 방해 방지
                zIndex: 1, // 배경보다는 위, 콘텐츠보다는 아래 (상황에 따라 조절)
                transition: "background 0.3s ease-out", // 약간의 잔상 효과
            }}
        />
    );
};

export default Cursor;
