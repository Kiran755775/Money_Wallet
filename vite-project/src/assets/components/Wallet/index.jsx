import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdNoteAlt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Wallet() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [walletName, setWalletName] = useState("");
  const [amount, setAmount] = useState("");
  const [walletList, setWalletList] = useState(() => {
    const savedWallets = localStorage.getItem("walletlist");
    return savedWallets ? JSON.parse(savedWallets) : [];
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
   
    if (walletName && amount) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [walletName, amount]);

  const handleAddWallet = () => {
    if (isButtonDisabled) return;

    const newWallet = { name: walletName, amount: parseFloat(amount) };
    setWalletList([...walletList, newWallet]);
    localStorage.setItem("walletlist", JSON.stringify([...walletList, newWallet]));

  
    setWalletName("");
    setAmount("");
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
              <h1 className="text-white text-xl font-semibold">New wallet</h1>
            </div>
            <div className="flex items-center justify-around w-[10vw]">
              <Link to="/newtransaction">
                <IoCheckmarkSharp
                  className={`text-white text-2xl ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                  onClick={handleAddWallet}
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-end pl-6 pr-5">
            <BsFillQuestionCircleFill className="text-4xl" />
            <input
              type="text"
              placeholder="Name"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              className="border-b-2 text-xl bg-transparent border-gray-500 w-[65vw] focus:border-[#fc0377] placeholder-gray-400 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
              style={{ caretColor: "#fc0377" }}
            />
          </div>
        </div>
        <li className="flex items-center pl-6 pr-1 my-8">
          <IoIosSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Currency"
            className="border-b-2 border-gray-500 w-[88vw] placeholder-gray-500 transition-colors duration-300 outline-none ml-3"
            style={{ caretColor: "#fc0377" }}
          />
        </li>
        <li className="flex items-center pl-6 pr-1 my-8">
          <FaPen className="text-2xl" />
          <div className="relative w-[88vw]">
            <input
              type="number"
              id="amount"
              placeholder=" "
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="peer border-b-2 border-gray-500 w-full placeholder-transparent focus:border-primary transition-colors duration-300 outline-none"
              style={{ caretColor: "#fc0377" }}
            />
            <label
              htmlFor="amount"
              className="absolute left-3 top-2 text-gray-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-primary peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500"
            >
              Initial amount
            </label>
          </div>
        </li>

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
            className="border-b-2 border-gray-500 w-[88vw] focus:border-[#fc0377] placeholder-gray-500 hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3"
            style={{ caretColor: "#fc0377" }}
          />
        </li>
      </div>
    </>
  );
}
