import {Express} from 'express';
import userRouter from './routers/userRoutes';

export default function setup(app: Express) {
  app.use('/api/v1/user', userRouter);
}
