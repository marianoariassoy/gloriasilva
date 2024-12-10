import { Helmet } from 'react-helmet'
// import Nav from '../../components/Nav'
import Lan from './Lan'
import Slider from './Slider'
import NavMobile from '../../components/NavMobile'
import { Open } from '../../icons/icons'

const Home = () => {
  const open = () => {
    const menu = document.getElementById('menu-mobile')
    menu.classList.remove('hidden')
    menu.classList.add('flex')
    menu.classList.add('fade-in')
  }

  return (
    <>
      <Helmet>
        <title>GLORIA SILVA PHOTO</title>
        <meta
          property='og:title'
          content='GLORIA SILVA PHOTO'
        />
        <meta
          property='og:description'
          content=''
        />
        <meta
          property='og:url'
          content='http://gloriasilvaphoto.com/'
        />
        <link
          rel='canonical'
          href='http://gloriasilvaphoto.com/'
        />
      </Helmet>

      <div className='fixed right-8 lg:right-14 top-8 z-50 text-white'>
        <button
          className='hover:opacity-70'
          onClick={open}
        >
          <Open />
        </button>
      </div>

      <NavMobile />

      <main className='h-scren w-screen bg-slate-200'>
        <div className='absolute px-14 py-8 z-30 fade-in'>
          <Lan />
        </div>

        <div className='fixed top-1/2 z-20 fade-in items-end px-14 hidden lg:flex cursor-pointer'>
          <div className='header-col-1'>
            <h1
              className='text-white font-secondary text-3xl cursor-pointer'
              onClick={open}
            >
              GLORIA SILVA SEEBER <br />
            </h1>
            <h2 className='text-white font-secondary text-2xl'> Artista</h2>
          </div>
        </div>

        <div className='fixed top-0 h-screen w-full z-20 fade-in flex items-center justify-center px-14 lg:hidden'>
          <button
            className='hover:opacity-70'
            onClick={open}
          >
            <h1 className='text-white font-secondary text-3xl '>
              GLORIA SILVA SEEBER
            </h1>
            <h2 className='text-white font-secondary text-xl'> Artista</h2>
          </button>
        </div>

        <div className='fixed w-full h-full z-10'>
          <Slider />
        </div>
      </main>
    </>
  )
}

export default Home
