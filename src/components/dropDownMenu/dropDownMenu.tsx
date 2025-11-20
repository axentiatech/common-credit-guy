import React from 'react';
import { Fade } from '@mui/material';

import { IMyAccountMenu } from 'json';
import { StringHelper } from 'helper';
import { Box, Link, Menu, MenuItem } from 'components';

interface IProps
  extends Readonly<{
    anchorEl: HTMLElement | null;
    menu: IMyAccountMenu[];
    handleClose: () => void;
  }> {}

/**
 * @component {DropDownMenu} - This component is for DropDownMenu.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const DropDownMenu = (props: IProps): JSX.Element => {
  const { handleClose, menu, anchorEl } = props;

  return (
    <Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menu.map((data, index) => (
          <MenuItem
            onClick={handleClose}
            key={StringHelper.generateUID(data.text, index)}
          >
            <Link href={data.route}>{data.text}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default DropDownMenu;
