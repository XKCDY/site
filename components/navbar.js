import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const pages = [
  {name: 'Home', path: '/'},
  {name: 'Support', path: '/support'},
  {name: 'Privacy', path: '/privacy'}
];

const Navbar = () => {
  const router = useRouter();

  return (
    <navbar className="w-screen flex mt-4">
      {pages.map(page => (
        <Link key={page.path} href={page.path}>
          <a className={`mx-4 text-xl ${router.pathname === page.path ? 'font-bold' : ''} hover:text-gray-500`}>{page.name}</a>
        </Link>
      ))}
    </navbar>
  );
};

export default Navbar;
