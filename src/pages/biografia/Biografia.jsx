import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/language";
import BeatLoader from "react-spinners/BeatLoader";
import Layout from "../../components/Layout";
import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import TextHTML from "../../hooks/useHTML";

const biografia = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { lan } = useDataContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading } = useFetch(`/bio`);

  return (
    <Layout>
      <Helmet>
        <title>GLORIA SILVA &bull; BIOGRAFIA</title>
        <meta property="og:title" content="GLORIA SILVA PHOTO" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="http://gloriasilvaphoto.com/biografia" />
        <link rel="canonical" href="http://gloriasilvaphoto.com/biografia" />
      </Helmet>

      <div className="fixed z-40 w-full top-16 px-14 bg-white pb-4 block lg:hidden">
        <div className="header-col-1"> </div>
        <div className="header-col-2">
          <div className=" mb-2 mt-2">
            <h1 className="font-bold"> {lan === "es" ? "Biografía" : lan === "en" ? "Biography" : "Biografia"}</h1>
          </div>
        </div>
      </div>

      <section className="mt-40 px-14">
        {loading ? (
          <BeatLoader />
        ) : (
          data.map((item, index) => (
            <div className="lg:flex w-full pb-12" key={index}>
              <div className="header-col-1 pb-8 lg:pb-0 lg:pr-20">
                <ImageComponent src={item.image} alt={item.title} />
              </div>
              <div className="header-col-2 text-sm text-secondary">
                <div className="w-full max-w-xl">
                  {item.title && <h1 className="text-xl font-bold mb-4 text-secondary">{lan === "es" ? item.title : lan === "en" ? item.title_eng : item.title_por}</h1>}
                  <div className="text-justify">
                    <TextHTML content={lan === "es" ? item.text : lan === "en" ? item.text_eng : item.text_por} />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </Layout>
  );
};

export default biografia;
