import { BsEye, BsInfo } from "react-icons/bs";
import { Link } from "react-router-dom";

const BookCard = ({ book, openModel }) => {
  return (
    <div
      className="bg-white border shadow-lg my-4 mx-2 hover:shadow-xl 
     w-1/2 rounded-lg p-4 relative"
    >
      <h2
        className="text-2xl font-bold mb-2
      text-center
      "
      >
        {book.title}
      </h2>
      <p className="text-lg text-center mt-6">{book.author}</p>
      <p
        className="text-gray-600 text-sm
      text-center mt-4 border p-2 shadow-md shadow-red-300
      "
      >
        {book.publishYear}
      </p>
      <div
        className="flex
      justify-between items-center mt-24"
      >
        <Link to={`/books/details/${book._id}`}>
          <BsInfo
            className="text-red-400 
          hover:text-black
          text-3xl absolute left-4 bottom-4"
          />
        </Link>

        <BsEye
          onClick={() => {
            openModel();
          }}
          className="text-red-400 cursor-pointer
          hover:text-black
          text-3xl absolute right-4 bottom-4"
        />
      </div>
    </div>
  );
};

export default BookCard;
