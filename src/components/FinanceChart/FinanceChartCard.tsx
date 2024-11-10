import { FaEllipsisVertical } from "react-icons/fa6";
import FinanceChart from "./FinanceChart";


const FinanceChartCard = () => {
    return (
    <div className='bg-[#fafafa35] rounded-xl p-4 items-stretch h-[400px]'>
    {/* TITLE */}
      <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Finance</h2>
          <FaEllipsisVertical/>
      </div>
      {/* CHART */}
      <div className='flex w-full h-[350px]'>
        <FinanceChart/>
      </div>
    </div>
  );
}

export default FinanceChartCard;