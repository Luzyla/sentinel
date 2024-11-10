import { FaEllipsisVertical, FaBuildingUser, FaGlobe } from "react-icons/fa6";
import RadialChart from "./RadialChart";
import { FaUsers } from "react-icons/fa";

const RadialChartCard = () => {
    return (
    <div className='bg-[#fafafa35] rounded-xl p-4 h-[400px]'>
    {/* TITLE */}
      <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Users</h2>
          <FaEllipsisVertical/>
      </div>
      {/* CHART */}
      <div className='flex w-full h-[250px]'>
        <RadialChart/>
      </div>
      {/* BOTTOM */}
      <div className='flex justify-around items-center'>
        {/* LEFT */}
        <div className='flex flex-col gap-1 items-start justify-center text-second-color'>
            <FaBuildingUser />
            <p className='font-bold text-xl'>50</p>
            <p className=''>Onsite</p>
        </div>
        {/* RIGHT */}
        <div className='flex flex-col gap-1 items-center justify-center text-accent-2nd-color'>
            <FaGlobe />
            <p className='font-bold text-xl'>105</p>
            <p className=''>Remote</p>
        </div>
        {/* RIGHT */}
        <div className='flex flex-col gap-1 items-end justify-center text-light-color'>
            <FaUsers />
            <p className='font-bold text-xl'>155</p>
            <p className=''>Total</p>
        </div>
      </div>
    </div>
  );
}

export default RadialChartCard;