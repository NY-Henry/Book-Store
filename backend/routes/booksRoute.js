import express from "express";
import { Book } from "../models/bookmodels.js";

const router = express.Router();

// Route to save a new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send("Please fill all the fields");
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(200).send("Book Added Successfully");
  } catch (error) {
    console.log(error.message);
  }
});

// Route to get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to get a specific book by Id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for updating a book
router.put("/:id", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    // Check if all fields are provided
    if (!title || !author || !publishYear) {
      return res.status(400).send("Please fill all the fields");
    }

    const { id } = req.params;

    // Find book by ID and update, returning the updated document
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, publishYear }, // Only update specific fields
      { new: true, runValidators: true } // Return updated book, run schema validators
    );

    // If the book is not found, return a 404 error
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Success response
    return res.status(200).json({ message: "Book Updated Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for deleting a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

export default router;
