import { Box, styled } from '@mui/material';

export const ForgotContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  postion: 'relative',
  padding: theme.spacing(5, 0, 45),
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  position: 'absolute',
  right: '0',
}));
