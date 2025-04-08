type PurchaseNowProps = {
    placeholder?: string;
  };
  
  function PurchaseNow({ placeholder }: PurchaseNowProps) {
    return (
      <button className="bg-[#D21706] text-white py-3 px-4 rounded w-full font-bold">
        {placeholder}
      </button>
    );
  }
  
  export {PurchaseNow };
  