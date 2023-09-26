import { useState } from 'react'
import Layout from '../../components/Layout'
import useFetch from '../../hooks/useFetch'
import TextHTML from '../../hooks/useHTML'
import { Helmet } from 'react-helmet'
import PresentacionPalabras from '../../components/PresentacionPalabras'
import { useDataContext } from '../../context/language'

const palabras = () => {
  const { lan } = useDataContext()
  const [category, setCategory] = useState(null)
  const { data, loading } = useFetch(`/palabras`)
  let filteredData = []

  const menuItems = [
    {
      id: 1,
      title: 'Poemas',
      title_eng: 'Poems',
      title_pr: 'Poems',
      category: 3,
    },
    {
      id: 2,
      title: 'Textos sueltos',
      title_eng: 'Loose texts',
      title_pr: 'Loose texts',
      category: 4,
    },
  ]

  const filterData = (data) => {
    return data.filter((item) => {
      return item.type == category
    })
  }
  if (data) {
    filteredData = filterData(data)
  }
  const handleFilter = (category) => {
    setCategory(category)
  }

  return (
    <Layout>
      <Helmet>
        <title>GLORIA SILVA &bull; PALABRAS</title>
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
          content='http://gloriasilvaphoto.com/palabras'
        />
        <link
          rel='canonical'
          href='http://gloriasilvaphoto.com/palabras'
        />
      </Helmet>

      <div className='fixed z-40 w-full top-16 lg:top-24 lg:flex px-14 bg-white pb-4'>
        <div className='header-col-1'> </div>
        <div className='header-col-2'>
          <div className='block mb-2 mt-2 lg:hidden'>
            <h1 className='font-bold'>
              {lan === 'es' ? 'Palabras' : lan === 'en' ? 'Words' : 'Palavras'}
            </h1>
          </div>

          <ul className='submenu flex text-sm'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`hover:opacity-70 ${
                    item.category === category && 'text-secondary'
                  }`}
                  onClick={() => handleFilter(item.category)}
                >
                  {lan === 'es'
                    ? item.title
                    : lan === 'en'
                    ? item.title_eng
                    : item.title_por}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className='lg:flex mt-40 px-14'>
        <div className='header-col-1'></div>
        <div className='header-col-2 w-96'>
          <div className='list w-full max-w-3xl'>
            {!loading &&
              filteredData &&
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className='mb-8 border-b pb-8 text-sm'
                >
                  <h1 className='font-tertiary font-bold mb-4 text-secondary'>
                    {lan === 'es'
                      ? item.title
                      : lan === 'en'
                      ? item.title_eng
                      : item.title_por}
                  </h1>
                  <div className='text-justify font-tertiary'>
                    <TextHTML
                      content={
                        lan === 'es'
                          ? item.text
                          : lan === 'en'
                          ? item.text_eng
                          : item.text_por
                      }
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {!category && <PresentacionPalabras />}
    </Layout>
  )
}

export default palabras
