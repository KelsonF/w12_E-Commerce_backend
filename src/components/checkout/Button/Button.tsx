type ButtonProps = {
  placeholder?: string;
};

function Button({ placeholder }: ButtonProps) {
  return (
    <button className="bg-[#D21706] text-white py-3 px-4 rounded w-full">
      {placeholder}
    </button>
  );
}

export { Button };
