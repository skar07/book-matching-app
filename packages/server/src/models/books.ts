import mongoose from "mongoose";

const booksSchema  = new mongoose.Schema({
      name: {
            type: String,
            required: [true, 'Book name must be provided'],
      },
      genre: {
            type: String,
            required: [true,'Book genre must be provided']
      },
      published_year: {
            type: Number,
            required: [true, 'Book publish date must be provided']
      }
})

export const bookModel = mongoose.model('Books', booksSchema);