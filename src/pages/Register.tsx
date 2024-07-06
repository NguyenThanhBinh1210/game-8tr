import '~/styles/header.scss'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div>
      <div className='flex justify-between bg-primary py-2.5 px-2'>
        <button>
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
        <h2 className='text-xl text-white'>Đăng ký</h2>
        <button className='text-white text-sm'></button>
      </div>
      <div className='px-8 pt-3'>
        <form action=''>
          <div className='font-bold text-lg mb-2'> Không có mã giới thiệu:9473</div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Mã mời
            </label>
            <input className='rounded-full border py-2 px-3' type='text' placeholder='Vui lòng nhập mã mời' />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Tên người dùng
            </label>
            <input className='rounded-full border py-2 px-3' type='text' placeholder='Tên người dùng' />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Mật khẩu
            </label>
            <input className='rounded-full border py-2 px-3' type='text' placeholder='Mật khẩu' />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Xác nhận mật khẩu
            </label>
            <input className='rounded-full border py-2 px-3' type='text' placeholder='Xác nhận mật khẩu' />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Mật khẩu rút tiền
            </label>
            <input className='rounded-full border py-2 px-3' type='text' placeholder='Mật khẩu rút tiền' />
          </div>
          <Link to={'/login'} className='ml-auto block w-max text-primary'>
            Đăng nhập
          </Link>
          <button className='bg-primary text-white w-full py-2.5 mt-2 rounded-full'>Đăng ký</button>
        </form>
      </div>
    </div>
  )
}

export default Register
