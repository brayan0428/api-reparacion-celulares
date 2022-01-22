import Usuario from "../models/Usuario";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import config from "../../config";

export async function crearUsuario(req, res) {
  try {
    const { nombre, usuario, clave } = req.body;
    const claveEncriptada = await bcrypt.hash(clave, 10);
    if (!nombre || !usuario || !clave)
      res.status(400).json({ message: "Debe ingresar todos los campos" });
    const existeUsuario = await Usuario.findOne({
      where: {
        usuario: usuario,
      },
    });
    if (existeUsuario)
      res.status(400).json({ message: "Ya existe un usuario creado" });
    await Usuario.create(
      {
        nombre,
        usuario,
        clave: claveEncriptada,
      },
      {
        fields: ["nombre", "usuario", "clave"],
      }
    );
    res.json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function login(req, res) {
  try {
    const { usuario, clave } = req.body;
    if (!usuario || !clave)
      return res.json({ error: "Debe ingresar el usuario y la clave" });
    const usuarioDB = await Usuario.findOne({
      where: {
        usuario,
      },
    });
    if (!usuarioDB)
      return res
        .status(400)
        .json({ message: "El usuario ingresado no existe" });
    const validarClave = await bcrypt.compare(clave, usuarioDB.clave);
    if (!validarClave)
      return res
        .status(400)
        .json({ message: "La clave ingresada no es valida" });
    const token = jsonwebtoken.sign(usuarioDB.toJSON(), config.JWTSECRET, {
      expiresIn: 86400,
    });
    res.json({ message: { token } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
