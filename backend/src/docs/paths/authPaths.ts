export const authPaths = {
    // ENDPOINT

    '/auth/me':{
        get:{
            tags:["Auth"],
            summary:"Buscar usuário logado",
            security:[
                {
                    bearerAuth:[]
                }
            ],
            responses:{
                200:{
                    description:"Usuário encontrado com sucesso",
                   
                }
            }
        }
    },
    '/auth/login':{
        post:{
            tags:["Auth"],
            summary:"Login usuário",
            
            requestBody:{
                required:true,
                content:{
                    "application/json":{
                        schema:{
                            $ref:"#/components/schemas/LoginInput"
                        }
                    }
                }
            },
              responses:{
            200:{
                description:"Login realizado com sucesso",
                content:{
                    "application/json":{
                        schema:{
                            $ref:"#/components/schemas/AuthResponse"
                        }
                    }
                }
            }
        }
        }
    
    }
   
  
}