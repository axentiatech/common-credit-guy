import { Box, styled } from '@mui/material';

export const LoginFooter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
});

export const ImageBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  position: 'absolute',
  right: '0',
}));
