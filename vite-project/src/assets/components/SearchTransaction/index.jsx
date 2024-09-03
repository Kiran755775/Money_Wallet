import { IoMdArrowBack } from "react-icons/io";
import { RiMenuAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SearchTransaction() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter((transaction) => {
    return (
      transaction.description.toLowerCase().includes(searchQuery) ||
      transaction.category.toLowerCase().includes(searchQuery)
    );
  });

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
                value={searchQuery} // Set the input value to the search query
                onChange={handleSearchChange} // Update search query on input change
              />
            </div>
            <RiMenuAddLine className="text-white text-xl" />
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
      </div>
    </>
  );
}
