import { Product } from "@/domain/models/Product";

type AddToCartProps = {
  placeholder?: string;
  onClick: (e: React.MouseEvent, product: Product) => void;
  product: Product;
};

function AddToCart({ placeholder, onClick, product }: AddToCartProps) {
  return (
    <button
      className="bg-[#D21706] text-white px-1.5 py-1.5 rounded"
      onClick={(e) => onClick(e, product)}
    >
      {placeholder}
    </button>
  );
}

export { AddToCart };
