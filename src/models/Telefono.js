import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import Reparacion from "./Reparacion";

const Telefono = sequelize.define(
  "telefonos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Telefono.hasMany(Reparacion, { foreignKey: "id_telefono" });
Reparacion.belongsTo(Telefono, { foreignKey: "id_telefono" });

export default Telefono;
