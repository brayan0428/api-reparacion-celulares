import Cliente from "../models/Cliente";
import Reparacion from "../models/Reparacion";
import Telefono from "../models/Telefono";

export async function crearReparacion(req, res) {
  try {
    const { id_telefono, descripcion, valor } = req.body;
    const usuario = req.usuario;
    if (!id_telefono || !descripcion || !valor)
      return res.json({ error: "Debe ingresar todos los campos" });
    const telefono = await Telefono.findOne({
      where: { id: id_telefono },
    });
    if (!telefono) return res.json({ error: "Telefono no encontrado" });

    await Reparacion.create({
      id_telefono,
      descripcion,
      valor,
      fecha: new Date(),
      usuario: usuario.id,
    });
    res.json({ message: "Reparación creada exitosamente" });
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function consultarReparaciones(req, res) {
  const reparaciones = await Reparacion.findAll({
    order: [["fecha", "desc"]],
    include: [
      {
        model: Telefono,
        as: "telefono",
        include: [
          {
            model: Cliente,
            as: "cliente",
          },
        ],
      },
    ],
  });
  res.json(reparaciones);
}
