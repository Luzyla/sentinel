'use client'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
    name: "Jan",
    income: 4000,
    expense: 2400,
    },
    {
    name: "Feb",
    income: 3000,
    expense: 1398,
    },
    {
    name: "Mar",
    income: 2000,
    expense: 9800,
    },
    {
    name: "Apr",
    income: 2780,
    expense: 3908,
    },
    {
    name: "May",
    income: 1890,
    expense: 4800,
    },
    {
    name: "Jun",
    income: 2390,
    expense: 3800,
    },
    {
    name: "Jul",
    income: 3490,
    expense: 4300,
    },
    {
    name: "Aug",
    income: 3490,
    expense: 4300,
    },
    {
    name: "Sep",
    income: 3490,
    expense: 4300,
    },
    {
    name: "Oct",
    income: 3490,
    expense: 4300,
    },
    {
    name: "Nov",
    income: 3490,
    expense: 4300,
    },
    {
    name: "Dec",
    income: 3490,
    expense: 4300,
    },
];

export default class FinanceChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10} />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend align="right"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}/>
          <Line type="monotone"
            dataKey="income"
            stroke="#fbc32b"
            strokeWidth={3} />
          <Line type="monotone" dataKey="expense" stroke="#2c2c29" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
