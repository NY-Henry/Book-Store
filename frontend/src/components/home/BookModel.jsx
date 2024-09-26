import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
const BookModel = ({ item, onclose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60
    top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center
    "
      onClick={onclose}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" bg-white rounded-xl min-w-[400px] max-w-[600px] 
        h-[400px] p-4 flex flex-col gap-y-4 relative shadow-lg shadow-red-300
        "
      >
        <AiOutlineClose
          className="text-red-500 text-3xl absolute top-4 right-4 cursor-pointer"
          onClick={onclose}
        />
        <h2
          className="w-fit
            px-4 py-1 rounded-lg bg-red-300
            "
        >
          {item.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{item._id}</h4>
        <div
          className="flex justify-start
          items-center gap-x-2
          "
        >
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{item.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1 ">{item.author}</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          similique voluptas, iste error eius facilis omnis officiis a fugit
          illum cupiditate voluptatibus, quidem quis aliquid qui! Mollitia magni
          omnis doloribus.
        </p>
      </div>
    </div>
  );
};

export default BookModel;
