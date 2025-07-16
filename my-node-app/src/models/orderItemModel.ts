import { Model, DataTypes, Sequelize } from 'sequelize';

export class OrderItem extends Model {
  public orderItemId!: number;
  public orderId!: number;
  public productId!: number;
  public quantity!: number;


  static associate(models: any) {
    OrderItem.belongsTo(models.Order, { foreignKey: 'orderId' });
    OrderItem.belongsTo(models.Product, { foreignKey: 'productId' });
  }
}

export const initOrderItemModel = (sequelize: Sequelize) => {
  OrderItem.init({
    orderItemId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    orderId: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    productId: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    quantity: {
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'OrderItem',
    tableName: 'order_items',
    timestamps: false,
  });
};