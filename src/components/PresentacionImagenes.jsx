import useFetch from "../hooks/useFetch";
import TextHTML from "../hooks/useHTML";
import { useDataContext } from "../context/language";
import BeatLoader from "react-spinners/BeatLoader";

const PresentacionImagenes = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/presentaciones`);

  if (loading) return <BeatLoader />;

  return (
    <section className="mt-48 p-8 lg:mt-40 lg:p-14 presentation">
      <div className="lg:flex text-secondary text-sm">
        <div className="header-col-1"></div>
        <div className="header-col-2 pb-8 max-w-3xl">
          <div className="text-left lg:text-right mb-8 italic text-xsm">
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
