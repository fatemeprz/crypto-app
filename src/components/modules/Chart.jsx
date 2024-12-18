import React from 'react'
import { LineChart, Line } from 'recharts'

function Chart({chart,setChart}) {
  return (
    <div className='z-50 h-screen left-0 w-full  top-0 backdrop-blur-sm flex items-center justify-center fixed'>
      <span onClick={()=>{setChart(null)}} className='absolute left-10 top-5 bg-red-700 px-2 py-0.5 rounded font-semibold cursor-pointer'>X</span>
      <div className='w-5/12 h-96 bg-nemodar border border-darkborder rounded-xl'>
        chart
      </div>
    </div>
  )
}

export default Chart