"use client";
import { useCallback, useState } from "react";
import TextArea from "./TextArea";
import { Copy } from "lucide-react";
import UrlModal from "./UrlModal";
import { fetchToApi } from "@/actions/fetchAi";
import Loading from "./Loading";

const OPCOES = ["zod", "json", "yaml"] as const;

export default function Texts() {
    const [currentType, setCurrentType] = useState<(typeof OPCOES)[number]>(OPCOES[0]);
    const [valueUser, setValueUser] = useState("");
    const [valueAI, setValueAI] = useState("");
    const [disabled, setDisable] = useState(true);
    const [addURL, setAddURL] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const onChangeValue = useCallback((value: string) => {
        setValueUser(value);
    }, []);
    const onIsInvalid = useCallback((v: boolean) => {
        setDisable(v);
    }, []);
    const getValues = useCallback(async () => {
        if (disabled || !valueUser) return;
        setIsLoading(true);
        setDisable(true);
        const response = await fetchToApi(currentType, valueUser);

        setValueAI(response.response);
        setDisable(false);
        setIsLoading(false);
    }, [valueUser, disabled]);

    return (
        <>
            <div className="home__texts">
                <div className="home__text">
                    <div className="home__text__header">
                        <h2>JSON</h2>

                        <div className="home__text__header-container">
                            <button className="home__text-btn--url" onClick={() => setAddURL(true)}>
                                URL
                            </button>
                            <div className="home__text__actions">
                                <div className="home__text__opcs">
                                    {OPCOES.map((v) => (
                                        <div className="home__text__opc" key={v}>
                                            <label htmlFor={"inp-" + v}>{v}</label>
                                            <input
                                                type="radio"
                                                onChange={() => setCurrentType(v)}
                                                id={"inp-" + v}
                                                checked={v === currentType}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button className="home__text-btn--gerar" disabled={disabled} onClick={getValues}>
                                    GERAR
                                </button>
                            </div>
                        </div>
                    </div>
                    <TextArea value={valueUser} onChange={onChangeValue} isInvalid={onIsInvalid} />
                </div>
                <div className="home__text">
                    <div className="home__text__header">
                        <h2>{currentType}</h2>

                        <div className="home__text__actions">
                            <button className="home__text-btn--copy">
                                <i>
                                    <Copy size={14} />
                                </i>
                                <span>Copiar</span>
                            </button>
                        </div>
                    </div>
                    <TextArea withError={false} readOnly type={currentType} value={valueAI} />
                </div>
            </div>

            {isLoading && <Loading />}

            {addURL && <UrlModal onClose={() => setAddURL(false)} onFind={(v: string) => setValueUser(v)} />}
        </>
    );
}
