import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => (
  <Layout>
    <Head title="Home"/>
    <h1>Hello.</h1>
    <h2>I&#39;m William and I live in Austin</h2>
    <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
  </Layout>
);

export default IndexPage;
