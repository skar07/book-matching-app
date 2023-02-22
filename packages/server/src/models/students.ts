import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
      age: {
            type: Number,
            required: [true, 'Please enter the student name'],
      },
      genre: {
            type: String,
            enum: {
                  values: ['Male', 'Female', 'Other'],
                  message: '{VALUE} is not supported'
            }
      }
});

export const studentsModel = mongoose.model('Books', studentsSchema)