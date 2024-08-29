import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import Incomes from "../Incomes";
import Expenses from "../Expenses";
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
const categoriesList = [
  { id: 1, name: "INCOMES", description: <Incomes /> },
  {
    id: 2,
    name: "EXPENSES",
    description: <Expenses />,
  },
];
export default function TypesofCategories() {
    const [selectId, setSelectId]= useState(2);
    function handleCategoryClick(id){
        setSelectId(id);
        
    }
    const selectedCategory = categoriesList.find(
        (category) => category.id === selectId
      );
      
  return (
    <>
      <div className="h-[100vh] relative">
        <div className="bg-[#5d138f] h-[15vh]">
          <div className="flex w-[60vw] justify-around items-center py-5">
            <Link to="/newtransaction">
              <MdArrowBack className="text-white text-2xl" />
            </Link>
            <h1 className="text-white font-semibold text-xl">
              Pick a category
            </h1>
          </div>
          <ul className="flex justify-around">
            {categoriesList.map((eachItem) => (
              <li className={`text-gray-400 cursor-pointer text-sm ${
                eachItem.id === selectId ? 'text-white border-b-2 border-b-[#fc0377] ' : ''
              }
                `} key={eachItem.id} onClick={()=>handleCategoryClick(eachItem.id)}>
                {eachItem.name}
                
              </li>
              
            ))}
          </ul>
          {
            selectedCategory.description
          }
          <FaCirclePlus className=" absolute bottom-10 right-4 text-[#fc0377] text-6xl cursor-pointer"/>
        </div>
      </div>
    </>
  );
}
