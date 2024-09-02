import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdDateRange, MdNoteAlt } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Event() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [note, setNote] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    
    if (name && startDate && endDate && note) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name, startDate, endDate, note]);

  const handleSave = () => {
    if (isButtonDisabled) return;

    const eventData = {
      name,
      startDate,
      endDate,
      note,
    };

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    existingEvents.push(eventData);
    localStorage.setItem("events", JSON.stringify(existingEvents));

    setName("");
    setStartDate("");
    setEndDate("");
    setNote("");
    setIsButtonDisabled(true);
  };

  return (
    <>
      <div className="h-[100vh]">
        <div className="bg-[#5d138f] h-[18vh]">
          <div className="flex justify-between py-4 px-2">
            <div className="flex justify-around items-center w-[50vw]">
              <Link to="/newtransaction">
                <IoMdArrowBack className="text-white text-2xl" />
              </Link>
              <h1 className="text-white text-xl font-semibold">New event</h1>
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

          <div className="flex flex-col pl-6 pr-5">
            <div className="flex items-center mb-4">
              <BsFillQuestionCircleFill className="text-4xl" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b-2 text-white text-xl bg-transparent border-gray-500 w-[65vw] focus:border-[#fc0377] placeholder-gray-400 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
                style={{ caretColor: "#fc0377" }}
              />
            </div>
            <div className="flex items-center mb-4 mt-4">
              <MdDateRange className="text-2xl" />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border-b-2 border-gray-500 w-[88vw] ml-3 focus:border-[#fc0377] transition-colors duration-300 outline-none"
                style={{ caretColor: "#fc0377" }}
              />
            </div>
            <div className="flex items-center mb-4">
              <MdDateRange className="text-2xl" />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border-b-2 border-gray-500 w-[88vw] ml-3 focus:border-[#fc0377] transition-colors duration-300 outline-none"
                style={{ caretColor: "#fc0377" }}
              />
            </div>
            <div className="flex items-center mb-4">
              <MdNoteAlt className="text-2xl" />
              <input
                type="text"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="border-b-2 border-gray-500 w-[88vw] focus:border-[#fc0377] placeholder-gray-500 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
                style={{ caretColor: "#fc0377" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
