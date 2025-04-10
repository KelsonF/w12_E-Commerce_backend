import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

type LinkButtonProps = {
    placeholder?: string;
    ref?: Url;

};


function LinkButton({ placeholder,ref }: LinkButtonProps) {
  return (
    <Link
    href={ref || '/'}
    className="flex justify-center items-center bg-white text-[#D21706] py-3 px-4 border-4 border-[#D21706] rounded w-full font-bold"
    >
    {placeholder}
    </Link>

  );
}

export {LinkButton}