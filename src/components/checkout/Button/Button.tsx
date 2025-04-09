type ButtonProps = {
  placeholder?: string;
  style: ButtonType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

const buttonStyles: Record<ButtonType, string> = {
  [ButtonType.PRIMARY]: "bg-[#D21706] text-white py-3 px-4 rounded w-full",
  [ButtonType.SECONDARY]: "bg-none text-black py-3 px-4 rounded w-full",
};

function Button({ placeholder, style, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={buttonStyles[style as ButtonType]}>
      {placeholder}
    </button>
  );
}

export { Button, ButtonType };
