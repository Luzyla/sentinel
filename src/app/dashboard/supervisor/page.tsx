// eslint-disable-file no-use-before-define
import EventCalendar from '@/components/EventCalendar';
import Announcements from '@/components/Announcements';

const SupervisorPage = () => {
	return (
		<div className="p-4 flex gap-4 flex-col xl:flex-row">
			{/* LEFT */}
			<div className="w-full xl:w-2/3 flex flex-col bg-[#fafafa44] rounded-xl p-4">
				<h3 className="text-xl font-semibold">Supervisor</h3>
			</div>
			{/* RIGHT */}
			<div className="w-full xl:w-1/3 flex flex-col gap-8">
				<EventCalendar />
				<Announcements />
			</div>
		</div>
	);
};

export default SupervisorPage;
