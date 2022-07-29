import React from 'react';
import PropTypes from 'prop-types';

const Seo = ({ title }) => {
  return <title>{title}</title>;
};

Seo.propTypes = {
  /** The HTML title */
  title: PropTypes.string.isRequired
};

export default Seo;
