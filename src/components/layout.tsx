import { Link } from 'gatsby';
import React from 'react';

interface Props {
  pageTitle: string;
}

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </>
  );
};

export default Layout;
