import React from 'react';

import { Box, Typography } from 'components';

interface IProps
  extends Readonly<{
    title: string;
    subTitle: string;
  }> {}

/**
 * @component {DocMultiLineText} - This is for Title and SubTilte.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const DocMultiLineText = (props: IProps): JSX.Element => {
  const { title, subTitle } = props;

  return (
    <Box>
      <Typography color="primary" variant="h6">
        {title}
      </Typography>
      <Typography color="primary">{subTitle}</Typography>
    </Box>
  );
};

export default DocMultiLineText;
