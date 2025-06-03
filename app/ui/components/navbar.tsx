import Link from 'next/link';

function NavBar({ links }:{links:{links:string,text:string}[]}) {
  return (
    <nav className="bg-[#101010] text-white flex justify-between items-center p-4">
      <ul className="flex items-center space-x-8">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.links}>
              <a className="text-[16px] font-medium hover:text-gray-300 transition duration-300">
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;