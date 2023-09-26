import { Open } from '../icons/icons'

const MenuBar = () => {
  const open = () => {
    const menu = document.getElementById('menu-mobile')
    menu.classList.remove('hidden')
    menu.classList.add('flex')
    menu.classList.add('fade-in')
  }

  return (
    <button
      className='block lg:hidden hover:opacity-70'
      onClick={open}
    >
      <Open />
    </button>
  )
}

export default MenuBar
