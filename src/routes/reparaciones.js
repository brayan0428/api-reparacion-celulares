import { Router } from "express";
import {
  consultarReparaciones,
  crearReparacion,
} from "../controllers/reparaciones.controller";

const reparacionesRouter = Router();

reparacionesRouter.get("/", consultarReparaciones);
reparacionesRouter.post("/", crearReparacion);

export default reparacionesRouter;
