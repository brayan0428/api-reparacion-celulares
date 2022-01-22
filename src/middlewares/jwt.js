import jsonwebtoken from "jsonwebtoken";
import config from "../../config";

export async function validarToken(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null)
      return res.status(401).json({ message: "Token invalido" });
    const usuario = await jsonwebtoken.verify(token, config.JWTSECRET);
    req.usuario = usuario;
    next();
  } catch (error) {
    res.status(500).json({ message: "Token invalido" });
  }
}
