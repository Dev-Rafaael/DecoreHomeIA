export const suggestionPaths = {
    "/suggestions": {   
     post:{
        tags:["Suggestions"],
        summary:"Gerar sugestão de design",
        requestBody:{
            required:true,
            content:{
                "application/json":{
                    schema:{
                        $ref:"#/components/schemas/SuggestionInput"
                    }
                }
            }
        },
        responses:{
            200:{
                description:"Sugestão gerada com sucesso",
               
            }
        }
     },
     get:{
        tags:["Suggestions"],
        summary:"Listar sugestões",
        security:[
            {
                bearerAuth:[]
            }
        ],
        responses:{
            200:{
                description:"Sugestões listadas com sucesso",
               
            }
        }
     }
},

"/suggestions/{id}": {
    get:{
        tags:["Suggestions"],
        summary:"Obter sugestão por ID",
        parameters:[
            {
                name:"id",
                in:"path",
                required:true,
                schema:{
                    type:"string"
                }
            }
        ],
        security:[
            {
                bearerAuth:[]
            }
        ],
        responses:{
            200:{
                description:"Sugestão obtida com sucesso",
               
            }
        }
    }
},

"/suggestions/upload-url":{
    post:{
        tags:["Suggestions"],
        summary:"Gerar URL de upload para imagem de sugestão",
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
                        $ref:"#/components/schemas/SuggestionInput"
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