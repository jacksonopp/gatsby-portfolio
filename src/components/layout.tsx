import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { navLink } from './layout.module.css';

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <nav className='w-screen bg-purple-400 py-2 px-3 mb-2 flex justify-between'>
        <header className="">{data.site.siteMetadata.title}</header>
        <ul className='flex gap-4'>
          <li>
            <Link to='/' className={navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className={navLink}>
              About
            </Link>
          </li>
          <li>
            <Link to='/blog' className={navLink}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main className='mx-auto max-w-lg'>
        <h1 className='text-purple-500 text-5xl'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
