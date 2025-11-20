import React from 'react';
import { Box, FormGroup, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import ProfileImage from 'assets/Images//pages/profile/profile.png';
import { Spacing, TextInputField, SpacingEnum, Container } from 'components';
import { CustomButtonBox } from 'styles';
import { ValidationHelper } from 'helper';

import {
  ContentWrapper,
  ContentInnerWrapper,
  ContentCard,
  ImageBox,
} from './profile.style';
import { useProfileController } from './profile.controller';

const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {Profile} - This page is used for user profile.
 * @return {JSX.Element}
 */
const Profile = (): JSX.Element => {
  const { getters, validations, handlers, ref } = useProfileController();
  const { email, isEmailError, emailErrorText } = getters;
  const { onEmailChange } = handlers;
  const { emailRef } = ref;

  return (
    <ContentWrapper>
      <Container maxWidth="lg">
        <Heading title="Profile" subTitle="Profile" />
        <ContentInnerWrapper>
          <ContentCard>
            <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
            <FormGroup>
              <TextInputField
                size="small"
                type="email"
                onChange={onEmailChange}
                value={email}
                ref={emailRef}
                validation={ValidationHelper.validateNotEmpty}
                onBlur={validations.emailValidator}
                error={isEmailError}
              />
              <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
              <TextInputField
                size="small"
                type="email"
                onChange={onEmailChange}
                value={email}
                ref={emailRef}
                validation={ValidationHelper.validateNotEmpty}
                onBlur={validations.emailValidator}
                error={isEmailError}
                helperText={emailErrorText}
              />
              <Box>
                <Typography>
                  We need your current password to confirm changes
                </Typography>
              </Box>
              <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
              <TextInputField
                size="small"
                type="email"
                onChange={onEmailChange}
                value={email}
                ref={emailRef}
                validation={ValidationHelper.validateNotEmpty}
                onBlur={validations.emailValidator}
                error={isEmailError}
                helperText={emailErrorText}
              />
              <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
              <TextInputField
                size="small"
                type="email"
                onChange={onEmailChange}
                value={email}
                ref={emailRef}
                validation={ValidationHelper.validateNotEmpty}
                onBlur={validations.emailValidator}
                error={isEmailError}
                helperText={emailErrorText}
              />
              <Box>
                <Typography>
                  If you want to change your password, enter the new password
                  below.
                </Typography>
              </Box>
              <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
              <TextInputField
                size="small"
                type="email"
                onChange={onEmailChange}
                value={email}
                ref={emailRef}
                validation={ValidationHelper.validateNotEmpty}
                onBlur={validations.emailValidator}
                error={isEmailError}
                helperText={emailErrorText}
              />
              <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
              <TextInputField
                size="small"
                type="email"
                onChange={onEmailChange}
                value={email}
                ref={emailRef}
                validation={ValidationHelper.validateNotEmpty}
                onBlur={validations.emailValidator}
                error={isEmailError}
                helperText={emailErrorText}
              />
            </FormGroup>
            <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
            <CustomButtonBox variant="contained">Update</CustomButtonBox>
          </ContentCard>
          <ImageBox>
            <Image alt="my-account" src={ProfileImage} quality={100} />
          </ImageBox>
        </ContentInnerWrapper>
      </Container>
    </ContentWrapper>
  );
};

Profile.getLayout = (page: JSX.Element) => (
  <Layout title="Profile">{page}</Layout>
);

export default Profile;
