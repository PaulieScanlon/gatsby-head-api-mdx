import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import Seo from '../components/seo';

const Page = ({
  data: {
    mdx: {
      frontmatter: { title },
      body
    }
  }
}) => {
  return (
    <Fragment>
      <Link to="/">Back</Link>
      <main>
        <h1>{title}</h1>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </main>
    </Fragment>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default Page;

export const Head = ({
  data: {
    mdx: {
      frontmatter: { title }
    },
    site: {
      siteMetadata: { description }
    }
  }
}) => {
  console.log(description);

  return <Seo title={title} description={description} />;
};
