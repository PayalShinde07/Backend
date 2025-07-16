// Model: Base class from Sequelize to define your model.
// DataTypes: An object with Sequelize data types like STRING, INTEGER, TEXT, etc.
// Sequelize: The main Sequelize instance type used to connect and initialize models.

import { Model, DataTypes, Sequelize } from 'sequelize';

// creates a Sequelize model class named User that extends the base Model class 
// Define the User Class
// These are TypeScript declarations, not actual database definitions
export class User extends Model {
  public userId!: number; // We can tell typescript these field will definitely be assigned
  public firstName!: string;
  public lastName!: string;
  public password!: string;
  public email!: string;
  public phone!: number;
  public address!: string;
// public makes them accessible across the app

// Define Associations
// We make associate() as a static because we can applies it to all models.
  static associate(models: any) {
    User.hasMany(models.Order, { //A user can have multiple orders.
      foreignKey: 'userId',
      as: 'orders',
    });
  }
}

// Initialize Model Schema
// initUserModel() is a function that initializes the model with its schema and config.
// It takes a sequelize instance to register the model with.
// Each key in the object passed to User.init() represents a column in the users table
export const initUserModel = (sequelize: Sequelize) => {
  User.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,// use for longer text
      allowNull: false
    },
  }, {
    // This part means
    // “Hey, this model is called User, and it uses the users table in the database. Don’t add timestamp fields like createdAt and updatedAt. Use this database connection when you work with it.”
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  });
};
