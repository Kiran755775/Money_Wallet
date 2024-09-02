import { MdArrowBack } from "react-icons/md";


import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";


const incomesList=[{
    id:1,
    name:"Interests"
},
{
    id:2,
    name:"Prize"
},{
    id:3,
    name:"Salary"
},
{
    id:4,
    name:"Sale"
},{
    id:5,
    name:"Tip"
}
]

 function Incomes(){
    const [item1,setItem1]=useState("");
    localStorage.setItem("item1",item1)
    return(
        <>
        <div>
        {incomesList.map((eachItem) => (
            
          <li key={eachItem.id} className="flex items-center  ml-5 my-8 " onClick={()=>setItem1(eachItem.name)}>
            <h1 className="bg-red-600 rounded-full h-12 w-12 text-center flex justify-center items-center text-white text-xl ">
              |
            </h1>
            <p className="text-black font-semibold ml-5">{eachItem.name}</p>
          </li>
          
        ))}
        </div>
        </>
    )
}

const expensesList=[{
    id:1,
    name:"Car expenses"
},
{
    id:2,
    name:"Food and drinks"
},{
    id:3,
    name:"Friends"
},
{
    id:4,
    name:"Hobby"
},{
    id:5,
    name:"Technology"
},
{
    id:6,
    name:"Travel"
}
]
function Expenses(){
    const [item1,setItem1]=useState("");
    localStorage.setItem("item1",item1)
    return(
        <>
        <div>
        {expensesList.map((eachItem) => (
           
          <li key={eachItem.id} className="flex items-center  ml-5 my-8 " onClick={()=>setItem1(eachItem.name)}>
            <h1 className="bg-red-600 rounded-full h-12 w-12 text-center flex justify-center items-center text-white text-xl ">
              |
            </h1>
            <p className="text-black font-semibold ml-5">{eachItem.name}</p>
          </li>
          
        ))}
        </div>
        </>
    )
}
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
