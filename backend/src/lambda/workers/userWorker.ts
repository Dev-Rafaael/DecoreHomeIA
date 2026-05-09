
export const handler = async (event: any) => {
    console.log("Evento Recebido", JSON.stringify(event));

    for (const record of event.Records) {
        try {
            const data = JSON.parse(record.body);
            if(data){
                  console.log("Dados do evento", data);
            }
          
            switch(data.type){
            case "USER_CREATED":
                console.log(`Usuário criado: ${data.userId}`);
                break;
            case "USER_UPDATED":
                console.log(`Usuário Atulizado: ${data.userId}`);
                break;
            case "USER_DELETED":
                console.log(`Usuário deletado: ${data.userId}`);
            }
        } catch (error) {
            console.error("Erro ao processar mensagem:", error);
            throw error
        }
    }


}