type PurchaseNowProps = {
    placeholder?: string;
    onClick?: (e: React.MouseEvent) => void;
  };
  
  function PurchaseNow({ placeholder, onClick }: PurchaseNowProps) {
    return (
      <button className="bg-[#D21706] text-white py-3 px-4 rounded w-full font-bold" onClick={onClick}>
        {placeholder}
      </button>
    );
  }
  
  export {PurchaseNow };
  