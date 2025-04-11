type PurchaseButtonProps = {
    placeholder?: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  
  function PurchaseButton({ placeholder, onClick }: PurchaseButtonProps) {
    return (
      <button className="bg-[#D21706] text-white px-6 py-1.5 rounded" onClick={onClick}>
        {placeholder}
      </button>
    );
  }
  
  export { PurchaseButton };
  