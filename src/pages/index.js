import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import Seo from '../components/seo';

const Page = () => {
  return (
    <Fragment>
      <Seo title="Gatsby Head API MDX" />
      <main>
        <h1>Index</h1>
        <ul>
          <li>
            <Link to="/posts/this-is-post-one">Post One</Link>
          </li>
          <li>
            <Link to="/posts/this-is-post-two">Post Two</Link>
          </li>
          <li>
            <Link to="/posts/this-is-post-three">Post Three</Link>
          </li>
          <li>
            <Link to="/posts/this-is-post-four">Post Four</Link>
          </li>
        </ul>
      </main>
    </Fragment>
  );
};

export default Page;
