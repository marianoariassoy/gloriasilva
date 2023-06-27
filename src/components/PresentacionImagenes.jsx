import useFetch from "../hooks/useFetch";
import TextHTML from "../hooks/useHTML";
import { useDataContext } from "../context/language";

const PresentacionImagenes = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/presentaciones`);

  if (loading) return null;
  if (!data) return null;

  return (
    <section className="mt-48 p-8 lg:mt-40 lg:p-14 presentation">
      <div className="lg:flex">
        <div className="header-col-1"></div>
        <div className="header-col-2 pb-8 text-sm max-w-3xl">
          <div className="text-left lg:text-right mb-8 italic">
            <TextHTML content={lan === "es" ? data[0].text2 : lan === "en" ? data[0].text2_eng : data[0].text2_por} />
          </div>
          <div className="text-justify">
            <TextHTML content={lan === "es" ? data[0].text : lan === "en" ? data[0].text_eng : data[0].text_por} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentacionImagenes;
