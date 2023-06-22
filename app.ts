import setup from './api/routes';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dbconfig from './dbconfig';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
mongoose
  .connect(dbconfig)
  .then(() => {
    console.log('Database connected');
  })
  .catch((error: any) => {
    process.exit(1);
  });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors());
setup(app);
app.listen(port, () => {
  console.log(`server listening to port: ${port}`);
});
