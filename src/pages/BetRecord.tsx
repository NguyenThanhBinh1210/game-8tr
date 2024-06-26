import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BetRecord = () => {
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'Tất cả', content: 'This is the content of Tab 1' },
    { id: 1, title: 'Đã trúng thưởng', content: 'This is the content of Tab 2' },
    { id: 2, title: 'Không trúng thưởng', content: 'This is the content of Tab 3' },
    { id: 4, title: 'Chờ giải thưởng', content: 'This is the content of Tab 3' },
  ];

  return (
    <div>
      <div className='flex justify-between bg-primary py-2.5 px-2'>
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
        <h2 className='text-xl text-white'>Hồ sơ cá cược</h2>
        <button className='text-white text-sm'></button>
      </div>
      <div className="">
        <div className="grid grid-cols-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-3 px-4 text-sm ${activeTab === tab.id
                ? 'border-b-2 border-primary text-primary'
                : 'bg-gray-200'
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <div key={tab.id} className="p-4 border rounded bg-gray-50">
                {tab.content}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  )
}

export default BetRecord