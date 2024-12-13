import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { MdInfoOutline } from 'react-icons/md';
import { HiOutlineTrash } from 'react-icons/hi';

const BooksCard = ({ books }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 bg-gray-100">
      {books.map((item) => (
        <div
          key={item._id}
          className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden border border-indigo-200"
        >
          <div className="absolute top-2 right-2 bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-lg shadow">
            {item.publishYear}
          </div>
          <div className="p-6">
            <h4 className="text-gray-400 text-xs truncate font-mono">ID: {item._id}</h4>
            <div className="flex items-center gap-2 mt-3">
              <FaBook className="text-indigo-500 text-2xl" />
              <h2 className="text-xl font-semibold truncate text-gray-800">{item.title}</h2>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaUserAlt className="text-teal-500 text-xl" />
              <h3 className="text-md text-gray-600 truncate">{item.author}</h3>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 mt-4 p-4 border-t border-indigo-300 bg-indigo-50">
            <Link to={`books/details/${item._id}`}>
              <MdInfoOutline className="text-2xl text-blue-500 hover:text-blue-700 transition" />
            </Link>
            <Link to={`/books/edit/${item._id}`}>
              <RiEdit2Line className="text-2xl text-yellow-500 hover:text-yellow-700 transition" />
            </Link>
            <Link to={`/books/delete/${item._id}`}>
              <HiOutlineTrash className="text-2xl text-red-500 hover:text-red-700 transition" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
