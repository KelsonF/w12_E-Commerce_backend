type AddToCartProps = {
    placeholder?: string;
  };
  
  function AddToCart({ placeholder }: AddToCartProps) {
    return (
      <button className="bg-[#D21706] text-white px-1.5 py-1.5 rounded ">
        {placeholder}
      </button>
    );
  }
  
  export { AddToCart };
  