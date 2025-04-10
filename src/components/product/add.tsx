type AddProps = {
    placeholder?: string;
  };
  
  function Add({ placeholder }: AddProps) {
    return (
        <button className="bg-white text-[#D21706] py-3 px-4 border-4 border-[#D21706] text-center rounded w-full font-bold">
        {placeholder}
      </button>
      
    );
  }
  
  export {Add };
  