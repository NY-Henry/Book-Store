import { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error occured while deleting the book");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div
        className="flex flex-col 
      items-center border-2 border-sky-400 rounded-xl w-fit p-8
    mx-auto
      "
      >
        <p className="text-lg font-semibold">
          Are you sure you want to delete this book?
        </p>
        <button
          onClick={handleDeleteBook}
          className="bg-red-500 w-full mt-8 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
