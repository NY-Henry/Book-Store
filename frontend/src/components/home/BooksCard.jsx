import BooksSingleCard from "./BooksSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((item) => (
        <BooksSingleCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default BooksCard;
