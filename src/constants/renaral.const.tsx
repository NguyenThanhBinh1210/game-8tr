import k3_zh from '~/assets/images/k3_zh-cn.png'
import ssc_zh from '~/assets/images/ssc_zh-cn.png'
import kl8_zh from '~/assets/images/kl8_zh-cn.png'
import x5_zh from '~/assets/images/x5_zh-cn.png'
import pk10 from '~/assets/images/pk10_zh-cn.png'
import Hang4 from '~/components/modals/levels/Hang4'
import Hang5 from '~/components/modals/levels/Hang5'
import Hang6 from '~/components/modals/levels/Hang6'

export const menuItems = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'web design',
        url: 'web-design'
      },
      {
        title: 'web development',
        url: 'web-dev',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend'
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                url: 'node'
              },
              {
                title: 'PHP',
                url: 'php'
              }
            ]
          }
        ]
      },
      {
        title: 'SEO',
        url: 'seo'
      }
    ]
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are'
      },
      {
        title: 'Our values',
        url: 'our-values'
      }
    ]
  }
]

export const navItems = [
  {
    path: '/',
    title: 'Trang chủ',
    icon: (
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
          d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
        />
      </svg>
    )
  },
  {
    path: '/betRecord',
    title: 'Hồ sơ cá cược',
    icon: (
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
          d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
        />
      </svg>
    )
  },
  {
    path: '/lotteryHall',
    title: 'Sảnh trò chơi',
    icon: (
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
          d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'
        />
      </svg>
    )
  },
  {
    path: '/service',
    title: 'Dịch vụ',
    icon: (
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
          d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
        />
      </svg>
    )
  },
  {
    path: '/my',
    title: 'Của tôi',
    icon: (
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
          d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        />
      </svg>
    )
  }
]

