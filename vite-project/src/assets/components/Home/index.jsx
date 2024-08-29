import { FiMenu } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { BiCalendarEvent } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="h-[100vh] relative">
        <div className="bg-[#5d138f] h-[12vh]">
          <div className="flex justify-between py-2 px-2">
            <div className="flex justify-around items-center w-[45vw]">
              <FiMenu className="text-white text-2xl" />
              <h1 className="text-white text-xl font-semibold">Transactions</h1>
            </div>
            <div className="flex items-center justify-around w-[20vw]">
              <Link to="/search"><IoSearchSharp className="text-white text-2xl cursor-pointer" /></Link>
              <BiCalendarEvent className="text-white text-2xl" />
            </div>
          </div>
          <ul className="flex justify-around items-center pt-2">
            <li className="text-white  text-xs">TRANSACTIONS</li>
            <li className="text-white  text-xs">TRANSFERS</li>
          </ul>
          <Link to="/newtransaction"><FaCirclePlus className=" absolute bottom-10 right-4 text-[#fc0377] text-6xl cursor-pointer"/></Link>
        </div>
      </div>
    </>
  );
}
