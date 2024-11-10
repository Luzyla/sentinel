'use client'
import { useState } from 'react';
import Calendar from 'react-calendar';
/* import "react-calendar/dist/Calendar.css"; */

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

/* mokeup data */
const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
      <>
      <div className='bg-[#fafafa44] text-center p-4 w-full rounded-xl'>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="flex flex-col gap-4 ">
        {events.map((event) => (
            <div
            className="bg-[#fafafa44] p-5 rounded-xl border-2 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
            >
            <div className="flex items-center justify-between">
                <h4 className="font-semibold">{event.title}</h4>
                <span className="text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-sm">{event.description}</p>
            </div>
        ))}
        </div>
    </>
    );
    
}

export default EventCalendar;