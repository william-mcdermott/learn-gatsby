import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = (props) => {
  const renderImage = (node) => {
    const alt = node.data.target.fields.title['en-US'];
    const { url } = node.data.target.fields.file['en-US'];
    return <img alt={alt} src={url}/>;
  };
  const options = {
    renderNode: {
      'embedded-asset-block': renderImage
    }
  };
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.shape({
      title: PropTypes.string,
      publishedDate: PropTypes.string,
      body: PropTypes.shape({
        json: PropTypes.json
      })
    })
  })
};

export default Blog;
