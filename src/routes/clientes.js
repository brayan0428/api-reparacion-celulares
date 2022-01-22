import { Router } from "express";
import {
  consultarClientes,
  crearCliente,
} from "../controllers/clientes.controller";
const clientesRouter = Router();

clientesRouter.get("/", consultarClientes);
clientesRouter.post("/", crearCliente);

export default clientesRouter;
