import { useState } from "react";
import { useDataContext } from "../../context/language";
import BeatLoader from "react-spinners/BeatLoader";
import Layout from "../../components/Layout";
import useFetch from "../../hooks/useFetch";
import TextHTML from "../../hooks/useHTML";

const palabras = () => {
  const { lan } = useDataContext();
  const [category, setCategory] = useState(3);
  const { data, loading } = useFetch(`/palabras`);
  let filteredData = [];

  const menuItems = [
    {
      id: 1,
      title: "Poemas",
      title_eng: "Poems",
      title_pr: "Poems",
      category: 3,
    },
    {
      id: 1,
      title: "Textos sueltos",
      title_eng: "Loose texts",
      title_pr: "Loose texts",
      category: 4,
    },
    {
      id: 1,
      title: "Ideas",
      title_eng: "Ideas",
      title_pr: "Ideas",
      category: 5,
    },
  ];

  const filterData = (data) => {
    return data.filter((item) => {
      return item.type == category;
    });
  };
  if (data) {
    filteredData = filterData(data);
  }
  const handleFilter = (category) => {
    setCategory(category);
  };

  return (
    <Layout>
      <div className="fixed w-full top-24 z-40 lg:flex px-14 bg-white pb-4">
        <div className="header-col-1"> </div>
        <div className="header-col-2">
          <ul className="submenu flex text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button className={`hover:opacity-70 ${item.category === category && "text-secondary"}`} onClick={() => handleFilter(item.category)}>
                  {lan === "es" ? item.title : lan === "en" ? item.title_eng : item.title_pr}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="lg:flex mt-40 px-14">
        <div className="header-col-1"></div>
        <div className="header-col-2 w-96">
          <div className="list w-full max-w-xl">
            {loading ? (
              <BeatLoader />
            ) : (
              filteredData &&
              filteredData.map((item, index) => (
                <div key={index} className="mb-8 border-b pb-8">
                  <h1 className="text-xl font-tertiary font-bold mb-4 text-secondary">{lan === "es" ? item.title : lan === "en" ? item.title_eng : item.title_eng}</h1>
                  <div className="text-justify font-tertiary">
                    <TextHTML content={lan === "es" ? item.text : lan === "en" ? item.text_eng : item.text_eng} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default palabras;
