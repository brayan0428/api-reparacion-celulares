import express, { json } from "express";
import { validarToken } from "./middlewares/jwt";
import clientesRouter from "./routes/clientes";
import reparacionesRouter from "./routes/reparaciones";
import telefonosRouter from "./routes/telefonos";
import usuariosRouter from "./routes/usuarios";

const app = express();

//middlewares
app.use(json());

//routes
app.use("/api/usuarios", usuariosRouter);

//Middleware para validar token jwt
app.use(validarToken);

app.use("/api/clientes", clientesRouter);
app.use("/api/telefonos", telefonosRouter);
app.use("/api/reparaciones", reparacionesRouter);

export default app;
