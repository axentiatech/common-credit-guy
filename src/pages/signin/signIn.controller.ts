import { RefObject, useRef, useState, useCallback } from 'react';

import { ITextInputFieldData, ITextInputFieldRef } from 'components';

interface ISignInControllerResponse {
  getters: {
    email: string;
    password: string;
    showPassword: boolean;
  };
  handlers: {
    onEmailChange: (event: ITextInputFieldData) => void;
    onPasswordChange: (event: ITextInputFieldData) => void;
    handleShowPassword: () => void;
    handleLogin: () => void;
  };
  // validations: { emailValidator: () => IValidationResponse };
  ref: {
    domainRef: RefObject<ITextInputFieldRef>;
    emailRef: RefObject<ITextInputFieldRef>;
    passwordRef: RefObject<ITextInputFieldRef>;
  };
}

/**
 * @controller {useSignInController}
 * @return {ISignInControllerResponse}
 */
export function useSignInController(): ISignInControllerResponse {
  // React State
  const [email, setEmail] = useState<string>('');
  // const [emailErrorText, setEmailErrorText] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [passwordErrorText, setPasswordErrorText] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // React Refs
  const domainRef = useRef<ITextInputFieldRef>(null);
  const emailRef = useRef<ITextInputFieldRef>(null);
  const passwordRef = useRef<ITextInputFieldRef>(null);

  /**
   * @function onEmailChange -  Handle on Change of email
   * @param {ITextInputFieldData} event
   */
  const onEmailChange = useCallback((event: ITextInputFieldData): void => {
    if (!event.event) return;
    const { value } = event.event.target;
    setEmail(value);
  }, []);

  /**
   *
   * @function onPasswordChange -  Handle on Change of Password
   * @param {ITextInputFieldData} event
   * @return {void}
   */
  const onPasswordChange = useCallback((event: ITextInputFieldData): void => {
    if (!event.event) return;
    const { value } = event.event.target;
    setPassword(value);
  }, []);

  /**
   * To handle to show password functionality
   * @function handleShowPassword
   * @return {void}
   */
  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  /**
   * @function isValidSubmittion Validate requset before submittion
   * @return {boolean}
   */
  const isValidSubmittion = useCallback((): boolean => {
    const userNameError = emailRef.current?.validateValue();
    const passwordError = passwordRef.current?.validateValue();

    if (!(userNameError && passwordError)) {
      return true;
    }
    return false;
  }, []);

  /**
   * To handle to Login functionality
   * @function handleLogin
   * @return {void}
   */
  const handleLogin = (): boolean => {
    if (isValidSubmittion()) {
      return false;
    }
    return true;
  };

  return {
    getters: {
      email,
      password,
      showPassword,
    },
    handlers: {
      onEmailChange,
      onPasswordChange,
      handleShowPassword,
      handleLogin,
    },
    ref: {
      domainRef,
      emailRef,
      passwordRef,
    },
  };
}
