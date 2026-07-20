import Link from "next/link";
import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__link">
                <span>Desenvolvido por:</span>
                <Link href={"https://edsoncarvalhointuria.github.io/portfolio/"}>Edson Carvalho Inturia</Link>
            </p>
        </footer>
    );
}
