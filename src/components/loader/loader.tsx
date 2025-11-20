import React from 'react';

import { Typography } from 'components';

import { LoaderContainer } from './loaderStyle';

/**
 * @component {Loader} - This is Loader.
 * @return {JSX.Element}
 */
function Loader(): JSX.Element {
  return (
    <LoaderContainer maxWidth="sm">
      <Typography variant="h3" fontWeight={700}>
        Loading...
      </Typography>
    </LoaderContainer>
  );
}

export default Loader;
