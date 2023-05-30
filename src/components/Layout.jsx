import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <header className="fixed top-0 z-40 bg-white w-full">
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
