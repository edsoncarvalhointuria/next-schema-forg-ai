"use server";

const messages = {
    zod: "Você é um Engenheiro de Software Sênior especialista em TypeScript. Sua tarefa é receber um objeto JSON bruto e gerar o código TypeScript correspondente utilizando a biblioteca 'zod' e estendendo com '@asteasolutions/zod-to-openapi'. Crie schemas modulares, fortemente tipados e inclua descrições e exemplos OpenAPI detalhados baseados nos valores do JSON. Retorne APENAS o código TypeScript, sem formatação markdown (```typescript) e sem explicações textuais.",
    yaml: "Converta o JSON de entrada em uma especificação OpenAPI 3.0 em YAML com a indentação correta. Aloque as entidades dentro de 'components:\n  schemas:\n    NomeDaEntidade:'. Quando precisar referenciar, use o padrão estrito: $ref: '#/components/schemas/NomeDaEntidade'. Retorne apenas o código YAML.",
    json: "Você é um Arquiteto de Software especialista em documentação de APIs. Converta o JSON de entrada em uma especificação OpenAPI 3.0 em formato JSON estruturado. Inclua as raízes obrigatórias ('openapi', 'info', 'components' com os schemas, e 'paths'). Retorne APENAS o código JSON válido.",
};

export async function fetchToApi(type: "zod" | "yaml" | "json", value: string) {
    const url = process.env.URL_API;
    const obj = {
        type,
        message: `${value}
${messages[type]}
        
IDENTIFIQUE O PADRÃO E FAÇA O OBJETO SEM REPETIÇÕES.`,
    };

    const response = await fetch(url!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
    });

    const result = await response.json();

    return result;
}
