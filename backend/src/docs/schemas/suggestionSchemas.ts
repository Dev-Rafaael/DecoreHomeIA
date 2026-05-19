export const suggestionSchemas = {
    
    decorSuggestion:{
        type:"object",
        properties:{
            id:{
                type:"string"
            },
            userId:{
                type:"string"
            },
            prompt:{
                type:"string"
            },
            response:{
                type:"object"
            },
            ambiente:{
                $ref: "#/components/schemas/Ambiente"
            },
            estilo:{
                $ref: "#/components/schemas/Estilo"
            },
            cores:{
                type:"array",
                items:{
                    type:"string"
                }
            },
            orcamento:{
                $ref: "#/components/schemas/Orcamento"
            },
            modelUsed:{
                type:"string"
            },
            createdAt:{
                type:"string",
                format:"date-time"
            }
        }
    },
    createDecorSuggestionInput:{
        type:"object",
        required:["userId","prompt","response","ambiente","estilo","cores","orcamento","modelUsed"],
        properties:{
            userId:{
                type:"string"
            },
            prompt:{
                type:"string"
            },
            response:{
                type:"object"
            },
            ambiente:{
                $ref: "#/components/schemas/Ambiente"
            },
            estilo:{
                $ref: "#/components/schemas/Estilo"
            },
            cores:{
                type:"array",
                items:{
                    type:"string"
                }
            },
            orcamento:{
                $ref: "#/components/schemas/Orcamento"
            },
            modelUsed:{
                type:"string"
            }
        }
    },
    updateDecorSuggestionInput:{
        type:"object",
        properties:{
            id:{
                type:"string"
            },
            prompt:{
                type:"string"
            },
            response:{
                type:"object"
            },
            ambiente:{
                $ref: "#/components/schemas/Ambiente"
            },
            estilo:{
                $ref: "#/components/schemas/Estilo"
            },
            cores:{
                type:"array",
                items:{
                    type:"string"
                }
            },
            orcamento:{
                $ref: "#/components/schemas/Orcamento"
            },
            modelUsed:{
                type:"string"
            }
        }
    }
}
