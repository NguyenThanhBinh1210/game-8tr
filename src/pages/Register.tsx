import '~/styles/header.scss'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { AppContext } from '~/contexts/app.context'
import { useMutation } from 'react-query'
import { registerAccount } from '~/apis/auth.api'
import { toast } from 'react-toastify'
const Register = () => {
  const mutation = useMutation((body: any) => {
    return registerAccount(body)
  })
  const { setIsAuthenticated, setProfile } = React.useContext(AppContext)

  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('first', formState.password !== formState.confirmPassword)
    if (formState.password !== formState.confirmPassword) {
      toast.warn('Mật khẩu không trùng nhau. Hãy xác nhận lại mật khẩu của bạn')
    } else {
      mutation.mutate(formState, {
        onSuccess: (dataUser: any) => {
          console.log(dataUser)
          const newUser = dataUser.data.user
          setProfile(newUser)
          toast.success('Đã đăng ký thành công!')
          setIsAuthenticated(true)
          navigate('/')
        },
        onError: (data: any) => {
          toast.warn(data.response.data.errMessage)
        }
      })
    }
  }
  const initialFromState = {
    username: '',
    idRef: '',
    password: '',
    passwordRutTien: '',
    confirmPassword: ''
  }
  const [formState, setFormState] = React.useState(initialFromState)
  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (name === 'phone') {
      const validValue = value.replace(/\D/g, '').slice(0, 10)
      setFormState((prev) => ({ ...prev, [name]: validValue }))
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }))
    }
  }
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
        <form action='' onSubmit={handleSubmit}>
          <div className='font-bold text-lg mb-2'> Không có mã giới thiệu:9473</div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Mã mời
            </label>
            <input
              className='rounded-full border py-2 px-3'
              type='text'
              placeholder='Vui lòng nhập mã mời'
              value={formState.idRef}
              onChange={handleChange('idRef')}
            />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Tên người dùng
            </label>
            <input
              className='rounded-full border py-2 px-3'
              type='text'
              placeholder='Tên người dùng'
              value={formState.username}
              onChange={handleChange('username')}
            />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Mật khẩu
            </label>
            <input
              className='rounded-full border py-2 px-3'
              type='text'
              placeholder='Mật khẩu'
              value={formState.password}
              onChange={handleChange('password')}
            />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Xác nhận mật khẩu
            </label>
            <input
              className='rounded-full border py-2 px-3'
              type='text'
              placeholder='Xác nhận mật khẩu'
              value={formState.confirmPassword}
              onChange={handleChange('confirmPassword')}
            />
          </div>
          <div className='flex flex-col text-sm mb-4'>
            <label htmlFor='' className='mb-1'>
              Mật khẩu rút tiền
            </label>
            <input
              className='rounded-full border py-2 px-3'
              type='text'
              placeholder='Mật khẩu rút tiền'
              value={formState.passwordRutTien}
              onChange={handleChange('passwordRutTien')}
            />
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
