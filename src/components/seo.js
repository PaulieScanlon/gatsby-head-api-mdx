import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Seo = ({ title, description }) => {
  return (
    <Fragment>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </Fragment>
  );
};

Seo.propTypes = {
  /** The HTML title */
  title: PropTypes.string.isRequired,
  /** The HTML description */
  description: PropTypes.string
};

export default Seo;
