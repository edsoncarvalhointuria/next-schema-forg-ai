"use client";
import ReactCodeMirror from "@uiw/react-codemirror";
import { memo, useEffect, useState } from "react";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { diagnosticCount, linter } from "@codemirror/lint";
import "./text-area.scss";
import { yaml } from "@codemirror/lang-yaml";
import { javascript } from "@codemirror/lang-javascript";

function TextArea({
    onChange,
    type = "json",
    withError = true,
    value = "",
    readOnly = false,
    isInvalid,
}: {
    type?: "zod" | "yaml" | "json";
    withError?: boolean;
    value?: string;
    readOnly?: boolean;
    onChange?: (v: string) => void;
    isInvalid?: (v: boolean) => void;
}) {
    const extensions = type === "json" ? [json()] : type === "zod" ? [javascript()] : [yaml()];
    return (
        <ReactCodeMirror
            readOnly={readOnly}
            editable={!readOnly}
            value={value}
            height="500px"
            theme={"dark"}
            onUpdate={(viewUpdate) => {
                if (!isInvalid) return;

                const errors = diagnosticCount(viewUpdate.state);
                if (errors > 0) isInvalid(true);
                else isInvalid(false);
            }}
            extensions={withError ? [...extensions, linter(jsonParseLinter(), { autoPanel: true })] : extensions}
            onChange={onChange}
            className="text-area"
        />
    );
}

export default memo(TextArea);
