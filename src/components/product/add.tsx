type AddProps = {
    placeholder?: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  
  function Add({ placeholder ,onClick }: AddProps) {
    return (
        <button className="bg-white text-[#D21706] py-3 px-4 border-4 border-[#D21706] text-center rounded w-full font-bold" onClick={onClick}>
        {placeholder}
      </button>
      
    );
  }
  
  export {Add };
  