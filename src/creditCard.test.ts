import { maskCreditCardNumber } from './creditCard';
import { describe, it, expect } from '@jest/globals';

describe('maskCreditCardNumber', () => {
    it('should mask a 16-digit credit card number with default 4 visible digits', () => {
        const result = maskCreditCardNumber('4111111111111111');
        expect(result).toBe('************1111');
    });

    it('should mask a 16-digit credit card number with custom visible digits', () => {
        const result = maskCreditCardNumber('5555555555554444', 6);
        expect(result).toBe('**********554444');
    });

    it('should handle short credit card numbers', () => {
        const result = maskCreditCardNumber('123456', 2);
        expect(result).toBe('****56');
    });

    it('should handle empty string', () => {
        const result = maskCreditCardNumber('', 4);
        expect(result).toBe('');
    });

    it('should handle showNumbers larger than card length', () => {
        const result = maskCreditCardNumber('123', 5);
        expect(result).toBe('123');
    });

    it('should mask Amex style card', () => {
        const result = maskCreditCardNumber('3782810005');
        expect(result).toBe('******0005');
    });
});
