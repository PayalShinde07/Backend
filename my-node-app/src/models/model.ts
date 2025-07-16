import { Sequelize } from 'sequelize';// Main Sequelize class used to connect to the database
import config from '../config/config';// database configuration file (like host, username, password, etc.) which exports settings for different environments

import { initUserModel, User } from '../models/userModel'; // A class (User, Product, etc.)
//An initXModel() function to register the model with Sequelize
import { initProductModel, Product } from '../models/productModel';
import { initOrderModel, Order } from '../models/orderModel';
import { initOrderItemModel, OrderItem } from '../models/orderItemModel';

const env = process.env.NODE_ENV || 'development';// Checks if the app is running in development or production.

const dbConfig = config[env as keyof typeof config];// Loads the correct database config (like username, password) based on environment.

const sequelize = new Sequelize(dbConfig);// Connect to the database

// Initialize models(Each model is "registered" with Sequelize)
initUserModel(sequelize);
initProductModel(sequelize);
initOrderModel(sequelize);
initOrderItemModel(sequelize);

// Associate models
// ?-> This is called optional chaining in JavaScript/TypeScript.it means: If associate exists, then call it.
//Otherwise, do nothing and avoid crashing the app. 
User.associate?.({ Order });
Product.associate?.({ OrderItem });
Order.associate?.({ User, OrderItem });
OrderItem.associate?.({ Order, Product });

// Export all models and sequelize instance
export { sequelize, User, Product, Order, OrderItem };

/* This function:
Tests the DB connection
Creates or updates the tables in the database
Stops the app if DB connection fails */
export const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

export default { sequelize, User, Product, Order, OrderItem };