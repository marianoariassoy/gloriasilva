import { useEffect, useState } from "react";
import { useDataContext } from "../context/language";
import BeatLoader from "react-spinners/BeatLoader";

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { imageURL } = useDataContext();

  useEffect(() => {
    const image = new Image();
    image.src = imageURL + src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return <div className="flex items-center  w-full">{isLoading ? <BeatLoader /> : <img src={imageURL + src} alt={alt} className="fade-in w-full " />}</div>;
};

export default ImageComponent;
