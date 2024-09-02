import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { MdMap } from "react-icons/md";

export default function Place() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
   
    if (name && address) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name, address]);

  const handleSave = () => {
    if (isButtonDisabled) return;

    const newPlace = { name, address };
    const storedPlaces = JSON.parse(localStorage.getItem("placesList")) || [];
    const updatedPlaces = [...storedPlaces, newPlace];
    localStorage.setItem("placesList", JSON.stringify(updatedPlaces));

    setName("");
    setAddress("");
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
              <h1 className="text-white text-xl font-semibold">New place</h1>
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

          <div className="flex justify-around items-end pl-4 pr-1">
            <BsFillQuestionCircleFill className="text-5xl" />
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
          className="flex justify-between items-center pl-6 pr-1 my-8"
          onFocus={() => setFocusedInput("description")}
          onBlur={() => setFocusedInput(null)}
        >
          <FaLocationDot
            className={`text-2xl ml-2 ${focusedInput === "description" ? "text-[#fc0377]" : "auto"}`}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border-b-2 border-gray-500 focus:border-[#fc0377] placeholder-gray-500 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3 w-[60vw]"
            style={{ caretColor: "#fc0377" }}
          />
          <MdMap className="text-2xl" />
        </li>
      </div>
    </>
  );
}
