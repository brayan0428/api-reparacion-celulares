import { Router } from "express";
import { crearUsuario, login } from "../controllers/usuarios.controller";
const usuariosRouter = Router();

usuariosRouter.post("/", crearUsuario);
usuariosRouter.post("/login", login);
export default usuariosRouter;
