import { useDataContext } from "../../context/language";
import Layout from "../../components/Layout";
import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import TextHTML from "../../hooks/useHTML";

const biografia = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/bio`);

  return (
    <Layout>
      <section className="mt-40 px-14">
        {loading
          ? ""
          : data.map((item, index) => (
              <div className="lg:flex w-full pb-12" key={index}>
                <div className="header-col-1 pb-8 lg:pb-0 lg:pr-20">
                  <ImageComponent src={item.image} alt={item.title} />
                </div>
                <div className="header-col-2">
                  <div className="w-full max-w-xl">
                    {item.title && <h1 className="text-xl font-tertiary font-bold mb-4 text-secondary">{lan === "es" ? item.title : lan === "en" ? item.title_eng : item.title_eng}</h1>}

                    <div className="text-justify font-tertiary">
                      <TextHTML content={lan === "es" ? item.text : lan === "en" ? item.text_eng : item.text_eng} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </section>
    </Layout>
  );
};

export default biografia;
