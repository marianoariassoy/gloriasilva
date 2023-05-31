import Nav from "../../components/Nav";
import Lan from "./Lan";
import Slider from "./Slider";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GLORIA SILVA PHOTO</title>
        <meta property="og:title" content="GLORIA SILVA PHOTO" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="http://gloriasilvaphoto.com/" />
        <link rel="canonical" href="http://gloriasilvaphoto.com/" />
      </Helmet>

      <main className="h-scren w-screen">
        <div className="absolute px-14 py-8 z-30 fade-in">
          <Lan />
        </div>
        <div className="fixed top-1/2 z-20 fade-in lg:flex items-end px-14">
          <div className="header-col-1">
            <h1 className="text-white font-secondary text-4xl">GLORIA SILVA</h1>
          </div>
          <div className="nav-home header-col-2">
            <Nav showAlways="true" />
          </div>
        </div>
        <div className="fixed w-full h-full z-10">
          <Slider />
        </div>
      </main>
    </>
  );
};

export default Home;
