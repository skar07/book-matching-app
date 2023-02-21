import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

import { connectDB } from './db/connect';
import { booksRouter } from './routes/books'

dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
      res.send('<h1>Hello from the TypeScript world!</h1>');
});

app.use('/api/v1/books', booksRouter);

const start = async () => {
      try{
            await connectDB(process.env.MONGO_URI as string);
            app.listen(PORT, () => console.log(`Server is listening port ${PORT}...`));
      } catch (error) {
            console.log(error)
      }
}
start();
