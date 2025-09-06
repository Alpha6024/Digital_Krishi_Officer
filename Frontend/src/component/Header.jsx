import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { MdHomeFilled,MdAccountCircle } from "react-icons/md"
import { IoIosArrowDropdown } from "react-icons/io"
import {FaLanguage} from "react-icons/fa6"
export default function Header(){
    return(
        <>
        <div className="relative z-10 h-full flex flex-col items-end justify-between text-white text-center">
                <div className="h-[8vh] w-full flex items-center justify-between bg-green-900">
                    <Link to={"/"}><div><motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer h-[6vh] w-[3.5vw] ml-2 rounded-full flex justify-center items-center bg-gray-800"><MdHomeFilled className="text-[25px]" /></motion.div></div></Link>
                    <div className="h-[7vh] flex items-center justify-between w-[16vw] font-semibold text-white">
                        <motion.div whileHover={{ scale: 1.1 }} className="flex gap-0.5 cursor-pointer"><IoIosArrowDropdown className="mt-[7%]" /> about us</motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="flex gap-0.5 cursor-pointer"><IoIosArrowDropdown className="mt-[7%]" />contact us</motion.div>
                    </div>
                     <Link><div><motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer h-[6vh] w-[3.5vw]  flex justify-center items-center mr-2 rounded-full bg-gray-800"><FaLanguage className="text-[25px]" /></motion.div></div></Link>
                </div>
            </div>
        </>
    )
}