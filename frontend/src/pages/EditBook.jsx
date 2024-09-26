import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened, please check the console");
        console.log(err);
      });
  }, [id]);

  const handleEditBook = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .put(`http://localhost:5555/books/${id}`, {
        title,
        author,
        publishYear,
      })
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Book updated successfully", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An error happened", {
          variant: "error",
        });
        //alert("An error happened, please check the console");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 ">Edit Book</h1>
      {loading && <Spinner />}
      <form
        onSubmit={handleEditBook}
        className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
      >
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
          className="bg-sky-800 mt-4 text-white px-4 py-1 rounded-lg w-fit"
        >
          Save Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
