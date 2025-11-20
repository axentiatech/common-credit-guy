import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Document from 'assets/Images/pages/document/documents.png';
import { Spacing, SpacingEnum, Container } from 'components';

import {
  ContentWrapper,
  ContentInnerWrapper,
  ContentCard,
  ImageBox,
} from './mydocument.style';

const DocMultiLineText = dynamic(() => import('./component/docMultlineText'));
const DocHeading = dynamic(() => import('./component/docHeading'));
const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {MyDocument} - This page is used for user document.
 * @return {JSX.Element}
 */
const MyDocument = (): JSX.Element => (
  <ContentWrapper>
    <Container maxWidth="lg">
      <Heading title="My Documents" subTitle="My Documents" />
      <ContentInnerWrapper>
        <ContentCard>
          <DocHeading iconName={faUser} title="In progress" />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
          <DocMultiLineText
            title="Debt Answer"
            subTitle="Started on March 14, 2023"
          />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
          <DocMultiLineText
            title="Debt Answer"
            subTitle="Started on March 14, 2023"
          />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
          <DocHeading iconName={faUser} title="Create a New Document" />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
          <DocMultiLineText
            title="Debt Answer"
            subTitle="Use this document to respond to a debt collection lawsuit"
          />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
          <DocMultiLineText
            title="Motion to Compel Arbitration"
            subTitle="Use this document to force a debt lawsuit out of court."
          />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
          <DocMultiLineText
            title="Debt Validation Letter"
            subTitle="Use this document to respond to a collection letter pre-lawsuit."
          />
        </ContentCard>
        <ImageBox>
          <Image alt="my-account" src={Document} />
        </ImageBox>
      </ContentInnerWrapper>
    </Container>
  </ContentWrapper>
);

MyDocument.getLayout = (page: JSX.Element) => (
  <Layout title="My Document">{page}</Layout>
);

export default MyDocument;
