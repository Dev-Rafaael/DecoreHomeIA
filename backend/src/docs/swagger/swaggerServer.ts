

import express from "express";
import swaggerUi from "swagger-ui-express";
import { openApiSpec } from "../openapi";

const app = express();
app.use("/docs",
    swaggerUi.serve,
    swaggerUi.setup(openApiSpec)
);

app.listen(3000, () => {
    console.log("Swagger docs running");
});
