import EventCalendar from '@/components/EventCalendar';
import Announcements from '@/components/Announcements';
/* import ScheduleCalendar from '@/components/ScheduleCalendar'; */

const UserPage = () => {
	return (
		<div className="p-4 flex gap-4 flex-col xl:flex-row">
			{/* LEFT */}
			<div className="w-full xl:w-2/3 flex flex-col bg-[#fafafa44] rounded-xl p-4">
				<h3 className="text-xl font-semibold">Schedule</h3>
				{/* bigcalendar */}
				<ScheduleCalendar />
				{/* <div className="h-full p-4 bg- rounded-xl flex gap-4 justify-between flex-wrap">
          
        </div> */}
			</div>
			{/* RIGHT */}
			<div className="w-full xl:w-1/3 flex flex-col gap-8">
				<EventCalendar />
				<Announcements />
			</div>
		</div>
	);
};

export default UserPage;
