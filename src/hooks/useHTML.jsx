const TextHTML = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default TextHTML;
