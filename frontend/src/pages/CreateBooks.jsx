import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:5555/books", {
        title,
        author,
        publishYear,
      })
      .then((res) => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happenened, Please check the console");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 ">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div
        className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4
      mx-auto
      "
      >
        <form onSubmit={handleSaveBook} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2" htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Enter the title of the book"
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border-2 border-sky-400 rounded-md"
            />
          </label>
          <label className="flex flex-col gap-2" htmlFor="author">
            Author
            <input
              type="text"
              id="author"
              value={author}
              placeholder="Enter the author of the book"
              onChange={(e) => setAuthor(e.target.value)}
              className="p-2 border-2 border-sky-400 rounded-md"
            />
          </label>
          <label className="flex flex-col gap-2" htmlFor="publishYear">
            Publish Year
            <input
              type="number"
              id="publishYear"
              value={publishYear}
              placeholder="Enter the publish year of the book"
              onChange={(e) => setPublishYear(e.target.value)}
              className="p-2 border-2 border-sky-400 rounded-md"
            />
          </label>
          <button
            type="submit"
            className="bg-sky-800 text-white px-4 py-1 rounded-lg
          w-fit
          "
          >
            Save Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBooks;
