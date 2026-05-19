export const userSchemas = {
    User: {
        type: "object",
        properties: {
            id: {
                type: "string"
            },
            name: {
                type: "string"
            },
            email: {
                type: "string",
                format: "email"
            },
            birthDate: {
                type: "string"
            },
            gender: {
                type: "string"
            },
            phone: {
                type: "string"
            },
            role: {
                $ref: "#/components/schemas/Role"
            },
            createdAt: {
                type: "string",
                format: "date-time"
            },
            updatedAt: {
                type: "string",
                format: "date-time"
            }
        }
    },
    createUserInput:{
        type:"object",
        required:["name","email","password","birthDate","gender","phone"],
        properties:{
            name:{
                type:"string"
            },
            email:{
                type:"string",
                format:"email"
            },
            password:{
                type:"string"
            },
            birthDate:{
                type:"string"
            },
            gender:{
                type:"string"
            },
            phone:{
                type:"string"
            },
            role:{
                $ref: "#/components/schemas/Role"
            }
        }
    },
    updateUserInput:{
        type:"object",
        properties:{
            name:{
                type:"string"
            },
            email:{
                type:"string",
                format:"email"
            },
            birthDate:{
                type:"string"
            },
            gender:{
                type:"string"
            },
            phone:{
                type:"string"
            },
            role:{
                $ref: "#/components/schemas/Role"
            }
        }
    }
} 