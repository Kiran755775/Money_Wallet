import { IoMdArrowBack } from "react-icons/io";
import { RiMenuAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function SearchTransaction() {
  return (
    <>
      <div className="h-[100vh] relative">
        <div className="bg-[#5d138f] h-[8vh]">
            
          <div className="flex items-center justify-between px-3 py-3">
            <div className="flex justify-between  items-center">
              <Link to="/"><IoMdArrowBack className="text-white text-xl cursor-pointer" /></Link>
              <input
                type="text"
                placeholder="Search something" style={{ caretColor: '#fc0377' }}
                className="ml-3 bg-transparent   text-gray-400 focus:outline-none focus:border-white"
              />
            </div>

            <RiMenuAddLine className="text-white text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}
