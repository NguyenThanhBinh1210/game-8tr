/* eslint-disable @typescript-eslint/no-explicit-any */
const LoiNhuan = ({ isShow, onClose }: any) => {
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
        <h2 className='text-xl text-white'>Hôm nay lợi nhuận</h2>
        <button className='text-white text-sm'></button>
      </div>
      <div className='bg-[#efeef4] min-h-screen'>
        <div className='py-7 pb-3' style={{ backgroundImage: 'linear-gradient(180deg,#6a202d,#3b052c)' }}>
          <p className='text-[#fced08] text-center mb-2'>Số tiền lãi</p>
          <p className='text-[#fced08] text-center text-4xl'>0.00$</p>
          <p className='text-gray-300 px-3 mt-12'>Công thức tính lãi và lỗ Hoạt động cá cược thắng</p>
        </div>
        <div className='bg-white mt-4 grid grid-cols-2 md:grid-cols-3'>
          <div className='flex flex-col items-center py-8 border-x'>
            <p className='text-[#ff6818] text-xl'>0.00</p>
            <p className=' '>Số tiền đặt cược</p>
          </div>
          <div className='flex flex-col items-center py-8 border-x'>
            <p className='text-[#ff6818] text-xl'>0.00</p>
            <p className=' '>Số tiền trúng thưởng</p>
          </div>
          <div className='flex flex-col items-center py-8 border-x'>
            <p className='text-[#ff6818] text-xl'>0.00</p>
            <p className=' '>Quà tặng sự kiện</p>
          </div>
          <div className='flex flex-col items-center py-8 border-x'>
            <p className='text-[#ff6818] text-xl'>0.00</p>
            <p className=' '>Số tiền hoàn lại</p>
          </div>
          <div className='flex flex-col items-center py-8 border-x'>
            <p className='text-[#ff6818] text-xl'>0.00</p>
            <p className=' '>Số tiền nạp lại</p>
          </div>
          <div className='flex flex-col items-center py-8 border-x'>
            <p className='text-[#ff6818] text-xl'>0.00</p>
            <p className=' '>Số tiền rút</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoiNhuan
