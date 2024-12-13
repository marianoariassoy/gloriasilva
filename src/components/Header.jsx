import { Link } from 'react-router-dom'
import MenuBar from './MenuBar'
import Nav from './Nav'
import { useDataContext } from '../context/language'

const Header = () => {
  const { lan } = useDataContext()

  return (
    <>
      <div className='lg:flex w-full justify-between items-start py-8 lg:py-8 px-14'>
        <div className='header-col-1 flex justify-between items-center'>
          <div>
            <Link to='/'>
              <h1 className='font-secondary text-2xl'>GLORIA SILVA SEEBER</h1>
              <h2>
                {lan === 'es' ? 'Artista' : lan === 'en' ? 'Artist' : 'Artista'}
              </h2>
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
