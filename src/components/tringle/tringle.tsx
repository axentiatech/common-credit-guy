import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Box } from 'components';
import Icon from 'components/icon';

interface IProps
  extends Readonly<{
    iconName: IconProp;
  }> {}

/**
 * @component {Tringle} - This component is useing for Trigle Icon.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const Tringle = (props: IProps): JSX.Element => {
  const { iconName } = props;

  return (
    <Box>
      <Icon icon={iconName} disableButton />
    </Box>
  );
};

export default Tringle;
