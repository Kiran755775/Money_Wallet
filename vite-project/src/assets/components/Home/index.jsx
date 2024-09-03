import { FiMenu } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { BiCalendarEvent } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('transactions'); 
  const sidebarRef = useRef(null);  

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const transactions = JSON.parse(localStorage.getItem("transactions")) || []; 

  return (
    <div className="h-[100vh] relative">
      
    
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-white z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} overflow-hidden`}
        style={{ width: '16rem' }}
      >
        <div className="flex flex-col h-full pt-16 pl-6">
          <Link
            to="#"
            className={`flex items-center mb-4 text-gray-700 hover:text-gray-900 ${selectedSection === 'transactions' ? 'font-semibold text-[#5d138f]' : ''}`}
            onClick={() => {
              setSelectedSection('transactions');
              closeNav(); 
            }}
          >
            <MdLocalGroceryStore className="mr-2 text-2xl" />
            <span>Transactions</span>
          </Link>
          <Link
            to="#"
            className={`flex items-center mb-4 text-gray-700 hover:text-gray-900 ${selectedSection === 'categories' ? 'font-semibold text-[#5d138f]' : ''}`}
            onClick={() => {
              setSelectedSection('categories');
              closeNav(); 
            }}
          >
            <BiCategory className="mr-2 text-2xl" />
            <span>Categories</span>
          </Link>
        </div>
      </div>

   
      <div className="flex-1 bg-[#5d138f] transition-all duration-300 ml-0">
        <div className="h-8 px-4 flex items-center">
          <div className="flex-1 flex items-center">
            <span
              className="text-white text-2xl cursor-pointer"
              onClick={openNav}
              aria-label="Open navigation"
            >
              <FiMenu />
            </span>
            <h1 className="text-white text-xl font-semibold ml-4">{selectedSection === 'transactions' ? 'Transactions' : 'Categories'}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/search" aria-label="Search">
              <IoSearchSharp className="text-white text-2xl cursor-pointer" />
            </Link>
            <BiCalendarEvent className="text-white text-2xl" />
          </div>
        </div>

        {selectedSection === 'transactions' && (
          <div className="flex flex-col items-center mt-4 bg-[#5d138f]"> 
            <ul className="flex justify-around w-full py-2">
              <li className="text-white text-sm px-4 py-2 cursor-pointer">TRANSACTIONS</li>
              <li className="text-gray-300 text-sm px-4 py-2 cursor-pointer">TRANSFERS</li>
            </ul>
          </div>
        )}

        <Link to="/newtransaction">
          <FaCirclePlus className="absolute bottom-10 right-4 text-[#fc0377] text-6xl cursor-pointer" />
        </Link>

        

        
      </div>
      {selectedSection === 'transactions' && (
          <ul className="mt-4">
            {transactions.map((eachItem) => (
              <li key={eachItem.description} className="flex items-center p-3">
                <h1 className="bg-pink-600 h-8 w-8 rounded-full flex items-center justify-center text-white text-lg">
                  {eachItem.category[0]}
                </h1>
                <div className="ml-3">
                  <h1 className="text-sm">{eachItem.category}</h1>
                  <p className="text-gray-600 text-xs">{eachItem.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {selectedSection === 'categories' && (
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-black text-xl font-semibold">Categories Content</h1>
            {/* Add your content related to categories here */}
          </div>
        )}
    </div>
  );
}
