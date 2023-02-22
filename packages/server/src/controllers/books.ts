import { bookModel } from "../models/books";
import { NextFunction, Request, Response } from "express";

import { createCustomError } from "../errors/custom-errors";

export const getAllBooks = async (req: Request, res: Response) => {
      const books = await bookModel.find({})
            .sort('published_year')
      res.status(200).json({ books, nbHits: books.length });
};

export const getBook = async (req: Request, res: Response, next: NextFunction) => {
      const { id: bookID } = req.params
      const book = await bookModel.findOne({ _id: bookID })
      if (!book) {
            return next(createCustomError(`No book with id: ${bookID}`, 404))
      }

      res.status(200).json({ book })
}
