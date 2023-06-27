import { useState } from "react";
import { useDataContext } from "../../context/language";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import GalleryItem from "../../components/GalleryItem";
import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import TextHTML from "../../hooks/useHTML";
import { Helmet } from "react-helmet";
import PresentacionImagenes from "../../components/PresentacionImagenes";

const Imagenes = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/trabajos`);
  const { data: gallery } = useFetch(`/imagenes`);
  const [itemShow, setItemShow] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setcurrentIndex] = useState(false);
  const [imageTitle, setImageTitle] = useState("");
  let filteredGallery = [];

  const filterData = (gallery) => {
    return gallery.filter((item) => {
      return item.item == itemShow;
    });
  };
  if (gallery) {
    filteredGallery = filterData(gallery);
  }

  const handleFilter = (id) => {
    setItemShow(id);
  };

  const handelCLick = (item, index, title) => {
    setCurrentImage(item);
    setcurrentIndex(index);
    setImageTitle(title);
  };

  const handelNext = () => {
    if (currentIndex === filteredGallery.length - 1) {
      setCurrentImage(filteredGallery[0].image);
      setcurrentIndex(0);
      setImageTitle(filteredGallery[0].text);
    } else {
      setCurrentImage(filteredGallery[currentIndex + 1].image);
      setcurrentIndex(currentIndex + 1);
      setImageTitle(filteredGallery[currentIndex + 1].text);
    }
  };
  const handelPrev = () => {
    if (currentIndex === 0) {
      setCurrentImage(filteredGallery[filteredGallery.length - 1].image);
      setcurrentIndex(filteredGallery.length - 1);
      setImageTitle(filteredGallery[filteredGallery.length - 1].text);
    } else {
      setCurrentImage(filteredGallery[currentIndex - 1].image);
      setcurrentIndex(currentIndex - 1);
      setImageTitle(filteredGallery[currentIndex - 1].text);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>GLORIA SILVA &bull; IMAGENES</title>
        <meta property="og:title" content="GLORIA SILVA PHOTO" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="http://gloriasilvaphoto.com/imagenes" />
        <link rel="canonical" href="http://gloriasilvaphoto.com/imagenes" />
      </Helmet>

      <div className="fixed w-full top-16 z-40 lg:top-24 lg:flex px-14 bg-white pb-4">
        <div className="header-col-1"> </div>
        <div className="header-col-2">
          <div className="block mb-2 mt-2 lg:hidden">
            <h1 className="font-bold"> {lan === "es" ? "Imágenes" : lan === "en" ? "Images" : "Imagens"}</h1>
          </div>

          <ul className="submenu flex text-sm flex-wrap">
            {!loading &&
              data &&
              data.map((item) => (
                <li key={item.id} className="mb-2">
                  <button className={`hover:opacity-70 ${item.id === itemShow && "text-secondary"}`} onClick={() => handleFilter(item.id)}>
                    {lan === "es" ? item.title : lan === "en" ? item.title_eng : item.title_por}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {itemShow &&
        data
          .filter((item) => item.id === itemShow)
          .map((item) => (
            <section key={item.id} className="mt-48 lg:mt-40 px-14 hidden lg:block">
              <div className="lg:flex">
                <div className="header-col-1 text-sm lg:pr-20 pb-12 ">
                  {item.text2 && (
                    <div className="text-right mb-8 italic">
                      <TextHTML content={lan === "es" ? item.text2 : lan === "en" ? item.text2_eng : item.text2_por} />
                    </div>
                  )}
                  <div>
                    <TextHTML content={lan === "es" ? item.text : lan === "en" ? item.text_eng : item.text_por} />
                  </div>
                </div>
                <div className="header-col-2 pb-8">
                  <div className="w-full grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {filteredGallery &&
                      filteredGallery.map((item, index) => (
                        <div key={item.id} className="aspect-square object-cover">
                          <GalleryItem src={item.image} title={lan === "es" ? item.text : lan === "en" ? item.text_eng : item.text_eng} alt="" className="aspect-square object-cover w-full h-full" handelCLick={handelCLick} index={index} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

      {!itemShow && <PresentacionImagenes />}

      <section className="mt-44 block lg:hidden">
        {data &&
          data
            .filter((item) => item.id === itemShow)
            .map((item) => (
              <div key={item.id}>
                <div className="w-full text-sm py-8 text-white bg-secondary mb-8 px-14">
                  {item.text2 && (
                    <div className="mb-8">
                      <TextHTML content={lan === "es" ? item.text2 : lan === "en" ? item.text2_eng : item.text2_eng} />
                    </div>
                  )}
                  <div>
                    <TextHTML content={lan === "es" ? item.text : lan === "en" ? item.text_eng : item.text_eng} />
                  </div>
                </div>
                <div className="px-14 pb-8">
                  {filteredGallery &&
                    filteredGallery.map((item) => (
                      <div key={item.id} className="mb-8">
                        <ImageComponent src={item.image} alt="" />
                        {item.text && (
                          <div className="text-sm mt-4 ">
                            <TextHTML content={lan === "es" ? item.text : lan === "en" ? item.text_eng : item.text_eng} />
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
      </section>

      {currentImage && <Modal currentImage={currentImage} setCurrentImage={setCurrentImage} handelNext={handelNext} handelPrev={handelPrev} title={imageTitle} />}
    </Layout>
  );
};

export default Imagenes;
