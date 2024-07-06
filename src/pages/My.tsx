import avtar from '~/assets/images/6.jpg'
import nap from '~/assets/icons/nap.png'
import rut from '~/assets/icons/rut.png'
import hscc from '~/assets/icons/hscc.png'
import hsgd from '~/assets/icons/hsgd.png'
import { useState } from 'react'
import LSNap from '~/components/modals/LSNap'
import { Link } from 'react-router-dom'
import TTCaNhan from '~/components/modals/TTCaNhan'
import TTBaoMat from '~/components/modals/TTBaoMat'
import LoiNhuan from '~/components/modals/LoiNhuan'
const My = () => {
  const [isLSNap, setShowLSNap] = useState(false)
  const [isTTCaNhan, setShowTTCaNhan] = useState(false)
  const [isTTBaoMat, setShowTTBaoMat] = useState(false)
  const [isLoiNhuan, setShowLoiNhuan] = useState(false)
  return (
    <div className='bg-primary min-h-screen'>
      <div className='flex justify-between bg-primary py-2.5 px-2'>
        <button></button>
        <h2 className='text-xl text-white'>Tài khoản của tôi</h2>
        <button className='text-white text-sm'>Dịch vụ</button>
      </div>
      <div className='bg-[#132235] text-white p-5 flex justify-between border-b border-[#18273a]'>
        <div className='flex'>
          <img src={avtar} alt='avtar' className='w-[71px] h-max flex-shrink-0' />
          <div className='ml-5  text-lg space-y-1'>
            <p>Số tài khoản：kingnoones</p>
            <p>số tiền：0.00</p>
            <p>Mã rửa：0.00</p>
          </div>
        </div>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
            />
          </svg>
        </button>
      </div>
      <div className='bg-primary text-white grid grid-cols-4 py-2'>
        <button className='text-xs flex flex-col items-center'>
          <img className='w-[30px]' src={nap} alt='nap' />
          Nạp tiền
        </button>
        <button className='text-xs flex flex-col items-center'>
          <img className='w-[30px]' src={rut} alt='rut' />
          Rút tiền
        </button>
        <button onClick={() => setShowLSNap(true)} className='text-xs flex flex-col items-center'>
          <img className='w-[30px]' src={hsgd} alt='hsgd' />
          Hồ sơ giao dịch
        </button>
        <Link to={'/betRecord'} className='text-xs flex flex-col items-center'>
          <img className='w-[30px]' src={hscc} alt='hscc' />
          Hồ sơ cá cược
        </Link>
      </div>
      <div className='mt-4'>
        <button
          onClick={() => setShowTTCaNhan(true)}
          className='bg-primary text-white  w-full flex py-3 border-b border-[#132235] text-sm justify-between px-6'
        >
          <div className='flex items-center gap-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
              />
            </svg>
            Thông tin cá nhân
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='size-5 text-gray-400'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button>
        <button
          onClick={() => setShowTTBaoMat(true)}
          className='bg-primary text-white  w-full flex py-3 border-b border-[#132235] text-sm justify-between px-6'
        >
          <div className='flex items-center gap-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z'
              />
            </svg>
            Trung tâm bảo mật
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='size-5 text-gray-400'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button>
        <button className='bg-primary text-white  w-full flex py-3 border-b border-[#132235] text-sm justify-between px-6'>
          <div className='flex items-center gap-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z'
              />
            </svg>
            Trung tâm sự kiện
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='size-5 text-gray-400'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button>
        <button
          onClick={() => setShowLoiNhuan(true)}
          className='bg-primary text-white  w-full flex py-3 border-b border-[#132235] text-sm justify-between px-6'
        >
          <div className='flex items-center gap-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
              />
            </svg>
            Hôm nay lơi nhuận
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='size-5 text-gray-400'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button>
        <Link
          to={'/new'}
          className='bg-primary text-white  w-full flex py-3 border-b border-[#132235] text-sm justify-between px-6'
        >
          <div className='flex items-center gap-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z'
              />
            </svg>
            Thông báo nền tảng
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='size-5 text-gray-400'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </Link>
        {/* <button className='bg-primary text-white  w-full flex py-3 border-b border-[#132235] text-sm justify-between px-6'>
          <div className='flex items-center gap-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
              />
            </svg>
            Chọn ngôn ngữ
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='size-5 text-gray-400'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button> */}
      </div>
      <button className='bg-primary text-white mt-3 w-full flex py-2 justify-between px-6'>
        Thoát
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={3}
          stroke='currentColor'
          className='size-5 text-gray-400'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
        </svg>
      </button>
      <LSNap isShow={isLSNap} onClose={() => setShowLSNap(false)}></LSNap>
      <TTCaNhan isShow={isTTCaNhan} onClose={() => setShowTTCaNhan(false)}></TTCaNhan>
      <TTBaoMat isShow={isTTBaoMat} onClose={() => setShowTTBaoMat(false)}></TTBaoMat>
      <LoiNhuan isShow={isLoiNhuan} onClose={() => setShowLoiNhuan(false)}></LoiNhuan>
    </div>
  )
}

export default My
