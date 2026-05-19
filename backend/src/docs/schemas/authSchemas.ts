export const authSchemas = {
 
        RegisterInput:{
            // TIPO 
            type:"object",

            // CAMPOS OBRIGATORIOS
            required:[
                "name",
                "email",
                "password",
                "birthDate"
            ],
            // TIPO DOS CAMPOS 
            properties:{
             name:{
                type:"string"
             },
             email:{
                type:"string"
             },
             password:{
                type:"string"
             },
             birthDate:{
                type:"string",
                format:"date"
             }   
            }
            
        },

        loginInput:{
            type:'object',

            required:[
                "email",
                "password"
            ],
            properties:{

                email:{
                    type:"string"
                },
                password:{
                    type:"string"
                }
            }
        },
        AuthResponse:{
            type:'object',
            properties:{
                acessToken:{
                    type:'string'
                },
                refreshToken:{
                    type:'string'
                }
            }
        }
}