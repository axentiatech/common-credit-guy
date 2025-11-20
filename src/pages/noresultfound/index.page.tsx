import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import MyAccount from 'assets/Images/common/my-account.png';
import { Spacing, SpacingEnum, Typography, Container } from 'components';
import { AuthContentWrapper } from 'styles';

const Layout = dynamic(() => import('../../layout'));

/**
 * @page {NoResultFound} - This page is used for No Result Found.
 * @return {JSX.Element}
 */
const NoResultFound = (): JSX.Element => (
  <AuthContentWrapper>
    <Container maxWidth="lg">
      <Image alt="my-account" src={MyAccount} />
      <Spacing
        spacing={3}
        variant={SpacingEnum.VERTICAL}
        sx={{ textAlign: 'center' }}
      >
        <Typography variant="h4" color="primary">
          No Results Found
        </Typography>
        <Spacing spacing={1} variant={SpacingEnum.TOP} />
        <Typography variant="body1">
          T is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its.
        </Typography>
      </Spacing>
    </Container>
  </AuthContentWrapper>
);

NoResultFound.getLayout = (page: JSX.Element) => (
  <Layout title="No Result Found">{page}</Layout>
);

export default NoResultFound;
