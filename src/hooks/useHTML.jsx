const TextHTML = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};

export default TextHTML;
