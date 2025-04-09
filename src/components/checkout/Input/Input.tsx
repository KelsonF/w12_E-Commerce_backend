type InputProps = {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  type = "text",
  placeholder,
  name,
  onChange,
  value,
}: InputProps) {
  return (
    <label htmlFor={placeholder} className="flex flex-col gap-1">
      <span className="text-gray-700 text-sm font-bold mb-2">
        {placeholder}
      </span>
      <input
        id={placeholder}
        type={type}
        className="w-full h-12 border border-gray-300 rounded-sm px-[1.1875rem] py-[0.9375rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export { Input };
