/* eslint-disable @typescript-eslint/no-explicit-any */
const DoiMKDangNhap = ({ isShow, onClose }: any) => {
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
        <h2 className='text-xl text-white'>Đổi mật khẩu đăng nhập</h2>
        <button className='text-white text-sm'></button>
      </div>
      <div className=' pt-3 px-8 min-h-screen'>
        <form action='' className='bg-white py-4'>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Mật khẩu gốc
            </label>
            <input className='rounded-full border py-2 px-3' type='password' placeholder='Mật khẩu gốc' />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Nhập mật khẩu mới
            </label>
            <input className='rounded-full border py-2 px-3' type='password' placeholder='Nhập mật khẩu mới' />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Xác nhận mật khẩu
            </label>
            <input className='rounded-full border py-2 px-3' type='password' placeholder='Xác nhận mật khẩu' />
          </div>

          <button className='bg-primary text-white w-full py-2.5 mt-2 rounded-full'>Xác nhận cập nhật</button>
        </form>
      </div>
    </div>
  )
}

export default DoiMKDangNhap
