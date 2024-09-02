import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdNoteAlt } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Person() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [focusedInput, setFocusedInput] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    
    if (name && note) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name, note]);

  const handleSave = () => {
    if (isButtonDisabled) return;

    const newPerson = { name, note };

    const storedPeople = JSON.parse(localStorage.getItem("peopleList")) || [];
    const updatedPeople = [...storedPeople, newPerson];
    localStorage.setItem("peopleList", JSON.stringify(updatedPeople));

   
    setName("");
    setNote("");
    setIsButtonDisabled(true); 
  };

  return (
    <>
      <div className="h-[100vh] ">
        <div className="bg-[#5d138f] h-[18vh]">
          <div className="flex justify-between py-4 px-2 ">
            <div className="flex justify-around items-center w-[50vw]">
              <Link to="/newtransaction">
                <IoMdArrowBack className="text-white text-2xl" />
              </Link>
              <h1 className="text-white text-xl font-semibold">New person</h1>
            </div>
            <div className="flex items-center justify-around w-[10vw]">
              <Link to="/newtransaction">
                <IoCheckmarkSharp
                  className={`text-white text-2xl ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                  onClick={handleSave}
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-end pl-6 pr-5">
            <BsFillQuestionCircleFill className="text-4xl" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b-2 text-xl bg-transparent border-gray-500 w-[65vw] focus:border-[#fc0377] placeholder-gray-400 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
              style={{ caretColor: "#fc0377" }}
            />
          </div>
        </div>
        <li
          className="flex items-center pl-6 pr-1 my-8"
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
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border-b-2 border-gray-500 w-[88vw] focus:border-[#fc0377] placeholder-gray-500 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
            style={{ caretColor: "#fc0377" }}
          />
        </li>
      </div>
    </>
  );
}
