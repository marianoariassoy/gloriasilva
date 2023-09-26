import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/language";

const palabras = () => {
  const { lan } = useDataContext();

  return (
    <Layout>
      <Helmet>
        <title>GLORIA SILVA &bull; PALABRAS</title>
      </Helmet>

      <section className="px-14 mt-32 text-primary">
        {lan === "es"
          ? "Próximamente"
          : lan === "en"
          ? "Coming soon"
          : "Em breve"}
      </section>
    </Layout>
  );
};

export default palabras;
