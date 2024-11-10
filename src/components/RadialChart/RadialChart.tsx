'use client'
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Onsite',
      count: 50,
      percent: 32.35,
      fill: '#2c2c29',
    },
    {
      name: 'Remote',
      count: 105,
      percent: 67.75,
      fill: '#fbc32b',
    },
    {
      name: 'Total',
      count: 155,
      percent: 100,
      fill: '#cdd7d8',
    },
  ];

export default class RadialChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={25} data={data}>
          <RadialBar
            background
            dataKey="percent"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
