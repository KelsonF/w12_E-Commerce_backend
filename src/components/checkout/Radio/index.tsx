type RadioButtonProps = {
    id: string
    label: string;
    checked?: boolean;
    onChange?: () => void;
  };
  
  function RadioButton({ id, label, checked, onChange }: RadioButtonProps) {
    return (
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          checked={checked}
          onChange={onChange}
          className="appearance-none w-3 h-3 border-2 border-[#D21706] rounded-full checked:bg-red-600 checked:ring-2 checked:ring-[#D21706] checked:ring-offset-2 transition-all duration-150"
        />
        <span className="text-[#111827] pl-4 text-xl font-[Inter]">{label}</span>
      </label>
    );
  }
  
  export { RadioButton };
  