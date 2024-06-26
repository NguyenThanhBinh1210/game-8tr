/* eslint-disable @typescript-eslint/no-explicit-any */
const LSNap = ({ isShow, onClose }: any) => {
  return (
    <div className={`${isShow ? "opacity-100 visible" : "opacity-0 invisible"} fixed top-0 left-0 w-full h-full bg-white`}>
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
        <h2 className='text-xl text-white'>Bản ghi nạp tiền</h2>
        <button className='text-white text-sm'></button>
      </div>
      LSNap
    </div>
  )
}

export default LSNap
