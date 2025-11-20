import { List, ListItem, styled, Box } from '@mui/material';

import BGImage from 'assets/images/common/footer-bg.png';

export const CustomList = styled(List)(({ theme }) => ({
  padding: theme.spacing(0),
  a: {
    textDecoration: 'none',
    color: theme.palette.common.white,
    fontSize: theme.typography.subtitle2.fontSize,
  },

  p: {
    fontSize: theme.typography.subtitle2.fontSize,
  },
}));

export const FooterMenu = styled(Box)({
  marginTop: '36px',
});

export const FooterBg = styled(Box)(({ theme }) => ({
  background: `url(${BGImage.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: theme.palette.common.black,
  color: theme.palette.getContrastText(theme.palette.common.black),
}));

export const FooterMenuListItem = styled(ListItem)(({ theme }) => ({
  a: {
    padding: theme.spacing(0),
  },
}));
