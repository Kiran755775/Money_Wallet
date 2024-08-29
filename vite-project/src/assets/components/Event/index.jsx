import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function Event() {
  return (
    <>
      <div className="h-[100vh] ">
        <div className="bg-[#5d138f] h-[18vh]">
            <div className="flex justify-between py-4 px-2 ">
                <div className="flex justify-around items-center w-[50vw]">
                    <Link to="/newtransaction">
                        <IoMdArrowBack className="text-white text-2xl" />
                    </Link>
                    <h1 className="text-white text-xl font-semibold">
                        New event
                    </h1>
                </div>
                <div className="flex items-center justify-around w-[10vw]">
                
                    <IoCheckmarkSharp className="text-white text-2xl" />
                </div>
            </div>
            
            <div
            className="flex justify-around items-end pl-6 pr-1  "
            
          >
            <BsFillQuestionCircleFill className="text-5xl"
            />
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 text-xl bg-transparent border-gray-500 w-[65vw] focus:border-[#fc0377] placeholder-gray-400  hover:border-[#fc0377] transition-colors duration-300 outline-none ml-3 "
              style={{ caretColor: "#fc0377" }}
            />
          </div>
                
            
        </div>
      </div>
    </>
  );
}
