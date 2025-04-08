import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

type BackProps = {
    placeholder?: string;
    ref?: Url;

};


function Back({ placeholder,ref }: BackProps) {
  return (
    <Link
      href={ref || '/'}
      className="text-black font-[Inter] text-base font-bold"
    >
      {placeholder}
      
    </Link>
  );
}

export {Back}