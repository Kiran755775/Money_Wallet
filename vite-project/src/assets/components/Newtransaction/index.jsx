import { IoMdArrowBack } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LiaDollarSignSolid } from "react-icons/lia";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { MdNoteAlt, MdFlag } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoMdCalendar } from "react-icons/io";

// Modal Component
const Modal = ({ isVisible, onClose, name, path }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div
        className="bg-white w-[80vw] h-[30vh] p-4 rounded shadow-lg relative"
        style={{ maxWidth: "90vw", maxHeight: "40vh" }}
      >
        <button
          className="absolute bottom-4 right-28 text-[#fc0377] font-semibold"
          onClick={onClose}
        >
          CANCEL
        </button>
        <Link to={path}>
          <button className="absolute bottom-4 right-10 text-[#fc0377] font-semibold cursor-pointer">
            NEW
          </button>
        </Link>
        <h2 className="absolute top-6 text-xl font-bold">{name}</h2>
      </div>
    </div>
  );
};

// Main Component
export default function Newtransaction() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [modalDetails, setModalDetails] = useState({ type: null, path: "" });

  const handleItemClick = (type, path) => {
    setModalDetails({ type, path });
  };

  const handleCloseModal = () => {
    setModalDetails({ type: null, path: "" });
  };
  
    const [descriptionValue,setDescriptionValue]= useState("");
    localStorage.setItem("description",descriptionValue)
    const [noteValue,setNoteValue]= useState("");
    localStorage.setItem("note",noteValue)
    const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); 
const day = String(today.getDate()).padStart(2, '0');

const currentDate = `${year}-${month}-${day}`; 

    const [dateValue,setDateValue]= useState(currentDate);
    localStorage.setItem("dateValue",dateValue)
    const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');


const currentTime = `${hours}:${minutes}`;
    const [timeValue,setTimeValue]= useState(currentTime);
    localStorage.setItem("timeValue",timeValue)


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
              <Link to="/"><IoCheckmarkSharp className="text-white text-2xl" /></Link>
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
              className="border-b-2 border-gray-500 w-[88vw] focus:border-[#fc0377] placeholder-gray-500 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
              onChange={()=>setDescriptionValue(event.target.value)}
              style={{ caretColor: "#fc0377" }} 
            />
          </li>
          <Link to="/typesofCategories">
            <li className="flex items-center pl-6 pr-1 my-8">
              <BiCategory className="text-2xl" />
              <input
                type="text"
                placeholder="Category"  value={localStorage.getItem("item1")}
                className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 outline-none ml-3"
                style={{ caretColor: "#fc0377" }}
              />
            </li>
          </Link>
          <li className="flex items-center pl-6 pr-1 my-8 " >
              <IoMdCalendar  className="text-2xl" />
              <input
                type="date"
                value={localStorage.getItem("dateValue")}
                onChange={()=>setDateValue(event.target.value)}
                className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 outline-none ml-3"
                style={{ caretColor: "#fc0377" }}
              />
              <input
                type="time"
                value={localStorage.getItem("timeValue")}
               onChange={()=>setTimeValue(event.target.value)}
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
              value="Kiran"
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
              className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 outline-none ml-3"
              style={{ caretColor: "#fc0377" }}
            />
          </li>

          {/* New List Item for People */}
          

          <Modal
            isVisible={modalDetails.type !== null}
            onClose={handleCloseModal}
            name={
              modalDetails.type === "wallet"
                ? "Wallets":
              modalDetails.type === "event"
                ? "Events"
                : modalDetails.type === "place"
                ? "Places"
                : modalDetails.type === "people"
                ? "People"
                : ""
            }
            path={modalDetails.path}
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
              className="border-b-2 border-gray-500 w-[88vw] focus:border-[#fc0377] placeholder-gray-500 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
              onChange={()=>setNoteValue(event.target.value)}
              style={{ caretColor: "#fc0377" }}
            />
          </li>
        </ul>
        <div className="flex flex-col">
          <label className="ml-7"><input type="checkbox" checked className="mr-6 "/>Confirmed</label>
          <label className="ml-7"><input type="checkbox" checked className="mr-6" />Show in total wallet</label>
        </div>
        
      </div>
    </>
  );
}
