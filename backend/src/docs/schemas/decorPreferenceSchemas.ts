export const decorPreferenceSchemas = {
    DecorPreference: {
        type: "object",
        properties: {
            id: {
                type: "string"
            },
            userId: {
                type: "string"
            },
            ambiente: {
                type: "string"
            },
            estilo: {
                type: "string"
            },
            cores: {
                type: "array",
                items: {
                    type: "string"
                }
            },
            orcamento: {
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
    createDecorPreference: {
        type: "object",
        required: ["userId", "ambiente", "estilo", "cores", "orcamento"],
        properties: {
            userId: {
                type: "string"
            },
            ambiente: {
                type: "string"
            },
            estilo: {
                type: "string"
            },
            cores: {
                type: "array",
                items: {
                    type: "string"
                }
            },
            orcamento: {
                type: "string"
            }
        }
    },
    updateDecorPreference: {
        type: "object",
        properties: {
            userId: {
                type: "string"
            },
            ambiente: {
                type: "string"
            },
            estilo: {
                type: "string"
            },
            cores: {
                type: "array",
                items: {
                    type: "string"
                }
            },
            orcamento: {
                type: "string"
            }
        }
    }
}