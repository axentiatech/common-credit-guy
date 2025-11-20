import { Box, styled } from '@mui/material';

export const BlogCardBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  textShadow: `-24px -24px 0px ${theme.palette.text.secondary}`,
  position: 'relative',
}));

export const CardButton = styled(Box)(({ theme }) => ({
  a: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));
