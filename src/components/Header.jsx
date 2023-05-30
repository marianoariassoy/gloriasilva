import MenuBar from "./MenuBar";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:flex w-full justify-between items-end py-10 px-14">
      <div className="header-col-1 flex justify-between items-center">
        <Link to="/">
          <h1 className="font-secondary text-2xl">GLORIA SILVA</h1>
        </Link>
        <MenuBar />
      </div>
      <div className="header-col-2">
        <Nav showAlways="false" />
      </div>
    </div>
  );
};

export default Header;
