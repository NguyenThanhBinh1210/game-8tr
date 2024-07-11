import { useEffect, useState } from 'react'
import { gamePhiThuyen, typeColor } from '~/constants/renaral.const'
import { randomNumber, randomNumbers } from '~/apis/random.api'
import { useQuery } from 'react-query'

const GameYgpk = ({ isShow, onClose }: any) => {
  // const queryClient = useQueryClient()
  const [numbers, setNumbers] = useState<(number | null)[]>([])
  const [startTime, setStartTime] = useState(0)
  const [stopTime, setStopTime] = useState(0)
  const [resetTime, setResetTime] = useState(0)
  const [isLoadingData, setIsLoadingData] = useState(false) // State to manage loading state

  const [data, setData] = useState<any>()
  const [dataAll, setDataAll] = useState<any[]>([])

  const [remainingTime, setRemainingTime] = useState('')
  const [remainingTimes, setRemainingTimes] = useState('')
  const [activeTab, setActiveTab] = useState(gamePhiThuyen[0])

  const { refetch } = useQuery({
    queryKey: ['table', 4],
    queryFn: () => {
      setIsLoadingData(true) // Start loading when API call is made
      return randomNumber()
    },
    onSuccess: (data) => {
      setData(data.data)
      setNumbers(data.data.getNumber.randomNumbers)
      setStartTime(data.data.getNumber.startTime)
      setStopTime(data.data.getNumber.stopTime)
      setResetTime(data.data.getNumber.resetTime)
      setIsLoadingData(false) // Stop loading when data is returned
    },
    cacheTime: 30000
  })

  useQuery({
    queryKey: ['tableAlls', 4],
    queryFn: () => {
      setIsLoadingData(true) // Start loading when API call is made
      return randomNumbers()
    },
    onSuccess: (data) => {
      setDataAll(data.data.data)
      setIsLoadingData(false) // Stop loading when data is returned
    },
    cacheTime: 30000
  })

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = Math.floor(Date.now() / 1000)
      const difference = startTime - now
      const differences = stopTime - now
      const resetTimes = resetTime - now

      if (isLoadingData) {
        return // Don't update time if loading
      }

      if (differences > 0) {
        setNumbers(dataAll[0]?.randomNumbers || []) // Ensure dataAll and randomNumbers are defined
      } else if (differences <= 0 && resetTimes > 0) {
        setRemainingTimes('00:00:00')
        setNumbers(Array(9).fill(null))
      } else if (resetTimes === 0 && difference > 0) {
        setRemainingTimes('00:00:00')
        refetch()
        return
      } else if (difference <= 0) {
        setRemainingTimes('00:00:00')
        setRemainingTime('00:00:00')
        refetch()
        return
      }

      const hours = Math.floor(difference / 3600)
        .toString()
        .padStart(2, '0')
      const minutes = Math.floor((difference % 3600) / 60)
        .toString()
        .padStart(2, '0')
      const seconds = (difference % 60).toString().padStart(2, '0')

      let hour
      let minute
      let second
      if (differences > 0) {
        hour = Math.floor(differences / 3600)
          .toString()
          .padStart(2, '0')
        minute = Math.floor((differences % 3600) / 60)
          .toString()
          .padStart(2, '0')
        second = (differences % 60).toString().padStart(2, '0')
      } else {
        hour = '00'
        minute = '00'
        second = '00'
      }

      setRemainingTime(`${hours}:${minutes}:${seconds}`)
      setRemainingTimes(`${hour}:${minute}:${second}`)
    }

    const intervalId = setInterval(updateRemainingTime, 1000)
    updateRemainingTime()

    return () => clearInterval(intervalId)
  }, [startTime, stopTime, resetTime, refetch, isLoadingData, dataAll])

  return (
    <div
      className={`${isShow ? 'opacity-100 visible' : 'opacity-0 invisible'} z-50 fixed top-0 left-0 w-full h-full bg-white`}
    >
      <div className='z-100 sticky top-0 left-0 w-full h-max flex justify-between bg-primary py-2.5 px-2'>
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
        <h2 className='text-xl text-white'>168 Phi thuyền</h2>
        <button className='text-white text-sm'></button>
      </div>
      <div className='min-h-screen bg-blue-gray-50'>
        {isLoadingData && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50'>
            <div className='spinner-border text-primary' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        )}
        <div className='flex pt-3 pb-2 justify-between pr-2 bg-white md:pl-2'>
          <div>
            <p>{data?.getNumber?.randomId} Giai đoạn</p>
            <p>{Number(data?.getNumber?.randomId) + 1} Giai đoạn</p>
            <div className='space-x-2'>
              <span>
                Số dư <span className='text-primary'>0.00</span>
              </span>
              <span>
                Hôm nay: <span className='text-primary'>0.00</span>
              </span>
            </div>
          </div>
          <div>
            <div className='flex flex-wrap '>
              {numbers.map((num, index) => {
                const color = typeColor.find((item) => item.number === num)?.color || 'bg-gray-200'
                return (
                  <div
                    key={index}
                    className={`w-6 h-6 flex items-center justify-center text-white text-lg rounded-full ${color}`}
                  >
                    {num}
                  </div>
                )
              })}
            </div>
            <div className='mt-2'>
              <span>
                Đóng đĩa: <span className='text-primary'>{remainingTimes}</span>
              </span>
            </div>
            <div className='mt-2'>
              <span>
                Bắt đầu lượt mới: <span className='text-primary'>{remainingTime}</span>
              </span>
            </div>
          </div>
          <button>
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
                d='M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z'
              />
            </svg>
          </button>
        </div>
        <div className='grid grid-cols-4'>
          <div style={{ height: 'calc(100vh - 150px)' }} className='overflow-y-auto'>
            {gamePhiThuyen.map((item) => (
              <button
                onClick={() => setActiveTab(item)}
                className={`w-full pl-2 py-4 text-left ${
                  activeTab.type === item.type ? 'bg-primary text-white' : ''
                }  border-b border-gray-400`}
                key={item.type}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div style={{ height: 'calc(100vh - 150px)' }} className='col-span-3 overflow-y-auto'>
            {activeTab.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameYgpk
