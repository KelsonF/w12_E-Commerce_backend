import Image from "next/image";
import CartIcon from "../../../../public/cart.svg";
import MenuIcon from "../../../../public/menu.svg";

function Navbar() {
  return (
    <nav className="w-full h-[4.5rem] flex justify-between items-center px-[1rem] border-b border-gray-300">
      <h1 className="text-red-600 text-xl font-bold">Code Store</h1>
      <section className="flex items-center gap-4">
        <Image src={CartIcon} alt="Cart" className="relative" />
        <Image src={MenuIcon} alt="Menu" />
      </section>
    </nav>
  );
}

export { Navbar };
