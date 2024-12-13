import { useDataContext } from '../context/language'
import { NavLink } from 'react-router-dom'
import { menuItems } from '../data/data'

const Nav = () => {
  const { lan } = useDataContext()

  return (
    <nav className='hidden lg:block mt-1'>
      <ul className='font-secondary mt-8 lg:mt-0 flex gap-8 lg:gap-20 items-start'>
        {menuItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.url}
              className='hover:opacity-70'
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
  )
}

export default Nav
