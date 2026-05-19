import { authPaths } from "./paths/authPaths";
import { decorPreferencePaths } from "./paths/decorPreferencePaths";
import { favoritePaths } from "./paths/favoritePaths";
import { productPaths } from "./paths/productPaths";
import { suggestionPaths } from "./paths/suggestionPaths";
import { userPaths } from "./paths/userPaths";
import { authSchemas } from "./schemas/authSchemas";
import { decorPreferenceSchemas } from "./schemas/decorPreferenceSchemas";
import { favoriteSchemas } from "./schemas/favoriteSchemas";
import { productSchemas } from "./schemas/productSchemas";
import { suggestionSchemas } from "./schemas/suggestionSchemas";
import { userSchemas} from "./schemas/userSchemas";

export const openApiSpec = {
    // VERSAO DA ESPECIFICACAO
    openapi: "3.0.0",
    
    info:{
        // INFORMACOES DO PROJETO
        title: "DecoreHome AI API",
        version: "1.0.0",
        description: "Backend serverless com AWS"
    },
    components:{
        securitySchemes:{
            bearerAuth:{
                type:"http",
                scheme:"bearer",
                bearerFormat:"JWT"
            }
        },
        schemas:{
            ...authSchemas,
            ...userSchemas,
            ...productSchemas,
            ...favoriteSchemas,
            ...decorPreferenceSchemas,
            ...suggestionSchemas
        },
        paths:{
            ...authPaths,
            ...userPaths,
            ...productPaths,
            ...favoritePaths,
            ...decorPreferencePaths,
            ...suggestionPaths
        }
    }
}