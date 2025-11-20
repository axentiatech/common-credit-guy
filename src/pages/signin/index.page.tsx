import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import GoogleIcon from 'assets/Images/common/google.png';
import MyAccount from 'assets/Images/common/my-account.png';
import { ValidationHelper } from 'helper';
import {
  TextInputField,
  SpacingEnum,
  Box,
  InputAdornment,
  Typography,
  FormGroup,
  Spacing,
} from 'components';
import Icon from 'components/icon';
import {
  LinkWrapper,
  AuthContentWrapper,
  LoginCard,
  CustomButtonBox,
} from 'styles';
import { RoutePathEnum } from 'enum';

import { useSignInController } from './signIn.controller';
import { ImageBox, LoginFooter } from './signin.style';

const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {SignIn} - This page is used for user login.
 * @return {JSX.Element}
 */
const SignIn = (): JSX.Element => {
  const { getters, handlers, ref } = useSignInController();
  const { email, password, showPassword } = getters;
  const { onEmailChange, onPasswordChange, handleShowPassword, handleLogin } =
    handlers;
  const { emailRef, passwordRef } = ref;

  return (
    <AuthContentWrapper>
      <LoginCard>
        <Heading title="My Account" subTitle="My Account" />
        <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
        <FormGroup>
          <TextInputField
            label="Email Address"
            size="small"
            type="email"
            onChange={onEmailChange}
            value={email}
            ref={emailRef}
            validation={ValidationHelper.validateNotEmpty}
          />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
          <TextInputField
            onChange={onPasswordChange}
            size="small"
            ref={passwordRef}
            value={password}
            type={showPassword ? 'text' : 'password'}
            validation={ValidationHelper.validateNotEmpty}
            InputProps={{
              style: { paddingRight: 6 },
              endAdornment: (
                <InputAdornment sx={{ ml: 0.5 }} position="end">
                  <Icon
                    icon={showPassword ? faEyeSlash : faEye}
                    title={showPassword ? 'hide' : 'show'}
                    onClick={handleShowPassword}
                    color="inherit"
                  />
                </InputAdornment>
              ),
            }}
          />
        </FormGroup>
        <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CustomButtonBox onClick={handleLogin} variant="contained">
            login
          </CustomButtonBox>
          <LoginFooter>
            <LinkWrapper>
              <Link href={RoutePathEnum.FORGET_PASSWORD}>
                <Typography>Forget Password</Typography>
              </Link>
            </LinkWrapper>
          </LoginFooter>
        </Box>
        <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
        <Box>
          <Typography color="primary">
            Didn&apost receive email confirmation instructions?
          </Typography>
        </Box>
        <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
        <Box>
          <Typography sx={{ textAlign: 'center' }} color="primary">
            or
          </Typography>
        </Box>
        <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
        <Box>
          <CustomButtonBox
            title=""
            variant="outlined"
            fullWidth
            startIcon={
              <Image alt="google-icon" src={GoogleIcon} quality={100} />
            }
          >
            Continue with Google
          </CustomButtonBox>
        </Box>
      </LoginCard>
      <ImageBox>
        <Image alt="my-account" src={MyAccount} quality={100} />
      </ImageBox>
    </AuthContentWrapper>
  );
};

export default SignIn;

SignIn.getLayout = (page: JSX.Element) => (
  <Layout title="Sign In">{page}</Layout>
);
