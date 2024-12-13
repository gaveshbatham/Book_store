import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border border-gray-200 shadow-lg rounded-md overflow-hidden">
      <thead className="bg-indigo-500 text-white">
        <tr>
          <th className="py-3 px-4 text-left">No.</th>
          <th className="py-3 px-4 text-left">Title</th>
          <th className="py-3 px-4 text-left hidden md:table-cell">Author</th>
          <th className="py-3 px-4 text-left hidden md:table-cell">Publish Year</th>
          <th className="py-3 px-4 text-center">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr
            key={book._id}
            className="even:bg-gray-100 odd:bg-white hover:bg-indigo-100 transition"
          >
            <td className="py-3 px-4 text-gray-700">{index + 1}</td>
            <td className="py-3 px-4 text-gray-700">{book.title}</td>
            <td className="py-3 px-4 text-gray-700 hidden md:table-cell">{book.author}</td>
            <td className="py-3 px-4 text-gray-700 hidden md:table-cell">{book.publishYear}</td>
            <td className="py-3 px-4 text-center">
              <div className="flex justify-center items-center gap-4">
                <Link to={`books/details/${book._id}`} className="text-green-600 hover:text-green-800">
                  <BsInfoCircle className="text-2xl" />
                </Link>
                <Link to={`/books/edit/${book._id}`} className="text-yellow-500 hover:text-yellow-700">
                  <AiOutlineEdit className="text-2xl" />
                </Link>
                <Link to={`/books/delete/${book._id}`} className="text-red-500 hover:text-red-700">
                  <MdOutlineDelete className="text-2xl" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
