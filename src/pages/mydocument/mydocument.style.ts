import { Box, styled } from '@mui/material';

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  postion: 'relative',
  padding: theme.spacing(5, 0, 21),
}));

export const ContentInnerWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const ContentCard = styled(Box)(({ theme }) => ({
  width: '590px',
  display: 'inline-block',
  marginTop: theme.spacing(8),
}));

export const ImageBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'inherit',
});
