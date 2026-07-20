import { GitHub } from "@/components/icons/GitHub";
import { HuggingFace } from "@/components/icons/HuggingFace";
import Image from "next/image";
import Link from "next/link";
import "./header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__img">
                <Image src="/logo-schema-forg-ai.png" alt="logo" width={554} height={687} loading={"lazy"} />
            </div>

            <div className="header__links">
                <Link href={"https://github.com/edsoncarvalhointuria"} className="header__link header__link--github">
                    <GitHub />
                </Link>
                <Link
                    href={"https://huggingface.co/edsoncarvalhointuria"}
                    className="header__link header__link--hugging-face"
                >
                    <HuggingFace />
                </Link>
            </div>
        </header>
    );
}
