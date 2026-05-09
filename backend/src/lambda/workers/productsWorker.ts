

export const handler = async (event: any) => {
    console.log("Evento Recebido:", JSON.stringify(event));

    for (const record of event.Records) {
        try {
            const data = JSON.parse(record.body)
            if (data) {
                console.log("Dados do Evento", data);
            }


            switch (data.type) {
                case "PRODUCT_CREATED":
                    console.log(`Produto Criado: ${data.id}`);
                    break;
                case "PRODUCT_UPDATED":
                    console.log(`Produto Atualizado: ${data.id}`);
                    break
                case "PRODUCT_DELETED":
                    console.log(`Produto Deletado: ${data.id}`);
                    break
                default:
                    break;
            }
        } catch (error) {
            console.error("Erro ao Processar Mensagem", error)
            throw error
        }
    }
}