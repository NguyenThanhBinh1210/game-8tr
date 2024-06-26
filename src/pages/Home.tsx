import banggia from '~/assets/images/elephants1717557093photo_2024-06-05_11-11-03.jpg'
import loa from '~/assets/icons/loa.png'
import hot from '~/assets/icons/hot.png'
import Header from '~/components/layouts/Header'
import { Link } from 'react-router-dom'
import { games } from '~/constants/renaral.const'
const Home = () => {
  return (
    <>
      <Header></Header>
      <div className=' bg-[#efeef4] pb-14'>
        <img className='w-full' src={banggia} loading='lazy' alt='banggia' />
        <Link to={'/new'} className='flex py-3 bg-white shadow-sm'>
          <img className='w-[28px]' src={loa} alt='loa' />
          <marquee>Danh tiếng ao nhất trong toàn mạng lưới bắt đầu từ Sòng bạc Walkerhill-Paradise! </marquee>
        </Link>
        <div className='mt-4 bg-white'>
          <div className='flex  items-center gap-x-2 px-2 py-2'>
            <img className='w-5' src={hot} alt='hot' />
            <p className='text-sm'>Trò chơi phổ biến</p>
          </div>
          <div className='grid grid-cols-2'>
            {games.map((item) => (
              <button className='flex flex-col items-center border py-4'>
                <img className='w-[35px] ' src={item.img} loading='lazy' alt='1' />
                <p className='text-sm'>{item.title}</p>
                <p className='text-gray-500 text-xs'>{item.time}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
