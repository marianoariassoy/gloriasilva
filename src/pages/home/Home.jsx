import Nav from "../../components/Nav";
import Lan from "./Lan";
import Slider from "./Slider";

const Home = () => {
  return (
    <main className="h-scren w-screen">
      <div className="absolute p-8 z-30 fade-in">
        <Lan />
      </div>

      <div className="absolute z-20 p-20 right-0 nav-home fade-in">
        <Nav />
      </div>

      <div className="fixed left-28 top-1/2 z-20 fade-in">
        <h1 className="text-white font-secondary text-4xl">GLORIA SILVA</h1>
      </div>

      <div className="fixed w-full h-full z-10">
        <Slider />
      </div>
    </main>
  );
};

export default Home;
