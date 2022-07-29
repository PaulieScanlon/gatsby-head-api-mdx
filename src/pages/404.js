import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import Seo from '../components/seo';

const Page = () => {
  return (
    <Fragment>
      <Seo title="Page Not Found" />
      <main>
        <h1>Page Not Found</h1>
        <Link to="/">Back</Link>
      </main>
    </Fragment>
  );
};

export default Page;
