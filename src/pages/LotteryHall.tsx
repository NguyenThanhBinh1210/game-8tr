import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import k3_zh from '~/assets/images/k3_zh-cn.png'
import ssc_zh from '~/assets/images/ssc_zh-cn.png'
import kl8_zh from '~/assets/images/kl8_zh-cn.png'
import x5_zh from '~/assets/images/x5_zh-cn.png'
import pk10_zh from '~/assets/images/pk10_zh-cn.png'
import { gameList } from '~/constants/renaral.const'
import GameYgpk from '~/components/modals/games/GameYgpk'
const LotteryHall = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)
  const [showList, setList] = useState(gameList)
  const [isGameYgpk, setShowGameYgpk] = useState(false)

  const tabs = [
    {
      id: 0,
      title: 'Tất cả',
      content: 'This is the content of Tab 1'
    },
    { id: 1, title: 'Nhanh 3', icon: k3_zh, content: 'This is the content of Tab 2' },
    { id: 2, title: 'Thời gian', icon: ssc_zh, content: 'This is the content of Tab 3' },
    { id: 3, title: 'Màu sắc', icon: kl8_zh, content: 'This is the content of Tab 3' },
    { id: 4, title: 'PK10', icon: pk10_zh, content: 'This is the content of Tab 3' },
    { id: 5, title: '11 chọn 5', icon: x5_zh, content: 'This is the content of Tab 3' }
  ]
  useEffect(() => {
    if (activeTab === 0) {
      setList(gameList)
    } else {
      const clone = [...gameList]
      const filteredGames = clone.filter((game) => game.type === activeTab)
      setList(filteredGames)
    }
  }, [activeTab])

  return (
    <div>
      <div className='z-100 sticky  top-0 left-0 w-full h-max flex  justify-between bg-primary py-2.5 px-2'>
        <button onClick={() => navigate(-1)}>
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
        <h2 className='text-xl text-white'>Tất cả các loại màu</h2>
        <button className='text-white text-sm'></button>
      </div>
      <div className='pb-14'>
        <div className='grid grid-cols-3 md:grid-cols-6 border-b'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-3 px-4 flex flex-col items-center justify-center text-sm ${activeTab === tab.id ? 'border-b-2 border-primary text-primary' : 'bg-gray-200'
                }`}
              onClick={() => {
                setActiveTab(index)
              }}
            >
              {tab.icon ? (
                <img className='w-[30px]' loading='lazy' src={tab.icon} alt='s' />
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5'
                  />
                </svg>
              )}

              {tab.title}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-2'>
          {showList.map((item, index) => (
            <button
              onClick={() => setShowGameYgpk(true)}
              key={index}
              className='flex flex-col items-center border py-4'
            >
              <img className='w-[35px] ' src={item.img} loading='lazy' alt='1' />
              <p className='text-sm'>{item.title}</p>
              <p className='text-gray-500 text-xs'>{item.time}</p>
            </button>
          ))}
        </div>
      </div>

      <GameYgpk isShow={isGameYgpk} onClose={() => setShowGameYgpk(false)}></GameYgpk>
    </div>
  )
}

export default LotteryHall
