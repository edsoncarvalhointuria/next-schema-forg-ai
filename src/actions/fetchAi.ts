"use server";

export async function fetchToApi(type: "zod" | "yaml" | "json", value: string) {
    const url = process.env.URL_API;
    const obj = {
        type,
        message: `<${type}_input>
        ${value}
        <${type}_input>


        Você é um Engenheiro de Software Sênior especialista em TypeScript. Sua tarefa é receber um objeto JSON bruto e gerar o código TypeScript correspondente utilizando a biblioteca 'zod' e estendendo com '@asteasolutions/zod-to-openapi'. Crie schemas modulares, fortemente tipados e inclua descrições e exemplos OpenAPI detalhados baseados nos valores do JSON. Retorne APENAS o código TypeScript, sem formatação markdown (\`\`\`typescript) e sem explicações textuais.
        ABSTRAÇÃO DE ARRAYS: Se o JSON contiver arrays com múltiplos objetos semelhantes, NÃO crie schemas repetidos. Identifique o padrão, crie um único schema para o objeto singular e use 'zod.array()' para tipar a lista.
        ENXUTO: Crie apenas as declarações estritamente necessárias. Não encadeie métodos '.openapi()' infinitamente.
        `,
    };

    const response = await fetch(url!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
    });

    const result = await response.json();

    return result;
}
