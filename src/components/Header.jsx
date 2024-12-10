import { Link } from 'react-router-dom'
import MenuBar from './MenuBar'
import Nav from './Nav'

const Header = () => {
  return (
    <>
      <div className='lg:flex w-full justify-between items-end py-8 lg:py-10 px-14'>
        <div className='header-col-1 flex justify-between items-center'>
          <div>
            <Link to='/'>
              <h1 className='font-secondary text-2xl'>GLORIA SILVA SEEBER</h1>
            </Link>
          </div>
          <div>
            <MenuBar />
          </div>
        </div>
        <div className='header-col-2'>
          <Nav />
        </div>
      </div>
    </>
  )
}

export default Header
