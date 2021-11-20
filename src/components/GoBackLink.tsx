import { navigate } from 'gatsby-link';
import React from 'react';

const GoBackLink: React.FC = ({ children }) => {
  return <a onClick={() => navigate(-1)} className="link">{children}</a>;
};

export default GoBackLink;
