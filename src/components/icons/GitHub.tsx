"use client";
import { SVGProps, useState } from "react";

export function GitHub({ ...props }: SVGProps<any>) {
    const [key, setKey] = useState(1);
    const updateCard = () => setKey((v) => v + 1);
    return (
        <div title="GitHUB" onMouseEnter={updateCard} onTouchStart={updateCard}>
            <img src={"/github-logo.gif?token=" + key} alt="logo git-hub" />
        </div>
    );
}
