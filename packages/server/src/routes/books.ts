import express, { Express, Router } from "express"
export const router: Router = express.Router()

import { getAllBooks } from "../controllers/books";

router.route('/').get(getAllBooks);