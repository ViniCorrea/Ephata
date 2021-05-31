import { stringCapitalize, stringMask, stringReverse } from './globals';

describe('Globals', () => {
  it('Should validate String.reverse', () => {
    expect(stringReverse.call('1234')).toEqual('4321');
  });

  it('Should validate String.count', () => {
    expect(stringReverse.call('1234')).toEqual('4321');
  });

  it('Should validate String.capitalize', () => {
    expect(stringCapitalize.call('jack smith. clare smith')).toEqual(
      'Jack Smith. Clare Smith',
    );
  });

  it('Should validate String.mask', () => {
    expect(stringMask.call('12345678', '####-####')).toEqual('1234-5678');
    expect(stringMask.call('123456789', '####-####')).toEqual('1234-56789');
    expect(stringMask.call('123456789', '##-##-####')).toEqual('12-34-56789');
    expect(stringMask.call('$#3456789', '##-##-####')).toEqual('$#-34-56789');
    expect(stringMask.call('1234', '##-##-####')).toEqual('12-34');
    expect(
      stringMask.call('0123456789', '####-####', { direction: 'left' }),
    ).toEqual('012345-6789');

    expect(stringMask.call('12345678', ['####-####', '#-##'])).toEqual(
      '1234-5678',
    );
    expect(stringMask.call('12', ['####-####', '#-##'])).toEqual('1-2');
    expect(stringMask.call('123', ['####-####', '#-##'])).toEqual('1-23');
    expect(stringMask.call('1234', ['####-####', '#-##'])).toEqual('1234');
  });
});
