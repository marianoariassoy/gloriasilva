import { useDataContext } from '../../context/language'
import Layout from '../../components/Layout'
import Form from './Form'
import { Helmet } from 'react-helmet'

const Contacto = () => {
  const { lan } = useDataContext()

  return (
    <Layout>
      <Helmet>
        <title>GLORIA SILVA &bull; CONTACTO</title>
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
          content='http://gloriasilvaphoto.com/contacto'
        />
        <link
          rel='canonical'
          href='http://gloriasilvaphoto.com/contacto'
        />
      </Helmet>

      <div className='fixed z-40 w-full top-16 px-14 bg-white pb-4 block lg:hidden'>
        <div className='header-col-1'> </div>
        <div className='header-col-2'>
          <div className=' mb-2 mt-2'>
            <h1 className='font-bold'>
              {lan === 'es'
                ? 'Contacto'
                : lan === 'en'
                ? 'Contact'
                : 'Contacto'}
            </h1>
          </div>
        </div>
      </div>

      <section className='lg:flex mt-40 px-14'>
        <div className='header-col-1'> </div>
        <div className='header-col-2'>
          <div className='w-full max-w-xl'>
            <Form />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contacto
