import React from 'react';
import { Box, FormGroup, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Spacing, TextInputField, SpacingEnum } from 'components';
import { ValidationHelper } from 'helper';
import { CustomButtonBox, LoginCard } from 'styles';
import MyAccount from 'assets/Images/common/my-account.png';

import { ForgotContentWrapper, ImageBox } from './forgetPassword.style';
import { useForgetPasswordController } from './forgetPassword.controller';

const Heading = dynamic(() => import('../../components/heading'));
const Layout = dynamic(() => import('../../layout'));

/**
 * @page {ForgetPasword} - This page is used for forget password.
 * @return {JSX.Element}
 */
const ForgetPasword = (): JSX.Element => {
  const { getters, validations, handlers, ref } = useForgetPasswordController();
  const { email, isEmailError } = getters;
  const { onEmailChange } = handlers;
  const { emailRef } = ref;

  return (
    <ForgotContentWrapper>
      <LoginCard>
        <Heading title="Forget Password" subTitle="Forget Password" />
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
        </FormGroup>
        <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
        <CustomButtonBox variant="contained">
          Send Reset Instructions
        </CustomButtonBox>
        <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
        <Box>
          <Typography color="primary">
            Didn&apost receive email confirmation instructions?
          </Typography>
        </Box>
      </LoginCard>
      <ImageBox>
        <Image alt="my-account" src={MyAccount} quality={100} />
      </ImageBox>
    </ForgotContentWrapper>
  );
};

ForgetPasword.getLayout = (page: JSX.Element) => (
  <Layout title="Forget Password">{page}</Layout>
);

export default ForgetPasword;
