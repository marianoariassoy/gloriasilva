const MenuBar = () => {
  const OpenMenu = () => {
    document.querySelector("nav").classList.toggle("show-nav");
    document.querySelector("#nav-menu").classList.toggle("active");
  };

  return (
    <div id="nav-menu" className="menu-main" onClick={OpenMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuBar;
