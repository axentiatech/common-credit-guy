import React from 'react';
import Image from 'next/image';

import {
  quickMenu,
  quickLink,
  getInTouch,
  IGetInTouch,
  IQuickLink,
  IQuickMenu,
} from 'json';
import { StringHelper } from 'helper';
import {
  Box,
  Grid,
  Link,
  Spacing,
  SpacingEnum,
  Typography,
  Container,
} from 'components';
import Icon from 'components/icon';
import CommonCreditLogo from 'assets/images/common/common-credit-logo.png';

import {
  CustomList,
  FooterMenu,
  FooterBg,
  FooterMenuListItem,
} from './footer.style';


/**
 * @component {Footer} - This component is for Footer.
 * @return {JSX.Element}
 */
const Footer = (): JSX.Element => (
  <FooterBg>
    <Container maxWidth="lg">
      <Grid container spacing={4} mt="20px" mb="50px">
        <Grid item md={4} xs={12}>
          <Box>
            <Image
              alt="Common-Credit-Logo"
              src={CommonCreditLogo}
              width="177"
              height="52"
            />
          </Box>
          <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
          <Box>
            <Typography variant="body2">
              Common Credit is not an attorney or a law firm. Nor is it a
              substitute for an attorney or law firm. We do not provide legal
              advice nor do we practice law. This site only contains legal
              information, not legal advice. Common Credit is a self-help tool.
              This site does not create an attorney-client relationship. We
              provide no guarantee regarding case outcomes nor are we liable for
              any case outcomes. Use of its products are governed by its Terms
              of Service, Privacy Policy, and Legal Disclaimer.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2.5} xs={12}>
          <Box>
            <Typography variant="h5">Quick Menu</Typography>
          </Box>
          <FooterMenu>
            {quickMenu.map((data: IQuickMenu, index: number) => (
              <CustomList key={StringHelper.generateUID(data.text, index)}>
                <FooterMenuListItem>
                  <Link href={data.route}>{data.text}</Link>
                </FooterMenuListItem>
              </CustomList>
            ))}
          </FooterMenu>
        </Grid>
        <Grid item md={2.5} xs={12}>
          <Box>
            <Typography variant="h5">Quick Links</Typography>
          </Box>
          <FooterMenu>
            {quickLink.map((data: IQuickLink, index: number) => (
              <CustomList key={StringHelper.generateUID(data.text, index)}>
                <FooterMenuListItem>
                  <Link href={data.route}>{data.text}</Link>
                </FooterMenuListItem>
              </CustomList>
            ))}
          </FooterMenu>
        </Grid>
        <Grid item md={3} xs={12}>
          <Box>
            <Typography variant="h5">Get In Touch</Typography>
          </Box>
          <FooterMenu>
            {getInTouch.map((data: IGetInTouch, index: number) => (
              <CustomList key={StringHelper.generateUID(data.text, index)}>
                <FooterMenuListItem>
                  <Icon icon={data.icon} color="inherit" disableButton />
                  <Spacing variant={SpacingEnum.RIGHT} spacing={1.5} />
                  <Typography>{data.text}</Typography>
                </FooterMenuListItem>
              </CustomList>
            ))}
          </FooterMenu>
        </Grid>
      </Grid>
    </Container>
  </FooterBg>
);

export default Footer;
