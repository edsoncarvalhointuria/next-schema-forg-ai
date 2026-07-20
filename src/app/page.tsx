import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import "./home.scss";
import TextArea from "@/components/ui/TextArea";

export default function Home() {
    return (
        <>
            <Header />
            <main className="home">
                <h1 className="home__title">
                    <span>Schema Forg AI</span>
                </h1>

                <div className="home__texts">
                    <div className="home__text">
                        <div className="home__text">
                            <h2>JSON</h2>
                        </div>
                        <TextArea />
                    </div>

                    <textarea name="" id=""></textarea>
                </div>
            </main>
            <Footer />
        </>
    );
}
