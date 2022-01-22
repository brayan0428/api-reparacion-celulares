import Cliente from "../models/Cliente";

export async function consultarClientes(req, res) {
  const clientes = await Cliente.findAll();
  res.json(clientes);
}

export async function crearCliente(req, res) {
  try {
    const { nombre, direccion, telefono, celular, email } = req.body;
    if (!nombre || !direccion || !telefono || !celular || !email) {
      return res.json({ error: "Debe ingresar todos los campos" });
    }
    await Cliente.create(
      {
        nombre,
        direccion,
        telefono,
        celular,
        email,
      },
      {
        fields: ["nombre", "direccion", "telefono", "celular", "email"],
      }
    );
    res.json({ message: "Cliente creado exitosamente" });
  } catch (error) {
    res.json({ error: error.message });
  }
}
