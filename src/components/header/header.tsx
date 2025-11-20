import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Container, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DropDownMenu from 'components/dropDownMenu';
import Icon from 'components/icon';
import { IQuickMenu, MyAccountMenu, quickMenu } from 'json';
import { StringHelper } from 'helper';
import CommonCreditLogo from 'assets/images/common/common-credit-logo.png';
import {
  Box,
  Link,
  MenuIcon,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from 'components';

import {
  DrawerBox,
  HeaderBox,
  CustomToolbar,
  DeskTopLogoBox,
  CustomDrawer,
  CustomList,
  NavAppBar,
} from './header.style';
import { useHeaderController } from './header.controller';

/**
 * @component {Header} - This component is using for Header.
 * @return {JSX.Element}
 */
const Header = (): JSX.Element => {
  const { getters, handlers } = useHeaderController();
  const { mobileOpen, anchorEl } = getters;
  const { handleClick, handleClose, handleDrawerToggle } = handlers;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {quickMenu.map((data: IQuickMenu, index: number) => (
          <ListItem
            disablePadding
            key={StringHelper.generateUID(data.text, index)}
          >
            <ListItemButton>
              <ListItemText primary={data.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button variant="contained" startIcon={<Icon icon={faUser} />}>
          My Account
        </Button>
      </List>
    </Box>
  );

  return (
    <HeaderBox>
      <Container maxWidth="lg">
        <NavAppBar>
          <CustomToolbar>
            <DeskTopLogoBox>
              <Image
                alt="Common-Credit-Logo"
                src={CommonCreditLogo}
                width="177"
                height="52"
              />
            </DeskTopLogoBox>
            <CustomList>
              {quickMenu.map((data: IQuickMenu, index: number) => (
                <ListItem key={StringHelper.generateUID(data.text, index)}>
                  <Link href={data.route}>{data.text}</Link>
                </ListItem>
              ))}
              <ListItem>
                <Button
                  variant="contained"
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  sx={{ whiteSpace: 'nowrap' }}
                  onClick={handleClick}
                >
                  My Account
                </Button>
              </ListItem>
            </CustomList>
            {/* This IconButton is Visible in Mobile View */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </CustomToolbar>
        </NavAppBar>
      </Container>
      {/* This is For Mobile View */}
      <DrawerBox component="nav">
        <CustomDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </CustomDrawer>
      </DrawerBox>
      <Toolbar />
      <DropDownMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        menu={MyAccountMenu}
      />
    </HeaderBox>
  );
};

export default Header;
