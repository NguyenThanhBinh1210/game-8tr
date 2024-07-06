import { Link, useLocation } from 'react-router-dom'
import { navItems } from '~/constants/renaral.const'

const Footer = () => {
  const location = useLocation().pathname
  return (
    <nav className='fixed z-100 bg-primary  bottom-0 left-0 w-full grid grid-cols-5 h-[57px]  opacity-95'>
      {navItems.map((item) => (
        <Link
          className={`flex text-xs flex-col items-center justify-center ${
            location === item.path ? 'text-[#0b93ae]' : 'text-gray-400'
          }`}
          to={item.path}
        >
          {item.icon}
          <p className='mt-1 t'>{item.title}</p>
        </Link>
      ))}
    </nav>
  )
}

export default Footer
