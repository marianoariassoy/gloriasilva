import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { useDataContext } from '../../context/language'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'

const SliderItem = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <Loader />
  ) : (
    <img
      src={src}
      className='h-screen w-screen object-cover fade-in'
    />
  )
}

const Slider = () => {
  const { imageURL } = useDataContext()
  const { data, loading } = useFetch(`/home`)

  const properties = {
    arrows: false,
    transitionDuration: 600,
    duration: 2000,
    pauseOnHover: false,
    autoplay: true,
    indicators: true,
  }

  return loading ? (
    <Loader />
  ) : (
    <Slide {...properties}>
      {data &&
        data.map((item) => (
          <SliderItem
            key={item.id}
            src={`${imageURL}${item.image}`}
            date={item.date}
            title={item.title}
          />
        ))}
    </Slide>
  )
}

export default Slider
