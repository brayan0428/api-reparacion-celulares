import res from "express/lib/response";
import Cliente from "../models/Cliente";
import Telefono from "../models/Telefono";

export async function consultarTelefonosCliente(req, res) {
  const { id } = req.params;
  const telefonos = await Telefono.findAll({
    where: {
      id_cliente: id,
    },
    include: [
      {
        model: Cliente,
        as: "cliente",
      },
    ],
  });
  return res.json(telefonos);
}

export async function crearTelefono(req, res) {
  try {
    const { marca, ano, id_cliente } = req.body;
    if (!marca || !ano || !id_cliente)
      return res.json({ error: "Debe ingresar todos los campos" });
    const cliente = await Cliente.findOne({
      where: {
        id: id_cliente,
      },
    });
    if (!cliente) return res.json({ error: "No se encontró el cliente" });
    await Telefono.create({
      marca,
      ano,
      id_cliente,
    });
    res.json({ message: "Telefono guardado exitosamente" });
  } catch (error) {
    res.json({ error: error.message });
  }
}
