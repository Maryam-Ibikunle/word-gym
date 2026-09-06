import React from 'react'


import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip} from 'recharts'


const Writingvolume = () => {
    const data = [
        {day:1, words:520},
        {day:2, words:1520},
        {day:3, words:1500},
        {day:4, words:1210},
        {day:5, words:20},
        {day:6, words:0},
        {day:7, words:37},
        {day:8, words:620},
        {day:9, words:120},
        {day:10, words:590},
        {day:11, words:5230},
        {day:12, words:210},
        {day:13, words:3000},
        {day:14, words:520},
        {day:15, words:5201},
        {day:16, words:510},
 
    ]
 
  return (
    

    <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
            <defs>
                <linearGradient id='colorWords' x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9d174d" stopOpacity={0.4} />
                <stop offset="95%" stopColor='#9d174d' stopOpacity={0.0} />
                </linearGradient>
            </defs>
            <Tooltip/>
            <Area type="monotone" dataKey="words" stroke='#9d174d' strokeWidth={5} fillOpacity={1} fill='url(#colorWords)' dot={false} animationDuration={3000} animationEasing="ease-in-out"/>
        </AreaChart>
    </ResponsiveContainer>

   
  )
}

export default Writingvolume

