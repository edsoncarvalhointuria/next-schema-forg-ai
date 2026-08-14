import { Loader } from "lucide-react";
import "./loading.scss";

export default function Loading() {
    return (
        <div className="loading">
            <div className="loading__infos">
                <i>
                    <Loader />
                </i>
                <div className="loading__info">
                    <p>Carregando</p>
                    <div className="loading__animation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
