import express,{Request,Response,Application} from 'express';
import dotenv from 'dotenv';
import sequelize,{syncDatabase} from './models/model';
dotenv.config();

const app:Application=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());
 
app.get("./",(req:Request,res:Response)=>{
  res.send("Hello world")
})
async function startServer() {
  await syncDatabase();
  app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
  })
}
startServer().catch(console.error);