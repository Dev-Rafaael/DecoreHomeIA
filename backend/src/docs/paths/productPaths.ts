export const productPaths = {
 
    
    "/products":{
        get:{
            tags:["Products"],
            summary:"Listar produtos",
            responses:{
                200:{
                    description:"Produtos listados com sucesso",
                    content:{
                        "application/json":{
                            schema:{
                                type:"array",
                                items:{
                                    $ref:"#/components/schemas/Product"
                                }
                            }
                        }
                    }
                }
            }
        },
        post:{
            tags:["Products"],
            summary:"Criar produto",
            requestBody:{
                required:true,
                content :{
                    "application/json":{
                        schema:{
                            $ref:"#/components/schemas/CreateProductInput"
                        }
                    }
                }
            },
            responses:{
                201:{
                    description:"Produto criado com sucesso",
                   
                }
            }
        }
    },
    "/products/{id}":{
        get:{
            tags:["Products"],
            summary:"Buscar produto",
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
                    description:"Produto encontrado com sucesso",
                   content:{
                    "application/json":{
                        schema:{
                            $ref:"#/components/schemas/Product"
                        }
                    }
                   }
                }
            }
        },
        put:{
            tags:["Products"],
            summary:"Atualizar produto",
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
              requestBody:{
                    required:true,
                    content:{
                        "application/json":{
                            schema:{
                                $ref:"#/components/schemas/UpdateProductInput"
                            }
                        }
                    }
                },
            responses:{
                200:{
                    description:"Produto atualizado com sucesso",
                   content:{
                    "application/json":{
                        schema:{
                            $ref:"#/components/schemas/Product"
                        }
                    }
                   }
                }
            }
        },
        delete:{
            tags:["Products"],
            summary:"Deletar produto",
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
            204:{
                description:"Produto deletado com sucesso"
            }
        }
    },

    "/products/upload-url":{
        post:{
            tags:["Products"],
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
                            $ref:"#/components/schemas/UploadInput"
                        }
                    }
                }
            },
            responses:{
                201:{
                    description:"URL de upload gerada com sucesso",
                   content:{
                    "application/json":{
                        schema:{
                            $ref:"#/components/schemas/UploadResponse"
                        }
                    }
                   }
                }
            }
        }
    }
}