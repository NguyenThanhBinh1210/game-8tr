import Footer from '~/components/layouts/Footer'
import { LayoutPropsInterface } from '~/types/base.type'

const HomeLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div>
      {children} <Footer></Footer>{' '}
    </div>
  )
}

export default HomeLayout
