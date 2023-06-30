import useFetch from "../hooks/useFetch";
import TextHTML from "../hooks/useHTML";
import { useDataContext } from "../context/language";

const PresentacionPalabras = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/presentaciones`);

  if (loading) return null;
  if (!data) return null;

  return (
    <section className="p-8 lg:p-14 presentation">
      <div className="lg:flex text-secondary text-sm">
        <div className="header-col-1"></div>
        <div className="header-col-2 pb-8 max-w-3xl">
          <div className="text-left lg:text-right mb-8 italic">
            <TextHTML content={lan === "es" ? data[1].text2 : lan === "en" ? data[1].text2_eng : data[1].text2_por} />
          </div>
          <div className="text-justify">
            <TextHTML content={lan === "es" ? data[1].text : lan === "en" ? data[1].text_eng : data[1].text_por} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentacionPalabras;
