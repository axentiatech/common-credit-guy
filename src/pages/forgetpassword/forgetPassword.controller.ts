import { RefObject, useRef, useState, useCallback } from 'react';

import {
  ITextInputFieldData,
  ITextInputFieldRef,
  IValidationResponse,
} from 'components';
import { RegexLibrary } from 'library';

interface IForgetPasswordControllerResponse {
  getters: {
    email: string;
    isEmailError: boolean;
  };
  handlers: {
    onEmailChange: (event: ITextInputFieldData) => void;
  };
  validations: { emailValidator: () => IValidationResponse };
  ref: {
    emailRef: RefObject<ITextInputFieldRef>;
  };
}

/**
 * @controller {useForgetPasswordController}
 * @return {IForgetPasswordControllerResponse}
 */
export function useForgetPasswordController(): IForgetPasswordControllerResponse {
  // React State
  const [email, setEmail] = useState<string>('');
  const [isEmailError, setIsEmailError] = useState<boolean>(false);

  // React Ref
  const emailRef = useRef<ITextInputFieldRef>(null);

  /**
   * Handle on Change of Email
   * @param {ITextInputFieldData} event Event on Text Field Change
   */
  const onEmailChange = useCallback((event: ITextInputFieldData): void => {
    if (!event.event) return;
    const { value } = event.event.target;
    if (value.length === 0) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
    setEmail(value);
  }, []);

  /**
   * Validate Email Address Field
   * @return {IValidationResponse}
   */
  const emailValidator = useCallback((): IValidationResponse => {
    const trimedValue = email.trim().toLocaleLowerCase();
    if (trimedValue.length > 0) {
      if (!RegexLibrary.MAIL.test(trimedValue)) {
        setIsEmailError(true);
      } else {
        setIsEmailError(false);
      }
    }
    return { isValid: true, message: '' };
  }, [email]);

  return {
    getters: {
      email,
      isEmailError,
    },
    handlers: {
      onEmailChange,
    },
    validations: { emailValidator },
    ref: {
      emailRef,
    },
  };
}
