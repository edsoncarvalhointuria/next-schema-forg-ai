import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import "./home.scss";
import TextArea from "@/components/ui/TextArea";
import Texts from "@/components/ui/Texts";

export default function Home() {
    return (
        <>
            <Header />
            <main className="home">
                <h1 className="home__title">
                    <span>Schema Forg AI</span>
                </h1>

                <Texts />
            </main>
            <Footer />
        </>
    );
}
