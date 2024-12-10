import { useDataContext } from '../context/language'
import { NavLink } from 'react-router-dom'
import { Close } from '../icons/icons'

const NavMobile = () => {
  const { lan } = useDataContext()

  const menuItems = [
    {
      id: 1,
      title: 'IMÁGENES',
      title_eng: 'IMAGES',
      title_pr: 'IMAGENS',
      url: '/imagenes',
    },
    {
      id: 2,
      title: 'PALABRAS',
      title_eng: 'WORDS',
      title_pr: 'PALAVRAS',
      url: '/palabras',
    },
    {
      id: 3,
      title: 'BIO',
      title_eng: 'BIO',
      title_pr: 'BIO',
      url: '/biografia',
    },
    {
      id: 4,
      title: 'CONTACTO',
      title_eng: 'CONTACT',
      title_pr: 'CONTACTO',
      url: '/contacto',
    },
  ]

  const close = () => {
    const menu = document.getElementById('menu-mobile')
    menu.classList.add('fade-out')
    setTimeout(() => {
      menu.classList.remove('fade-out')
      menu.classList.add('hidden')
    }, 500)
  }

  return (
    <div
      className='fixed top-0 h-screen w-screen bg-secondary text-white justify-center items-center z-50 hidden'
      id='menu-mobile'
    >
      <div className='absolute top-0 w-full px-14 py-8 flex justify-between items-start'>
        <div>
          <h1 className='text-white font-secondary text-2xl'>
            GLORIA SILVA SEEBER
          </h1>
        </div>

        <button
          className='hover:opacity-70'
          onClick={close}
        >
          <Close />
        </button>
      </div>
      <nav>
        <ul className='font-secondary text-center text-2xl'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className='mb-6'
            >
              <NavLink
                to={item.url}
                className='hover:opacity-70 text-white'
              >
                {lan === 'es'
                  ? item.title
                  : lan === 'en'
                  ? item.title_eng
                  : item.title_pr}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavMobile
