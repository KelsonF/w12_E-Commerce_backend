type ImgProps = {
    placeholder?: string;
  };
  
  function Img({ placeholder }: ImgProps) {
    return (
      <img src={placeholder} alt={placeholder} className="w-36 h-36 object-cover" />
    );
  }
  
  export { Img };
  