import { useState } from "react"
import DoiTenThat from "./DoiTenThat"

/* eslint-disable @typescript-eslint/no-explicit-any */
const TTCaNhan = ({ isShow, onClose }: any) => {
  const [isDoiTenThat, setShowDoiTenThat] = useState(false)

  return (
    <div
      className={`${isShow ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed top-0 left-0 w-full h-full bg-white`}
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
        <h2 className='text-xl text-white'>Thông tin cá nhân</h2>
        <button className='text-white text-sm'></button>
      </div>
      <div className='bg-[#efeef4] min-h-screen pt-4'>
        <button
          // onClick={() => setShowDoiMKDangNhap(true)}
          className='bg-white  w-full flex py-3 border-b text-sm justify-between px-6'
        >
          Avatar
          <div className='flex items-center gap-x-2 text-gray-400'>
            Sửa đổi
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={3}
              stroke='currentColor'
              className='size-5 '
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
            </svg>
          </div>
        </button>
        <button
          // onClick={() => setShowDoiMKRutTien(true)}
          className='bg-white  w-full flex py-3 border-b text-sm justify-between px-6'
        >
          Số tài khoản
          <div className='flex items-center gap-x-2 '>
            kingnoones
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
          </div>
        </button>
        <button
          onClick={() => setShowDoiTenThat(true)}
          className='bg-white  w-full flex py-3 border-b text-sm justify-between px-6'
        >
          Tên thật
          <div className='flex items-center gap-x-2 '>
            Bỏ ràng buộc
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
          </div>
        </button>
      </div>
      <DoiTenThat isShow={isDoiTenThat} onClose={() => setShowDoiTenThat(false)}></DoiTenThat>

    </div>
  )
}

export default TTCaNhan
