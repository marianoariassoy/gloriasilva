import { useDataContext } from '../context/language'

const Modal = ({
  currentImage,
  setCurrentImage,
  handelNext,
  handelPrev,
  title,
}) => {
  const { imageURL } = useDataContext()

  const handelClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setCurrentImage(null)
    }
  }
  return (
    <div
      className='fade-in-2 fixed bg-black bg-opacity-70 h-screen w-screen top-0 left-0 grid place-items-center p-8 dismiss z-50'
      onClick={handelClick}
    >
      <div className='text-center flex justify-start flex-col items-center'>
        <img
          src={imageURL + currentImage}
          className='h-full bg-white mb-4 modal-image'
        />
        <div className='text-white text-sm text-center'>{title} </div>
      </div>
      <span
        className='absolute top-8 right-8 cursor-pointer hover:opacity-70 dismiss z-50 text-white text-3xl font-bold'
        onClick={handelClick}
      >
        X
      </span>
      <span
        className='absolute top-1/2 left-8 cursor-pointer hover:opacity-70 z-50 hidden lg:block'
        onClick={handelPrev}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
          height='40'
          fill='#FFF'
        >
          <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
        </svg>
      </span>
      <span
        className='absolute top-1/2 right-8 cursor-pointer hover:opacity-70 z-50 hidden lg:block'
        onClick={handelNext}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
          height='40'
          fill='#FFF'
        >
          <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
        </svg>
      </span>
    </div>
  )
}

export default Modal
