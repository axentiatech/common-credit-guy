import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Box, Spacing, SpacingEnum, Typography } from 'components';
import Tringle from 'components/tringle';

interface IProps
  extends Readonly<{
    iconName: IconProp;
    title: string;
  }> {}

/**
 * @component {DocHeading} -This is for heading.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const DocHeading = (props: IProps): JSX.Element => {
  const { title, iconName } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <Tringle iconName={iconName} />
      <Spacing variant={SpacingEnum.LEFT} spacing={2} />
      <Box>
        <Typography color="primary" variant="h6">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default DocHeading;
