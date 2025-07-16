import { Request, Response, NextFunction } from 'express';

const Middleware = (req: Request, res: Response, next: NextFunction): void => {

  console.log("Hello from middleware!");
  console.log('Request Method:', req.method);
  next(); // Call next middleware
};

export default Middleware;
