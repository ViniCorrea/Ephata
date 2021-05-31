import globals from 'types/globals';
import { formatPhone, isValidPhone } from './phone';

describe('Phone', () => {
  beforeAll(() => {
    globals();
  });
  it('Should format phone number', () => {
    expect(formatPhone('+55(21)980685250')).toBe('55 21 98068-5250');
    expect(formatPhone('(21) 80685250')).toBe('21 8068-5250');
    expect(formatPhone('(21) 80-685-250')).toBe('21 8068-5250');
  });
  it('Should check if phone number is valid', () => {
    expect(isValidPhone('1')).toBe(false);
    expect(isValidPhone('12')).toBe(false);
    expect(isValidPhone('123')).toBe(false);
    expect(isValidPhone('1234')).toBe(false);
    expect(isValidPhone('12345')).toBe(false);
    expect(isValidPhone('123456')).toBe(false);
    expect(isValidPhone('1234567')).toBe(false);
    expect(isValidPhone('12345678')).toBe(true);
    expect(isValidPhone('123456789')).toBe(false);
    expect(isValidPhone('912345678')).toBe(true);
    expect(isValidPhone('0912345678')).toBe(true);
    expect(isValidPhone('0000912345678')).toBe(true);
  });
});
