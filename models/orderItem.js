const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

class OrderItem extends Model {}

OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "order", key: "id" },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "product", key: "id" },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1,
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "orderItem",
    timestamps: true,
    freezeTableName: true,
  },
);

module.exports = OrderItem;
