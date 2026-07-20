"use server";

export async function fetchToApi(type: "zod" | "yaml" | "json", value: string) {
    const url = process.env.URL_API;
    const obj = {
        type,
        message: `${value}`,
    };

    const response = await fetch(url!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
    });

    const result = await response.json();

    return result;
}
