import { IoMdArrowBack } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LiaDollarSignSolid } from "react-icons/lia";
import { RiMenu2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { BiCategory } from "react-icons/bi";
import { MdNoteAlt, MdFlag } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoMdCalendar } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
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
 function TypesofCategories() {
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

const savedWallets = JSON.parse(localStorage.getItem("walletlist")) || [];
const eventList = JSON.parse(localStorage.getItem("events")) || [];
const peopleList = JSON.parse(localStorage.getItem("peopleList")) || [];
const placeList = JSON.parse(localStorage.getItem("placesList")) || [];
const Modal = ({ isVisible, onClose, name, path, onSelect }) => {
  if (!isVisible) return null;

  const handleSelect = (item) => {
    onSelect(item); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white w-[80vw] h-[30vh] max-h-full p-4 rounded shadow-lg relative">
        <button
          className="absolute bottom-4 right-20 text-[#fc0377] font-semibold"
          onClick={onClose}
        >
          CANCEL
        </button>
        <Link to={path}>
          <button className="absolute bottom-4 right-5 text-[#fc0377] font-semibold cursor-pointer">
            NEW
          </button>
        </Link>
        <h2 className="text-xl font-bold">{name}</h2>

      
        {name === "Wallets" && (
          <div>
            {savedWallets.length > 0 && (
              <ul>
                {savedWallets.map((eachItem, index) => (
                  <li
                    key={index}
                    className="flex justify-start items-center mt-4 cursor-pointer" 
                    onClick={() => handleSelect(eachItem)} 
                  >
                    <p className="text-xl text-white bg-gray-800 h-7 w-7 rounded-full text-center">
                      {eachItem.name[0]}
                    </p>
                    <div className="flex flex-col justify-start ml-3">
                      <p className="text-sm">{eachItem.name}</p>
                      <p className="text-sm">${eachItem.amount}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {name === "Events" && (
          <div>
            {eventList.length > 0 && (
              <ul>
                {eventList.map((eachItem, index) => (
                  <li
                    key={index}
                    className="flex justify-start items-center mt-4 cursor-pointer" 
                    onClick={() => handleSelect(eachItem)} 
                  >
                    <p className="text-xl text-white bg-gray-800 h-7 w-7 rounded-full text-center">
                      {eachItem.name[0]}
                    </p>
                    <div className="flex flex-col justify-start ml-3">
                      <p className="text-sm">{eachItem.name}</p>
                      <p className="text-sm">Will end on: {eachItem.endDate}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {name === "People" && (
          <div>
            {peopleList.length > 0 && (
              <ul>
                {peopleList.map((eachItem, index) => (
                  <li
                    key={index}
                    className="flex justify-start items-center mt-4 cursor-pointer" 
                    onClick={() => handleSelect(eachItem)} 
                  >
                    <p className="text-xl text-white bg-gray-800 h-7 w-7 rounded-full text-center">
                      {eachItem.name[0]}
                    </p>
                    <div className="flex flex-col justify-start ml-3">
                      <p className="text-sm">{eachItem.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {name === "Places" && (
          <div>
            {placeList.length > 0 && (
              <ul>
                {placeList.map((eachItem, index) => (
                  <li
                    key={index}
                    className="flex justify-start items-center mt-4 cursor-pointer" 
                    onClick={() => handleSelect(eachItem)} 
                  >
                    <p className="text-xl text-white bg-gray-800 h-7 w-7 rounded-full text-center">
                      {eachItem.name[0]}
                    </p>
                    <div className="flex flex-col justify-start ml-3">
                      <p className="text-sm">{eachItem.name}</p>
                      <p className="text-sm">{eachItem.address}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
const Modal1 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white  rounded shadow-lg h-[100vh] w-[100vw] relative">
      {/* Back button */}
      

      {/* Types of Categories Component */}
      <div className="h-full overflow-hidden">
        <TypesofCategories />
        <button
        onClick={onClose}
        className="absolute top-4 left-0 px-4 py-2  text-white rounded"
      >
        <MdArrowBack className="text-white text-2xl" />
      </button>
      </div>
    </div>
  </div>
  );
};


export default function Newtransaction() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [modalDetails, setModalDetails] = useState({ type: null, path: "" });
  const [descriptionValue, setDescriptionValue] = useState(localStorage.getItem("description") || "");
  const [noteValue, setNoteValue] = useState(localStorage.getItem("note") || "");
  const [dateValue, setDateValue] = useState(localStorage.getItem("dateValue") || getCurrentDate());
  const [timeValue, setTimeValue] = useState(localStorage.getItem("timeValue") || getCurrentTime());
  const [walletValue, setWalletValue] = useState("Kiran");
  const [eventValue, setEventValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");
  const [placeValue, setPlaceValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionList, setTransactionList] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("description", descriptionValue);
  }, [descriptionValue]);

  useEffect(() => {
    localStorage.setItem("note", noteValue);
  }, [noteValue]);

  useEffect(() => {
    localStorage.setItem("dateValue", dateValue);
  }, [dateValue]);

  useEffect(() => {
    localStorage.setItem("timeValue", timeValue);
  }, [timeValue]);

  const handleItemClick = (type, path) => {
    setModalDetails({ type, path });
  };

  const handleCloseModal = () => {
    setModalDetails({ type: null, path: "" });
  };

  const handleSelect = (item) => {
    switch (modalDetails.type) {
      case "wallet":
        setWalletValue(item.name);
        break;
      case "event":
        setEventValue(item.name);
        break;
      case "people":
        setPeopleValue(item.name);
        break;
      case "place":
        setPlaceValue(item.name);
        break;
      default:
        break;
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleSaveTransaction = () => {
    const newTransaction = {
      description: descriptionValue,
      category: localStorage.getItem("item1") || "",
      date: dateValue,
      time: timeValue,
      wallet: walletValue,
      event: eventValue,
      people: peopleValue,
      place: placeValue,
      note: noteValue,
      isConfirmed: true,
      isShown: true
    };

    const updatedTransactionList = [...transactionList, newTransaction];
    setTransactionList(updatedTransactionList);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactionList));
    setDescriptionValue("")
    setNoteValue("")
    
  };

  return (
    <>
      <div className="h-[100vh]">
        <div className="bg-[#5d138f] h-[18vh]">
          <div className="flex justify-between py-4 px-2">
            <div className="flex justify-around items-center w-[60vw]">
              <Link to="/">
                <IoMdArrowBack className="text-white text-2xl" />
              </Link>
              <h1 className="text-white text-xl font-semibold">
                New Transaction
              </h1>
            </div>
            <div className="flex items-center justify-around w-[20vw]">
              <MdAttachFile className="text-white text-2xl cursor-pointer" />
              <IoCheckmarkSharp
                className="text-white text-2xl cursor-pointer"
                onClick={handleSaveTransaction}
              />
            </div>
          </div>
          <div className="flex justify-between px-4 pt-3">
            <LiaDollarSignSolid className="text-white text-3xl font-bold" />
            <h1 className="text-white text-3xl">0.00</h1>
          </div>
        </div>
        <ul>
          <li
            className="flex items-center pl-6 pr-1 my-8"
            onFocus={() => setFocusedInput("description")}
            onBlur={() => setFocusedInput(null)}
          >
            <RiMenu2Line
              className={`text-2xl ${
                focusedInput === "description" ? "text-[#fc0377]" : "auto"
              }`}
            />
            <input
              type="text"
              placeholder="Description"
              value={descriptionValue}
              className="border-b-2 border-gray-500 w-[88vw] focus:border-[#fc0377] placeholder-gray-500 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
              onChange={(e) => setDescriptionValue(e.target.value)}
              style={{ caretColor: "#fc0377" }}
            />
          </li>

          <div>
            <li className="flex items-center pl-6 pr-1 my-8">
              <BiCategory className="text-2xl" />
              <input
                type="text"
                placeholder="Category"
                value={localStorage.getItem("item1") || ""}
                className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 outline-none ml-3"
                style={{ caretColor: "#fc0377" }}
                onClick={openModal}
              />
            </li>
            <Modal1 isOpen={isModalOpen} onClose={closeModal} />
          </div>

          <li className="flex items-center pl-6 pr-1 my-8">
            <IoMdCalendar className="text-2xl" />
            <input
              type="date"
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
              className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 outline-none ml-3"
              style={{ caretColor: "#fc0377" }}
            />
            <input
              type="time"
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value)}
              className="border-b-2 border-gray-500 w-[30vw] placeholder-gray-500 outline-none ml-3"
              style={{ caretColor: "#fc0377" }}
            />
          </li>
          <li
            className="flex items-center pl-6 pr-1 my-8"
            onClick={() => handleItemClick("wallet", "/wallet")}
          >
            <GoFileDirectoryFill className="text-2xl" />
            <input
              type="text"
              value={walletValue}
              className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 outline-none ml-3"
              style={{ caretColor: "#fc0377" }}
            />
          </li>

          <li
            className="flex items-center pl-6 pr-1 my-8"
            onClick={() => handleItemClick("event", "/event")}
          >
            <MdFlag className="text-2xl" />
            <input
              type="text"
              placeholder="Event"
              value={eventValue}
              className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 outline-none ml-3"
              style={{ caretColor: "#fc0377" }}
            />
          </li>
          <li
            className="flex items-center pl-6 pr-1 my-8"
            onClick={() => handleItemClick("people", "/person")}
          >
            <IoMdPeople className="text-2xl" />
            <input
              type="text"
              placeholder="People"
              value={peopleValue}
              className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 outline-none ml-3"
              style={{ caretColor: "#fc0377" }}
            />
          </li>
          <li
            className="flex items-center pl-6 pr-1 my-8"
            onClick={() => handleItemClick("place", "/place")}
          >
            <FaLocationDot className="text-2xl" />
            <input
              type="text"
              placeholder="Place"
              value={placeValue}
              className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 outline-none ml-3"
              style={{ caretColor: "#fc0377" }}
            />
          </li>

          <Modal
            isVisible={modalDetails.type !== null}
            onClose={handleCloseModal}
            name={
              modalDetails.type === "wallet"
                ? "Wallets"
                : modalDetails.type === "event"
                ? "Events"
                : modalDetails.type === "place"
                ? "Places"
                : modalDetails.type === "people"
                ? "People"
                : ""
            }
            path={modalDetails.path}
            onSelect={handleSelect}
          />

          <li
            className="flex items-center pl-6 pr-1 mt-8 mb-4"
            onFocus={() => setFocusedInput("note")}
            onBlur={() => setFocusedInput(null)}
          >
            <MdNoteAlt
              className={`text-2xl ${
                focusedInput === "note" ? "text-[#fc0377]" : "auto"
              }`}
            />
            <input
              type="text"
              placeholder="Note"
              value={noteValue}
              className="border-b-2 border-gray-500 w-[88vw] focus:border-[#fc0377] placeholder-gray-500 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
              onChange={(e) => setNoteValue(e.target.value)}
              style={{ caretColor: "#fc0377" }}
            />
          </li>
        </ul>
        <div className="flex flex-col">
          <label className="ml-7">
            <input type="checkbox" checked className="mr-6" />
            Confirmed
          </label>
          <label className="ml-7">
            <input type="checkbox" checked className="mr-6" />
            Show in total wallet
          </label>
        </div>
      </div>
    </>
  );
}