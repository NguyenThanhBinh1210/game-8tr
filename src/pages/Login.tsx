import '~/styles/header.scss'
import { Link } from 'react-router-dom'
const Login = () => {
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
        <h2 className='text-xl text-white'>Đăng nhập</h2>
        <button className='text-white text-sm'>Dịch vụ</button>
      </div>
      <div className='px-8 pt-3'>
        <div>
          <select name='' id='' className='bg-primary text-white border-black border '>
            <option value=''>Tiếng việt</option>
          </select>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mb-3'>logo</p>
          <p className='my_logo text-lg'>Paradise Walkerhill Casino</p>
          <p className='my_logo text-lg'>Walkerhill-Paradise Casino</p>
        </div>
        <form action=''>
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
          <Link to={'/'} className='ml-auto block w-max text-primary'>
            Quên mật khẩu
          </Link>
          <button className='bg-primary text-white w-full py-2.5 mt-2 rounded-full'>Đăng nhập</button>
          <Link to={'/register'} className='block text-center text-primary w-full py-2.5 mt-2 rounded-full'>
            Đăng ký
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
