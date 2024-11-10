import { FaChevronDown } from "react-icons/fa6";

const Announcements = () => {
    return (
    <div className="bg-first-color p-4 rounded-xl">
        <div className="flex justify-between items-center my-2">
            <h3 className="text-xl font-semibold">Announcements</h3>
            <span className="text-[12px] flex justify-end items-center gap-1">View all <FaChevronDown/></span>
        </div>
        <div className="flex flex-col gap-4 mt-2">
            <div className="bg-second-color rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Lorem ipsum</h4>
                    <span className="text-[10px] bg-[#fafafa80] rounded-md px-2 py-1">2024-11-08
                    </span>
                </div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-2">
            <div className="bg-second-color rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Lorem ipsum</h4>
                    <span className="text-[10px] bg-[#fafafa80] rounded-md px-2 py-1">2024-11-08
                    </span>
                </div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-2">
            <div className="bg-second-color rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Lorem ipsum</h4>
                    <span className="text-[10px] bg-[#fafafa80] rounded-md px-2 py-1">2024-11-08
                    </span>
                </div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
    </div>
);
}

export default Announcements