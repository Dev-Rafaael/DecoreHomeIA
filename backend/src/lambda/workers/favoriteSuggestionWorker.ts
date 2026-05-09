



export const handler = (event: any) => {
    console.log("Evento Recebido", JSON.stringify(event));

    for (const record of event.Records) {
        try {
            const data = JSON.parse(record.body)
            if (data) {
                console.log("Dados do Evento", data);
                switch (data.type) {
                    case "FAVORITE_SUGGESTION_CREATED":
                        console.log(`Sugestão Favorita Criada: ${data.id}`);
                        break;
                    case "FAVORITE_SUGGESTION_DELETED":
                        console.log(`Sugestão Favorita Removida: ${data.id}`);
                        break;
                    default:
                        console.log("Tipo de evento não reconhecido");

                        break;
                }
            }
        } catch (error) {
            console.error("Erro ao processar mensagem:", error);
            throw error;
        }

    }

}