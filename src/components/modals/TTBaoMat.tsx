import { useState } from 'react'
import TTTaiKhoan from './TTTaiKhoan'
import DoiMKRutTien from './DoiMKRutTien'
import DoiMKDangNhap from './DoiMKDangNhap'

/* eslint-disable @typescript-eslint/no-explicit-any */
const TTBaoMat = ({ isShow, onClose }: any) => {
  const [isTTTaiKhoan, setShowTTTaiKhoan] = useState(false)
  const [isDoiMKRutTien, setShowDoiMKRutTien] = useState(false)
  const [isDoiMKDangNhap, setShowDoiMKDangNhap] = useState(false)

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
        <h2 className='text-xl text-white'>Trung tâm bảo mật</h2>
        <button className='text-white text-sm'></button>
      </div>
      <div className='bg-[#efeef4] min-h-screen pt-4'>
        <button
          onClick={() => setShowDoiMKDangNhap(true)}
          className='bg-white  w-full flex py-3 border-b text-sm justify-between px-6'
        >
          Mật khẩu đăng nhập
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
          onClick={() => setShowDoiMKRutTien(true)}
          className='bg-white  w-full flex py-3 border-b text-sm justify-between px-6'
        >
          Mật khẩu rút tiền
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
          onClick={() => setShowTTTaiKhoan(true)}
          className='bg-white  w-full flex py-3 border-b text-sm justify-between px-6'
        >
          Ràng buộc thẻ ngân hàng
          <div className='flex items-center gap-x-2 text-gray-400'>
            Xem thêm
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
      </div>
      <DoiMKDangNhap isShow={isDoiMKDangNhap} onClose={() => setShowDoiMKDangNhap(false)}></DoiMKDangNhap>
      <DoiMKRutTien isShow={isDoiMKRutTien} onClose={() => setShowDoiMKRutTien(false)}></DoiMKRutTien>
      <TTTaiKhoan isShow={isTTTaiKhoan} onClose={() => setShowTTTaiKhoan(false)}></TTTaiKhoan>
    </div>
  )
}

export default TTBaoMat
