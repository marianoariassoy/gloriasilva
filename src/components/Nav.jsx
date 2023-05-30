import { useDataContext } from "../context/language";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    title: "IMÁGENES",
    title_eng: "IMAGES",
    title_pr: "IMAGES",
    url: "/imagenes",
  },
  {
    id: 2,
    title: "PALABRAS",
    title_eng: "WORDS",
    title_pr: "WORDS",
    url: "/palabras",
  },
  {
    id: 3,
    title: "BIOGRAFÍA",
    title_eng: "BIO",
    title_pr: "BIO",
    url: "/biografia",
  },
  {
    id: 4,
    title: "CONTACTO",
    title_eng: "CONTACT",
    title_pr: "CONTACT",
    url: "/contacto",
  },
];

const Nav = () => {
  const { lan } = useDataContext();

  return (
    <>
      <nav>
        <ul className="font-secondary flex gap-20">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.url} className="hover:opacity-70">
                {lan === "es" ? item.title : lan === "en" ? item.title_eng : item.title_pr}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
