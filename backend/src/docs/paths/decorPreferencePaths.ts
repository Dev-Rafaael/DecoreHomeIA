export const decorPreferencePaths = {
"/preferences":{
    get:{
        tags:["Preferences"],
        summary:"Obter preferências decorativas",
        security:[
            {
                bearerAuth:[]
            }
        ],
        responses:{
            200:{
                description:"Preferências obtidas com sucesso",
               
            }
        }
    },
    post:{
        tags:["Preferences"],
        summary:"Criar preferência decorativa",
        security:[
            {
                bearerAuth:[]
            }
        ],
        requestBody:{
            required:true,
            content:{
                "application/json":{
                    schema:{
                        $ref:"#/components/schemas/PreferenceInput"
                    }
                }
            }
        },
        responses:{
            200:{
                description:"Preferência criada com sucesso",
               
            }
        }
    }
} ,
"/preferences/{id}":{
    put:{
        tags:["Preferences"],
        summary:"Atualizar preferência decorativa por ID",
        security:[
            {
                bearerAuth:[]
            }
        ],
        responses:{
            200:{
                description:"Preferência obtida com sucesso",
               
            }
        }
    }
}
,
"/preferences/upload-url":{
    post:{
        tags:["Preferences"],
        summary:"Gerar URL de upload para imagem de preferência",
        security:[
            {
                bearerAuth:[]
            }
        ],
        requestBody:{
            required:true,
            content:{
                "application/json":{
                    schema:{
                        $ref:"#/components/schemas/PreferenceInput"
                    }
                }
            }
        },
        responses:{
            201:{
                description:"URL de upload gerada com sucesso",
               
            }
        }
    }
}
}