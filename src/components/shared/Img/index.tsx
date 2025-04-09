import Image, { StaticImageData } from 'next/image';

type ImgProps = {
  source: string | StaticImageData;
  placeholder?: string;
  w?: number;
  h?: number;
};

function Img({ source, placeholder, w, h}: ImgProps) {
  return (
    <Image
      src={source}
      alt={placeholder || 'Image'}
      width={w}
      height={h}
      style={{ height: `${h}px` }}
      className="object-cover h-[`${h}`]"
    />
  );
}

export { Img };
