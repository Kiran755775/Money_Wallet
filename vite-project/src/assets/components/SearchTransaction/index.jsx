import { IoMdArrowBack } from "react-icons/io";
import { RiMenuAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from 'react';
function Modal({ isOpen, onClose }){
  const modalRef = useRef(null);

  useEffect(() => {
    
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside} // Close modal on overlay click
    >
      <div
        ref={modalRef}
        className="bg-white p-6 shadow-lg w-11/12 sm:w-1/2 md:w-1/3"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <h2 className="text-lg font-semibold mb-4">Filter</h2>
        <form>
          {/* Your form fields */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="category"
              className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="category" className="text-sm font-medium text-gray-700">Description</label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="des"
              className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="des" className="text-sm font-medium text-gray-700">Category</label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="date"
              className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="date" className="text-sm font-medium text-gray-700">Date</label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="money"
              className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="money" className="text-sm font-medium text-gray-700">Money</label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="note"
              className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="note" className="text-sm font-medium text-gray-700">Note</label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="event"
              className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="event" className="text-sm font-medium text-gray-700">Event</label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="place"
              className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="place" className="text-sm font-medium text-gray-700">Place</label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-3 text-pink-500 py-2 px-4 rounded-md text-sm"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="text-pink-500 py-2 px-4 rounded-md text-sm"
            >
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};




export default function SearchTransaction() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };


  const filteredTransactions = transactions.filter((transaction) => {
    return (
      transaction.description.toLowerCase().includes(searchQuery) ||
      transaction.category.toLowerCase().includes(searchQuery)
    );
  });

 
  const openModal = () => {
    setIsModalOpen(true);
  };

 
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="h-[100vh] relative">
        <div className="bg-[#5d138f] h-[8vh]">
          <div className="flex items-center justify-between px-3 py-3">
            <div className="flex justify-between items-center">
              <Link to="/">
                <IoMdArrowBack className="text-white text-xl cursor-pointer" />
              </Link>
              <input
                type="text"
                placeholder="Search something"
                style={{ caretColor: '#fc0377' }}
                className="ml-3 bg-transparent text-gray-400 focus:outline-none focus:border-white"
                value={searchQuery} 
                onChange={handleSearchChange} 
              />
            </div>
            <RiMenuAddLine
              className="text-white text-xl cursor-pointer"
              onClick={openModal} 
            />
          </div>
        </div>
        <ul>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((eachItem) => (
              <li key={eachItem.description} className="flex items-center p-3 ">
                <h1 className="bg-pink-600 h-8 w-8 rounded-full flex items-center justify-center text-white text-lg">
                  {(eachItem.category)[0]}
                </h1>
                <div className="ml-3">
                  <h1 className="text-sm">{eachItem.category}</h1>
                  <p className="text-gray-600 text-xs">{eachItem.description}</p>
                </div>
              </li>
            ))
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center text-gray-500">No transactions found</p>
            </div>
          )}
        </ul>
        <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Modal Component */}
      </div>
    </>
  );
}
