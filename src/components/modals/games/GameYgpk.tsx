import { useState } from 'react'
import { gamePhiThuyen, typeColor } from '~/constants/renaral.const'

/* eslint-disable @typescript-eslint/no-explicit-any */
const GameYgpk = ({ isShow, onClose }: any) => {
  const [activeTab, setActiveTab] = useState(gamePhiThuyen[0])
  const numbers = [9, 2, 7, 1, 6, 3, 8, 5, 4, 10]

  return (
    <div
      className={`${isShow ? 'opacity-100 visible' : 'opacity-0 invisible'} z-50 fixed top-0 left-0 w-full h-full bg-white`}
    >
      <div className='z-100 sticky  top-0 left-0 w-full h-max flex  justify-between bg-primary py-2.5 px-2'>
        <button onClick={onClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6 text-white'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
          </svg>
        </button>
        <h2 className='text-xl text-white'>168 Phi thuyền</h2>
        <button className='text-white text-sm'></button>
      </div>
      <div className=' min-h-screen bg-blue-gray-50'>
        <div className='flex pt-3 pb-2 justify-between pr-2 bg-white md:pl-2'>
          <div>
            <p>53781178 Giai đoạn</p>
            <p>53781179 Giai đoạn</p>
            <div className='space-x-2'>
              <span>
                Số dư <span className='text-primary'>0.00</span>
              </span>
              <span>
                Hôm nay: <span className='text-primary'>0.00</span>
              </span>
            </div>
          </div>
          <div>
            <div className='flex flex-wrap '>
              {numbers.map((num, index) => {
                const color = typeColor.find((item) => item.number === num)?.color || 'bg-gray-200'
                return (
                  <div
                    key={index}
                    className={`w-6 h-6 flex items-center justify-center text-white text-lg rounded-full ${color}`}
                  >
                    {num}
                  </div>
                )
              })}
            </div>
            <div className='mt-2'>
              <span>
                Đóng đĩa: <span className='text-primary'>00</span> : <span className='text-primary'>00</span>
              </span>
            </div>
          </div>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z'
              />
            </svg>
          </button>
        </div>
        <div className='grid grid-cols-4 '>
          <div style={{ height: 'calc(100vh - 150px)' }} className='overflow-y-auto'>
            {gamePhiThuyen.map((item) => (
              <button
                onClick={() => setActiveTab(item)}
                className={`w-full pl-2 py-4 text-left ${activeTab.type === item.type ? 'bg-primary text-white' : ''}  border-b border-gray-400`}
                key={item.type}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div style={{ height: 'calc(100vh - 150px)' }} className='col-span-3 overflow-y-auto'>
            {activeTab.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameYgpk
