export const commonSchemas = {

  Category: {

    type: "string",

    enum: [
      "CADEIRA",
      "MESA",
      "SOFA",
      "DECORACAO"
    ]
  },

  Role: {

    type: "string",

    enum: [
      "ADMIN",
      "USER"
    ]
  },

  Ambiente: {

    type: "string",

    enum: [
      "SALA",
      "QUARTO",
      "COZINHA",
      "BANHEIRO",
      "ESCRITORIO"
    ]
  },

  Estilo: {

    type: "string",

    enum: [
      "MODERNO",
      "MINIMALISTA",
      "CLASSICO",
      "INDUSTRIAL",
      "RUSTICO"
    ]
  },

  Orcamento: {

    type: "string",

    enum: [
      "BAIXO",
      "MEDIO",
      "ALTO"
    ]
  },
  UploadInput:{

  type:"object",

  required:[
    "fileName",
    "contentType"
  ],

  properties:{

    fileName:{
      type:"string"
    },

    contentType:{
      type:"string"
    }
  }
},
UploadResponse:{

  type:"object",

  properties:{

    uploadUrl:{
      type:"string"
    },

    fileUrl:{
      type:"string"
    }
  }
}
}