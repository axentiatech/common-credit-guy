import { Box, Button, styled } from '@mui/material';

export const LinkWrapper = styled('span')(({ theme }) => ({
  a: {
    textDecoration: 'none',
    color: theme.palette.primary.main,

    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
}));

export const AuthContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  postion: 'relative',
  padding: theme.spacing(5, 0, 21),
}));

export const LoginCard = styled(Box)(({ theme }) => ({
  width: '500px',
  display: 'inline-block',
  marginLeft: 'calc(100vh - 580px)',
  marginTop: theme.spacing(8),
}));

export const CustomButtonBox = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(0.62, 0, 0.62, 0),
  textTransform: 'capitalize',
  padding: theme.spacing(1.3, 5),
}));
