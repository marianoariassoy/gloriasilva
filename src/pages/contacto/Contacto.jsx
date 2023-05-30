import Layout from "../../components/Layout";
import Form from "./Form";

const Contacto = () => {
  return (
    <Layout>
      <section className="lg:flex mt-40 px-14">
        <div className="header-col-1"> </div>
        <div className="header-col-2">
          <div className="w-full max-w-xl">
            <Form />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
