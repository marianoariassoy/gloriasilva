import iconOpen from "../assets/icon-open.svg";

const MenuBar = () => {
  const open = () => {
    const menu = document.getElementById("menu-mobile");
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    menu.classList.add("fade-in");
  };

  return (
    <button className="block lg:hidden hover:opacity-70" onClick={open}>
      <img src={iconOpen} />
    </button>
  );
};

export default MenuBar;
