import { Helmet } from "react-helmet";
import Nav from "../../components/Nav";
import Lan from "./Lan";
import Slider from "./Slider";
import NavMobile from "../../components/NavMobile";

const Home = () => {
  const open = () => {
    const menu = document.getElementById("menu-mobile");
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    menu.classList.add("fade-in");
  };

  return (
    <>
      <Helmet>
        <title>GLORIA SILVA PHOTO</title>
        <meta property="og:title" content="GLORIA SILVA PHOTO" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="http://gloriasilvaphoto.com/" />
        <link rel="canonical" href="http://gloriasilvaphoto.com/" />
      </Helmet>

      <NavMobile />

      <main className="h-scren w-screen">
        <div className="absolute px-14 py-8 z-30 fade-in">
          <Lan />
        </div>

        <div className="fixed top-1/2 z-20 fade-in items-end px-14 hidden lg:flex">
          <div className="header-col-1">
            <h1 className="text-white font-secondary text-4xl ">GLORIA SILVA</h1>
          </div>
          <div className="nav-home header-col-2">
            <Nav />
          </div>
        </div>

        <div className="fixed top-0 h-screen w-full z-20 fade-in flex items-center justify-center px-14 lg:hidden ">
          <button className="hover:opacity-70" onClick={open}>
            <h1 className="text-white font-secondary text-3xl ">GLORIA SILVA</h1>
          </button>
        </div>

        <div className="fixed w-full h-full z-10">
          <Slider />
        </div>
      </main>
    </>
  );
};

export default Home;
