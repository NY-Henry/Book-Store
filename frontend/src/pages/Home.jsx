import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Spinner from "../components/Spinner";
import BookCard from "../components/BookCard";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import BooksSingleCard from "../components/home/BooksSingleCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          onClick={() => setShowType("table")}
          className="bg-sky-300 hover:bg-sky-600 
        px-4 py-1 rounded-lg
        "
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className="bg-sky-300 hover:bg-sky-600 
        px-4 py-1 rounded-lg
        "
        >
          Card
        </button>
      </div>
      <div
        className="flex justify-between items-center
      
      "
      >
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to={`/books/create`}>
          <MdOutlineAddBox
            className="text-sky-500
          text-4xl
          "
          />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <>
          <BooksTable books={books} />
          <div className="flex ">
            {books.map(
              (book, index) =>
                index < 2 && <BookCard key={book._id} book={book} />
            )}
          </div>
        </>
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
