export const favoritePaths = {
   "/favorites": {
    get:{
        tags:["Favorites"],
        summary:"Listar produtos favoritos",
        security:[
            {
                bearerAuth:[]
            }
        ],
        responses:{
            200:{
                description:"Produtos favoritos listados com sucesso",
               
            }
        }
    }, 
    post:{
        tags:["Favorites"],
        summary:"Adicionar produto aos favoritos",
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
                        $ref:"#/components/schemas/FavoriteInput"
                    }
                }
            }
        },
        responses:{
            201:{
                description:"Produto adicionado aos favoritos com sucesso",
               
            }
        }
    }
    },

    "/favorites/{id}": {
    delete:{
        tags:["Favorites"],
        summary:"Remover produto dos favoritos",
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
        requestBody:{
            required:true,
            content:{
                "application/json":{
                    schema:{
                        $ref:"#/components/schemas/FavoriteInput"
                    }
                }
            }
        },
        responses:{
            204:{
                description:"Produto removido dos favoritos com sucesso",
               
            }
        }
    }
  
},

"/favorites/upload-url":{
    post:{
        tags:["Favorites"],
        summary:"Gerar URL de upload para imagem de favorito",
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
                        $ref:"#/components/schemas/FavoriteInput"
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