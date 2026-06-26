import React, { useState, useEffect } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import Image from "next/image";

export default function SolarisCursor() {
    const { x, y } = useMousePosition();
    useEffect(() => {
        document.body.style.cursor = "none";

        return () => {
            document.body.style.cursor = "auto";
        };
    });

    return (
        <div
            style={{ left: `${x - 32}px`, top: `${y - 35}px` }}
            className="fixed z-30 w-20 h-20 pointer-events-none"
        >
            <Image
                src="/cursor.png"
                unoptimized
                alt=""
                sizes="(max-width: 768px) 100vw, 33vw"
                className="pointer-events-none select-none"
                fill={true}
            />
        </div>
    );
}
