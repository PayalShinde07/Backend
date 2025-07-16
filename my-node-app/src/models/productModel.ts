import { Model, DataTypes, Sequelize } from 'sequelize';

export class Product extends Model {
  public productId!: number;
  public productName!: string;
  public brand!: string;
  public productDesc!: string;
  public Category!: string;
  public productPrice!: number;
  public Qty!: number;

  static associate(models: any) {
    Product.hasMany(models.OrderItem, { foreignKey: 'productId' });
  }
}

export const initProductModel = (sequelize: Sequelize) => {
  Product.init({
    productId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    productName: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productDesc: { 
      type: DataTypes.TEXT,
      allowNull: false 
    },
    Category: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    productPrice: { 
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false 
    },
    Qty: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false,
  });
};
