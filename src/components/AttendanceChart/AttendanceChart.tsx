'use client'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

export default class AttendanceChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={14}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false}
            tick={{ fill: "#cdd7d8" }}
            tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: "#cdd7d8" }} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "#cdd7d8" }}/>
          <Legend align="right"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px"}}/>
          <Bar dataKey="present"
            fill="#fbc32b"
            legendType="circle"
            radius={[10, 10, 0, 0]} />
          <Bar dataKey="absent"
            fill="#2c2c29"
            legendType="circle"
            radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
