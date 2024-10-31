import Image from "next/image";
import { FaEllipsisVertical } from "react-icons/fa6";

const UserCard = ({type}:{type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-first-color even:bg-accent-2nd-color p-4 w-full flex-1 min-w-[130px] even:text-first-color odd:text-accent-color">
           <div className="flex justify-between items-center">
                <span className="text-10px">2024/25</span>
                <FaEllipsisVertical />
            </div> 
            <h3>1.23</h3>
            <p>{type}</p>
        </div>
    )
}

export default UserCard