import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Maps, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-2">
      <Maps />
      <div className="justify-center">
        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-full p-8 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-4 ml-1">
                <span className="text-xl font-semibold">
                  {item.amount}
                </span>
                <span className={`text-lg ${item.pcColor} ml-4`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-lg text-gray-400 mt-1 ml-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>  
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Critical Assets</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Total Assets</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Critical Assets</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">4,000</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">-4%</span>
                </p>
                <p className="text-gray-500 mt-1">Total Assets</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">39</span>
                </p>
                <p className="text-gray-500 mt-1">Critical Assets</p>
              </div>

              <div className="mt=5">
                <SparkLine id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData}  />
              </div>
              <div className ="mt-10">
                <Button color="white" bgColor={currentColor} text="Download Report" borderRadius="10px" />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard