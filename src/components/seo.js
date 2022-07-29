import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

Seo.propTypes = {
  /** The HTML title */
  title: PropTypes.string.isRequired
};

export default Seo;
