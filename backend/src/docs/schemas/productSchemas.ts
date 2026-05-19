export const productSchemas = {

    Product: {
        type: "object",
        properties: {
            id: {
                type: "string"
            },
            name: {
                type: "string"
            },
            description: {
                type: "string"
            },
            price: {
                type: "number"
            },
            category: {
                $ref: "#/components/schemas/Category"
            },
            imageUrl: {
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
    createProduct: {
        type: "object",
        required: ["name", "description", "price", "category"],
        properties: {
            name: {
                type: "string"
            },
            description: {
                type: "string"
            },
            price: {
                type: "number"
            },
            category: {
                $ref: "#/components/schemas/Category"
            },
            imageUrl: {
                type: "string"
            }
        }
    },
    updateProduct: {
        type: "object",
        properties: {
            name: {
                type: "string"
            },
            description: {
                type: "string"
            },
            price: {
                type: "number"
            },
            category: {
                $ref: "#/components/schemas/Category"
            },
            imageUrl: {
                type: "string"
            }
        }
    }
}