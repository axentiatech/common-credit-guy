import { IValidationResponse } from 'components';
import { RegexLibrary } from 'library';

/**
 * This class holds all the validations Validation Helper
 */
export class ValidationHelper {
  /**
   * Validate a String
   * @return {IValidationResponse}
   */
  public static validateNone(): IValidationResponse {
    return { isValid: true, message: '' };
  }

  /**
   * Validate  that the value should not be empty
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validateNotEmpty(value: string): IValidationResponse {
    if (!value) {
      return {
        isValid: false,
        message: 'This field is required',
      };
    }

    if (value.trim().length <= 0) {
      return {
        isValid: false,
        message: 'This field is required',
      };
    }

    return {
      isValid: true,
      message: '',
    };
  }

  /**
   * Validate  that the value should be URL
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validateURL(value: string): IValidationResponse {
    if (!RegexLibrary.URL.test(value)) {
      return {
        isValid: false,
        message: 'Please enter a valid URL',
      };
    }
    return {
      isValid: true,
      message: '',
    };
  }

  /**
   * Validate  that the value should be Phone Number
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validatePhone(value: string): IValidationResponse {
    if (RegexLibrary.PHONE_NUMBER.test(value)) {
      return {
        isValid: true,
        message: '',
      };
    }

    return {
      isValid: false,
      message: 'Please enter a valid Phone Number',
    };
  }
}
