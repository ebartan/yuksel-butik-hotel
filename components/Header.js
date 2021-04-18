import Image from 'next/image'
import Link from "next/link";
import { GiWineBottle } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";

import { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className=" bg-gray-300">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8">
        <div className="flex items-center">
       <Image
        src="/yukselfinal1.png"
        alt="Picture of the author"
        width={75}
        height={75}
      />
          <Link href="/">
            <a className="text-2xl font-semibold text-indigo-900 ml-1">Yüksel Butik Hotel</a>
          </Link>
         
        </div>
        
        <button
          className="flex items-center block px-3 py-2 ml-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: "Home", route: "/" },
            
            { title: "Odalar", route: "/odalar" },
            { title: "Galeri", route: "/galeri" },
            { title: "Olanaklar", route: "/olanaklar" },
            { title: "İletişim", route: "/iletisim" },
  
          ].map((navigationItem) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-black text-3xl font-bold text-opacity-75  mt-0 hover:underline hover:text-opacity-100 ">{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;