import Header from "./Header";
import NavMobile from "./NavMobile";

const Layout = ({ children }) => {
  return (
    <>
      <NavMobile />

      <header className="fixed top-0 z-30 bg-white w-full">
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
