export const favoriteSchemas = {
    Favorite: {
        type: "object",
        properties: {
            id: {
                type: "string"
            },  
            userId: {
                type: "string"
            },
            suggestionId: {
                type: "string"
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
    createFavorite: {
        type: "object",
        required: ["userId", "suggestionId"],
        properties: {
            userId: {
                type: "string"
            },
            suggestionId: {
                type: "string"
            }
        }
    },
    updateFavorite: {
        type: "object",
        properties: {
            userId: {
                type: "string"
            },
            suggestionId: {
                type: "string"
            }
        }
    }
}