import { AppBar, Box, Drawer, List, styled, Toolbar } from '@mui/material';

export const DrawerBox = styled(Box)(() => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: 300,
  },
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(4),
}));

export const NavAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  position: 'inherit',
}));

export const CustomToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const DeskTopLogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const CustomList = styled(List)(({ theme }) => ({
  display: 'flex',
  a: {
    textDecoration: 'none',
    color: theme.palette.common.black,
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
