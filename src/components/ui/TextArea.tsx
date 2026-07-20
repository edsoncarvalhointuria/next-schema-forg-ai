"use client";
import ReactCodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { linter } from "@codemirror/lint";
import "./text-area.scss";

export default function TextArea() {
    const [textJson, setTextJson] = useState("");

    return (
        <ReactCodeMirror
            value={textJson}
            height="500px"
            theme={"dark"}
            extensions={[json(), linter(jsonParseLinter(), { autoPanel: true })]}
            onChange={(v) => {
                setTextJson(v);
                console.log(v);
            }}
            className="text-area"
        />
    );
}
