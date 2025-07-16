import { Model, DataTypes, Sequelize } from 'sequelize';

export class Order extends Model {
  public orderId!: number;
  public userId!: number;
  public payMethod!: string;
  public payStatus!: string;
  public status!: string; 
  public orderDate!: Date;
  public totalAmount!: number;
  public shippingAddress!: string;

  static associate(models: any) {
    Order.belongsTo(models.User, { foreignKey: 'userId' });
    Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
  }
}

export const initOrderModel = (sequelize: Sequelize) => {
  Order.init({
    orderId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    userId: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    payMethod: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    payStatus: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    status: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    orderDate: { 
      type: DataTypes.DATE, 
      allowNull: false 
    },
    totalAmount: { 
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false 
    },
    shippingAddress: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false,
  });
};