import React, { Fragment } from 'react';
import spinner from './spin.svg';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '60px', margin: 'auto', display: 'block', }}
      alt='Loading...'
    />
  </Fragment>
);