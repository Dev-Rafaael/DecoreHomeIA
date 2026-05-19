export const userPaths={
    "/users":{
    get:{
        tags:["Users"],
        summary:"Listar usuários",
        security:[
            {
                bearerAuth:[]
            }
        ],
       responses:{
        200:{
            description:"Usuários listados com sucesso",
           
        }
       }
    },
        post:{
            tags:["Users"],
            summary:"Criar usuário",
            security:[
                {
                    bearerAuth:[]
                }
            ],
            requestBody:{
                required:true,
                content :{
                    "application/json":{
                        schema:{
                            $ref:"#/components/schemas/CreateUserInput"
                        }
                    }
                }
            }
        },

        responses:{
            201:{
                description:"Usuário criado com sucesso",
            }
        }
    },

    "/users/{id}":{
        get:{
            tags:["Users"],
            summary:"Buscar usuário",
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
            responses:{
                200:{
                    description:"Usuário encontrado com sucesso",
                   
                }
            }
        },
        put:{
            tags:["Users"],
            summary:"Atualizar usuário",
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
                    description:"Usuário atualizado com sucesso",
                   
                }
            }
            
        },
        delete:{
            tags:["Users"],
            summary:"Deletar usuário",
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
                204:{
                    description:"Usuário deletado com sucesso",
                   
                }
            }
            
        }
    },
    "/users/upload-url":{
        post:{
            tags:["Users"],
            summary:"Gerar URL de upload",
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
                        $ref:"#/components/schemas/CreateUserInput"
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
    