export const games = [
  {
    path: '/Game-ygpk',
    title: '168 Phi thuyền',
    time: '1 phút',
    img: pk10
  },
  {
    path: '/Game-xyft',
    title: 'Thuyền may mắn',
    time: '5 phút',
    img: pk10
  },
  {
    path: '/Game-xyft',
    title: 'Đua xe Bắc Kinh',
    time: 'Cả ngày',
    img: pk10
  },
  {
    path: '/Game-xyft',
    title: 'khí cầu SG',
    time: 'Cả ngày',
    img: pk10
  },
  {
    path: '/Game-xyft',
    title: 'Australia may mắn 10',
    time: '288 ngày',
    img: pk10
  },
  {
    path: '/Game-xyft',
    title: '168 đua xe',
    time: '1 phút',
    img: pk10
  },
  {
    path: '/Game-xyft',
    title: 'Australia may mắn 5',
    time: '288 ngày',
    img: ssc_zh
  },
  {
    path: '/Game-xyft',
    title: 'Thời điểm may mắn',
    time: '288 ngày',
    img: ssc_zh
  },
  {
    path: '/Game-xyft',
    title: 'Đài Loan 5 điểm',
    time: 'Cả ngày',
    img: ssc_zh
  },
  {
    path: '/Game-xyft',
    title: 'SG11 chọn 5',
    time: 'Cả ngày',
    img: x5_zh
  },
  {
    path: '/Game-xyft',
    title: 'SG giờ',
    time: '288 ngày',
    img: ssc_zh
  },
  {
    path: '/Game-xyft',
    title: 'Thêm màu sắc',
    time: '',
    img: ssc_zh
  }
]
export const gameList = [
  {
    path: '/Game-ygpk',
    title: '168 Phi thuyền',
    time: '1 phút',
    img: pk10,
    type: 4
  },
  {
    path: '/Game-xyft',
    title: 'Thuyền may mắn',
    time: '5 phút',
    img: pk10,
    type: 4
  },
  {
    path: '/Game-xyft',
    title: 'Đua xe Bắc Kinh',
    time: 'Cả ngày',
    img: pk10,
    type: 4
  },
  {
    path: '/Game-xyft',
    title: 'khí cầu SG',
    time: 'Cả ngày',
    img: pk10,
    type: 4
  },
  {
    path: '/Game-xyft',
    title: 'Australia may mắn 10',
    time: '288 ngày',
    img: pk10,
    type: 4
  },
  {
    path: '/Game-xyft',
    title: '168 đua xe',
    time: '1 phút',
    img: pk10,
    type: 4
  },
  {
    path: '/Game-xyft',
    title: 'Australia may mắn 5',
    time: '288 ngày',
    img: ssc_zh,
    type: 2
  },
  {
    path: '/Game-xyft',
    title: 'Thời điểm may mắn',
    time: '288 ngày',
    img: ssc_zh,
    type: 2
  },
  {
    path: '/Game-xyft',
    title: 'Đài Loan 5 điểm',
    time: 'Cả ngày',
    img: ssc_zh,
    type: 2
  },
  {
    path: '/Game-xyft',
    title: 'SG11 chọn 5',
    time: 'Cả ngày',
    img: x5_zh,
    type: 5
  },
  {
    path: '/Game-xyft',
    title: 'SG giờ',
    time: '288 ngày',
    img: ssc_zh,
    type: 2
  },
  {
    path: '/Game-xyft',
    title: 'Hạnh phúc',
    time: 'Cả ngày 1 kỳ',
    img: kl8_zh,
    type: 3
  },
  {
    path: '/Game-xyft',
    title: 'Tiếng anh Lotto 20',
    time: 'Cả ngày 576',
    img: kl8_zh,
    type: 3
  },
  {
    path: '/Game-xyft',
    title: 'Nhanh lên 3',
    time: '2 phút 1 bài',
    img: k3_zh,
    type: 1
  }
]
export const typeColor = [
  { number: 1, color: 'bg-gradient-to-b from-yellow-400 to-yellow-800' },
  { number: 2, color: 'bg-gradient-to-b from-blue-500 to-blue-800' },
  { number: 3, color: 'bg-gradient-to-b from-gray-500 to-gray-900' },
  { number: 4, color: 'bg-gradient-to-b from-orange-500 to-orange-800' },
  { number: 5, color: 'bg-gradient-to-b from-teal-400 to-teal-800' },
  { number: 6, color: 'bg-gradient-to-b from-purple-400 to-purple-800' },
  { number: 7, color: 'bg-gradient-to-b from-gray-300 to-gray-600' },
  { number: 8, color: 'bg-gradient-to-b from-red-400 to-red-800' },
  { number: 9, color: 'bg-gradient-to-b from-red-600 to-red-900' },
  { number: 10, color: 'bg-gradient-to-b from-green-400 to-green-800' }
]

export const gamePhiThuyen = [
  {
    title: 'Hạng 4',
    type: 'hang-4',
    content: <Hang4 />
  },
  {
    title: 'Hạng 5',
    type: 'hang-5',
    content: <Hang5 />
  },
  {
    title: 'Thứ 6',
    type: 'thu-6',
    content: <Hang6 />
  },
  {
    title: 'Hạng 7',
    type: 'hang-7'
  },
  {
    title: 'Số 8',
    type: 'so-8'
  },
  {
    title: 'Thứ chín',
    type: 'thu-9'
  },
  {
    title: 'Số 10',
    type: 'so-10'
  },
  {
    title: 'Hai mặt đĩa',
    type: 'hai-mat-dia'
  },
  {
    title: 'Hạng 1 - 10',
    type: 'hang-1-10'
  },
  {
    title: 'Quan Á và',
    type: 'quan-a-va'
  },
  {
    title: 'Vô địch',
    type: 'vo-dich'
  },
  {
    title: 'Á quân',
    type: 'a-quan'
  },
  {
    title: 'Vị trí thứ ba',
    type: 'vi-tri-thu-ba'
  }
]
