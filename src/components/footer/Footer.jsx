import React from 'react'

const Footer = ({items}) => {
  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percentage = numItems > 0 ? (numPacked / numItems) * 100 : 0;
  return (
    <div className='w-full p-4 border-t-gray-400 border-t-2 mt-auto flex justify-center'>
      {percentage===100? "Shopping Done": `Total Item: ${numItems} Completed Item: ${numPacked} Percentage: ${percentage}%`}
      
    </div>
  )
}

export default Footer