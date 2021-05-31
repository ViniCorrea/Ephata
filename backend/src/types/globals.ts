import { enable as enableColors } from 'colors';

interface MaskOptions {
  direction: 'left' | 'right';
}

declare global {
  interface String {
    capitalize(): string;
    mask(mask: string | string[], options?: MaskOptions): string;
    reverse(): string;
    count(this: string, pattern: RegExp): number;
  }
}

export function stringReverse(this: string) {
  return this.split('').reverse().join('');
}
String.prototype.reverse = stringReverse;

function stringCount(this: string, pattern: string | RegExp): number {
  if (typeof pattern === 'string') {
    return (this.split(pattern) || []).length;
  }
  return (this.match(new RegExp(pattern.source, 'g')) || []).length;
}
String.prototype.count = stringCount;

export function stringMask(
  this: string,
  _mask: string | string[],
  _options: MaskOptions,
): string {
  const options: MaskOptions = {
    direction: 'right',
    ..._options,
  };
  let result = '';
  const Base = options.direction === 'right' ? this : this.reverse();
  let Mask = _mask;
  if (Array.isArray(_mask)) {
    Mask = _mask.reduce((pre, cur, i) => {
      if (cur.count(/#/g) === Base.length) {
        return cur;
      }
      if (cur.count(/#/g) < Base.length) {
        return pre;
      }
      if (cur.count(/#/g) < pre.count(/#/g)) {
        return cur;
      }
      return pre;
    }, _mask[0]);
  }
  Mask = options.direction === 'right' ? Mask : Mask.reverse();
  for (let i = 0, j = 0; j < Base.length; i++) {
    const char = Mask[i];
    if (char === undefined) {
      result += Base[j++];
    } else if (char === '#') {
      result += Base[j++];
    } else {
      result += char;
    }
  }
  if (options.direction === 'left') {
    return result.reverse();
  }
  return result;
}
String.prototype.mask = stringMask;

export function stringCapitalize(this: string, separator = /\s/) {
  let res = '';
  let cap = true;
  for (const char of this) {
    if (cap && /[a-z]/i.test(char)) {
      res += char.toUpperCase();
    } else {
      res += char;
    }
    cap = false;
    if (separator.test(char)) {
      cap = true;
    }
  }
  return res;
}
String.prototype.capitalize = stringCapitalize;

export default function overload() {
  enableColors();
  String.prototype.reverse = stringReverse;
  String.prototype.count = stringCount;
  String.prototype.mask = stringMask;
  String.prototype.capitalize = stringCapitalize;
}
