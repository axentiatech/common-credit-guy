import React from 'react';
import dynamic from 'next/dynamic';

import { List, ListItem, Typography, Container } from 'components';
import { ITemsOfService, TemsOfService, TemsOfServiceContent } from 'json';
import { StringHelper } from 'helper';
import { AuthContentWrapper } from 'styles';

const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {TermsOfService} - This page is used for showing terms of service.
 * @return {JSX.Element}
 */
const TermsOfService = (): JSX.Element => (
  <AuthContentWrapper>
    <Container maxWidth="lg">
      <Heading title="Terms Of Service" subTitle="Terms Of Service" />
      {TemsOfServiceContent.map((data: string, index: number) => (
        <List key={StringHelper.generateUID(data, index)}>
          <ListItem>
            <Typography>{data}</Typography>
          </ListItem>
        </List>
      ))}
      {TemsOfService.map((data: ITemsOfService, index: number) => (
        <List key={StringHelper.generateUID(data.title, index)}>
          <Typography variant="h6">{data.title}</Typography>

          {data.subTitle.map((subTitleData: string, i: number) => (
            <ListItem key={StringHelper.generateUID(subTitleData, i)}>
              <Typography>{subTitleData}</Typography>
            </ListItem>
          ))}
        </List>
      ))}
    </Container>
  </AuthContentWrapper>
);

TermsOfService.getLayout = (page: JSX.Element) => (
  <Layout title="Terms Of Service">{page}</Layout>
);

export default TermsOfService;
