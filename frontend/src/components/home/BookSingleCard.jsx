import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative shadow-lg'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer hover:text-red-800 transition duration-300'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg text-white text-lg font-semibold'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1 text-xl font-medium'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1 text-xl font-medium'>{book.author}</h2>
        </div>
        <p className='mt-4 text-gray-700'>
          Books have been an integral part of human culture for centuries, serving as a source of knowledge, inspiration, and entertainment. They open doors to new worlds and allow us to experience different perspectives.
        </p>
        <p className='my-2 text-gray-600'>
          Whether it's a gripping novel, an insightful biography, or a comprehensive textbook, books provide a wealth of information and a chance to explore subjects in depth. They can transport us to fantastical realms, teach us about the past, and help us understand complex concepts.
        </p>
     
      </div>
    </div>
  );
};

export default BookModal;
