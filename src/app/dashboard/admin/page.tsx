import UserCard from "@/components/UserCard"
import RadialChartCard from "@/components/RadialChart/RadialChartCard"
import AttendanceChartCard from "@/components/AttendanceChart/AttendanceChartCard"
import FinanceChartCard from "@/components/FinanceChart/FinanceChartCard"
import EventCalendar from "@/components/EventCalendar"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col">
                {/* USER CARDS */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="admin"/>
                    <UserCard type="supervisor"/>
                    <UserCard type="user"/>
                </div>
                {/* MIDDLE CHART */}
                <div className="flex flex-col lg:flex-row gap-4 my-4 items-stretch">
                    {/* USERS CHART */}
                    <div className="w-full lg:w-1/3 h-[100%]">
                        <RadialChartCard/>
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[100%]">
                        <AttendanceChartCard/>
                    </div>
                </div>
                {/* BOTTOM CHART */}
                <div className="w-full h-[500px]">
                <FinanceChartCard/>
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar/>
            </div>
        </div>
    )
}

export default AdminPage