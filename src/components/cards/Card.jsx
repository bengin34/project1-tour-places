import React from "react";

const Card = ({ id, image, desc, title, price }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow:hidden "
      key={id}
    >
      <a href="#" className="">
        <img
          className=" transform transition duration-300 scale-100 hover:scale-110 rounded-t-lg h-80 w-full"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-5 ">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <div className="flex justify-between items-center ">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"

          >
            Buy Ticket
          </button>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
