import { useDataContext } from "../../context/language";

const Lan = () => {
  const { lan, setLan } = useDataContext();

  return (
    <div className="text-white text-sm font-medium flex gap-4">
      <button className={`hover:opacity-70 cursor-pointer ${lan === "es" && "underline"}`} onClick={() => setLan("es")}>
        Español
      </button>
      <button className={`hover:opacity-70 cursor-pointer ${lan === "pr" && "underline"}`} onClick={() => setLan("pr")}>
        Portugues
      </button>
      <button className={`hover:opacity-70 cursor-pointer ${lan === "en" && "underline"}`} onClick={() => setLan("en")}>
        English
      </button>
    </div>
  );
};

export default Lan;
