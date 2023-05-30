import { useDataContext } from "../context/language";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    title: "IMÁGENES",
    title_eng: "IMAGES",
    title_pr: "IMAGENS",
    url: "/imagenes",
  },
  {
    id: 2,
    title: "PALABRAS",
    title_eng: "WORDS",
    title_pr: "PALAVRAS",
    url: "/palabras",
  },
  {
    id: 3,
    title: "BIOGRAFÍA",
    title_eng: "BIOGRAPHY",
    title_pr: "BIOGRAFIA",
    url: "/biografia",
  },
  {
    id: 4,
    title: "CONTACTO",
    title_eng: "CONTACT",
    title_pr: "CONTACTO",
    url: "/contacto",
  },
];

const Nav = ({ showAlways }) => {
  const { lan } = useDataContext();

  return (
    <nav className={`${showAlways === "true" ? "" : "hidden lg:block"}`}>
      <ul className="font-secondary mt-8 lg:mt-0 flex gap-8 lg:gap-20 flex-wrap items-start">
        {menuItems.map((item) => (
          <li key={item.id}>
            <NavLink to={item.url} className="hover:opacity-70">
              {lan === "es" ? item.title : lan === "en" ? item.title_eng : item.title_pr}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
