type PurchaseButtonProps = {
    placeholder?: string;
  };
  
  function PurchaseButton({ placeholder }: PurchaseButtonProps) {
    return (
      <button className="bg-[#D21706] text-white px-6 py-1.5 rounded">
        {placeholder}
      </button>
    );
  }
  
  export { PurchaseButton };
  