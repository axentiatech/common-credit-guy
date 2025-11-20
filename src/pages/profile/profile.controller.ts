import { RefObject, useRef, useState, useCallback } from 'react';

import {
  ITextInputFieldData,
  ITextInputFieldRef,
  IValidationResponse,
} from 'components';
import { RegexLibrary } from 'library';
import { StringHelper } from 'helper';
import { MUST_BE_IN_VALID_FORMAT, THIS_FILED_IS_REQUIRED } from 'constant';

interface IProfileControllerResponse {
  getters: {
    email: string;
    isEmailError: boolean;
    emailErrorText: string;
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
 * @controller {useProfileController}
 * @return {IProfileControllerResponse}
 */
export function useProfileController(): IProfileControllerResponse {
  const [email, setEmail] = useState<string>('');
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [emailErrorText, setEmailErrorText] = useState<string>('');

  // React Refs
  const emailRef = useRef<ITextInputFieldRef>(null);

  /**
   * @function {onEmailChange} Handle on Change of Email
   * @param {ITextInputFieldData} event Event on Text Field Change
   */
  const onEmailChange = useCallback((event: ITextInputFieldData): void => {
    if (!event.event) return;
    const { value } = event.event.target;
    if (value.length === 0) {
      setIsEmailError(true);
      setEmailErrorText(THIS_FILED_IS_REQUIRED);
    } else {
      setIsEmailError(false);
      setEmailErrorText('');
    }
    setEmail(value);
  }, []);

  /**
   * @function {emailValidator} Validate Email Address Field
   * @return {IValidationResponse}
   */
  const emailValidator = useCallback((): IValidationResponse => {
    const trimedValue = email.trim().toLocaleLowerCase();
    if (trimedValue.length > 0) {
      if (!RegexLibrary.MAIL.test(trimedValue)) {
        setIsEmailError(true);
        setEmailErrorText(
          StringHelper.translationHelper(MUST_BE_IN_VALID_FORMAT),
        );
      } else {
        setIsEmailError(false);
        setEmailErrorText('');
      }
    }
    return { isValid: true, message: '' };
  }, [email]);

  return {
    getters: {
      email,
      isEmailError,
      emailErrorText,
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
