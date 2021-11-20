import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';

interface Props {}

const AboutPage = (props: Props) => {
  return (
    <Layout pageTitle='About Me'>
      <p>This is the about page yo!</p>
      <figure>
        <StaticImage alt='abstract art' src='../images/ai.png' />
        <figcaption>This makes me sad</figcaption>
      </figure>
    </Layout>
  );
};

export default AboutPage;
