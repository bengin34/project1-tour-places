import React from "react";

const Card = ({ id, image, desc, title, price }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow:hidden  "
      key={id}
    >
      <a href={`https://www.google.com/search?q=${title}&hl=tr&sxsrf=AJOqlzWM44gNnQMO0lM2pNxuoYfLRJVMUQ:1676626889615&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiAorTxoZz9AhXL3KQKHVUwDvwQ_AUoAXoECAEQAw&biw=954&bih=973&dpr=1`} className="">
        <img
          className=" transform transition duration-300 scale-100 hover:scale-110 rounded-t-lg h-80 w-full"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-5 ">
        <a href={`https://en.wikipedia.org/wiki/${title}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-8 h-40  font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <div className="flex flex-col md:flex-row md:justify-between md:mt-32  justify-evenly items-center  ">
          <button
            type="button"
            
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="flex-shrink-0 md:mr-4 justify-between inline-block px-6 py-2.5  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
          <a href={`https://www.viator.com/searchResults/all?text=${title}`}>Buy Ticket</a>
          </button>
          <div className="flex-shrink-0">
            <p className=" text-red-600 ">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
