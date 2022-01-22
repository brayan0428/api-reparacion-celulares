import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import Telefono from "./Telefono";

const Cliente = sequelize.define(
  "clientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Cliente.hasMany(Telefono, { foreignKey: "id_cliente", sourceKey: "id" });
Telefono.belongsTo(Cliente, { foreignKey: "id_cliente", sourceKey: "id" });

export default Cliente;
