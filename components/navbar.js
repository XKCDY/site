import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const pages = [
  {name: 'Home', path: '/'},
  {name: 'Support', path: '/support'},
  {name: 'Privacy', path: '/privacy'},
  {name: 'Terms of Use', path: '/terms'}
];

const Navbar = () => {
  const router = useRouter();

  return (
    <navbar className="w-screen flex mt-4 px-4">
      {pages.map(page => (
        <Link key={page.path} href={page.path}>
          <a className={`mx-4 text-xl ${router.pathname === page.path ? 'text-blue-500' : ''} outline-none`}>{page.name}</a>
        </Link>
      ))}
    </navbar>
  );
};

export default Navbar;
