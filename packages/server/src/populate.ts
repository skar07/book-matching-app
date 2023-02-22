import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './db/connect';
import { bookModel } from './models/books';
import { BooksData } from './books';

const start = async() => {
      try{
            await connectDB();
            await bookModel.deleteMany()
            await bookModel.create(BooksData)
            console.log('Database populated')
            process.exit(0)
      } catch(error){
            console.log(error)
            process.exit(1)
      }
}
start();