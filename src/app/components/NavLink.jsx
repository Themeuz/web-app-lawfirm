import Link from "next/link";

const NavLink = ({ href, title, dropdown}) => {
    return (
        <Link
        href={href}
        className='block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-gray-600 mt-3'
        >
            {title}
            {dropdown}
        </Link>
    );
};

export default NavLink;