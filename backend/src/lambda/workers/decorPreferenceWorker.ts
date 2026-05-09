


export const handler = (event: any) => {
    console.log("Evento Recebido:", JSON.stringify(event));

    for (const record of event.Records) {
        try {
             const data = JSON.parse(record.body)
        if (data) {
            console.log("Dados do Evento", data);
        }
        switch (data.type) {
            case 'PREFERENCE_CREATED':
                console.log(`Preferencia Criada: ${data.id}`);

                break;
            case 'PREFERENCE_UPDATED':
                console.log(`Preferencia Atualizada: ${data.id}`);

                break;

            default:
                console.log("Tipo de evento não reconhecido");

                break;
        }
        } catch (error) {
            console.error("Erro ao processar mensagem:", error);
            throw error;
        }
       
    }

}
