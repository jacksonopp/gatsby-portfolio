import { Link } from 'gatsby';
import React from 'react';
import { navLink } from './layout.module.css';

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav className='w-screen bg-purple-400 py-2 mb-2'>
        <ul className='flex gap-4 justify-center'>
          <li>
            <Link to='/' className={navLink}>Home</Link>
          </li>
          <li>
            <Link to='/about' className={navLink}>About</Link>
          </li>
        </ul>
      </nav>
      <main className='mx-auto max-w-lg'>
        <h1 className="text-purple-500 text-5xl">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
