import { Router } from "express";
import {
  consultarTelefonosCliente,
  crearTelefono,
} from "../controllers/telefonos.controller";

const telefonosRouter = Router();

telefonosRouter.get("/:id", consultarTelefonosCliente);
telefonosRouter.post("/", crearTelefono);

export default telefonosRouter;
