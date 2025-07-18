import express, {Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import sequelize, { syncDatabase } from './models';
import userRouter from './routes/user';
import productRouter from './routes/product';
import orderRouter from './routes/order';
import orderItemRouter from './routes/orderItem';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/orderitems', orderItemRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

async function startServer(){
  await syncDatabase();
  app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch(console.error);