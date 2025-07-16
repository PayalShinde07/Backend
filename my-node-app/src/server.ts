import express,{Request,Response,Application} from 'express';
import dotenv from 'dotenv';
import db,{syncDatabase} from './models/model';
import Middleware from './middleware/middleware';
dotenv.config();

const app:Application=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(Middleware); 

app.get('/', (req: Request, res: Response) => {
  res.send("Server is running.");
});

app.all('/secret',Middleware,(req:Request,res:Response)=>{
  res.send("Accessed secret route.");
})

async function startServer() {
  await syncDatabase();
  app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
  })
}
startServer().catch(console.error);

