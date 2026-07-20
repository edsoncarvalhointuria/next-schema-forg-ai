"use client";
import { X } from "lucide-react";
import { useState } from "react";
import "./url-modal.scss";

export default function UrlModal({ onFind, onClose }: { onFind: (result: any) => void; onClose: () => void }) {
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(false);
    return (
        <div className="url-modal__overlay">
            <div className="url-modal">
                {loading && <div className="url-modal__loading"></div>}
                <div className="url-modal__header">
                    <h2 className="url-modal__title">URL</h2>

                    <button title="close" type="button" className="url-modal__close" onClick={onClose}>
                        <i>
                            <X />
                        </i>
                    </button>
                </div>

                <div className="url-modal__body">
                    <form
                        action="submit"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setLoading(true);
                            try {
                                const values = new FormData(e.target);
                                const url = values.get("form-url");
                                console.log("url", url);

                                const response = await fetch(String(url));
                                const json = await response.json();
                                if (json) {
                                    onFind(JSON.stringify(json, null, 2));
                                    onClose();
                                } else {
                                    setErro(true);
                                    e.target.reset();
                                    setLoading(false);
                                }
                            } catch (error: any) {
                                console.log(error);
                                setErro(true);
                                e.target.reset();
                                setLoading(false);
                            }
                        }}
                        className="url-modal__form"
                    >
                        <div className="url-modal__form__input">
                            <label htmlFor="form-url">Enter URL to fetch JSON from:</label>
                            <input
                                type="url"
                                name="form-url"
                                id="form-url"
                                placeholder="https://fakeflix-api.vercel.app/genres"
                            />

                            {erro && (
                                <div className="url-modal__form__input--erro" onAnimationEnd={() => setErro(false)}>
                                    <p>There was an error while searching for the URL</p>
                                </div>
                            )}
                        </div>

                        <button type="submit" title="fetch json" disabled={loading}>
                            Fetch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
