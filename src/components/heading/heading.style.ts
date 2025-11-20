import { Box, styled } from '@mui/material';

export const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',

  h3: {
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    lineHeight: theme.spacing(4.5),
  },

  h4: {
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
    position: 'relative',
    top: theme.spacing(-2.5),
    lineHeight: theme.spacing(4.5),
  },
}));
