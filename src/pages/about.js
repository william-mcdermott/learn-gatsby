import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => (
  <Layout>
    <Head title="About"/>
    <h1>About</h1>
    <p>My name is William and I live in Austin, TX. <Link to="/contact">Contact me</Link> to say hi!</p>
  </Layout>
);

export default AboutPage;
