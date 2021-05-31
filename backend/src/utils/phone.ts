export function isValidPhone(_phone: string): boolean {
  const phone = _phone.replace(/[^\d]/g, '');
  if (phone.length < 8) {
    return false;
  }
  if (phone.length === 9 && phone[0] !== '9') {
    return false;
  }
  return true;
}
export function formatPhone(_phone: string) {
  return _phone
    .replace(/[^\d]/g, '')
    .mask(
      [
        '####-####',
        '#####-####',
        '## ####-####',
        '## #####-####',
        '## ## ####-####',
        '## ## #####-####',
        '###### ####-####',
        '##### #####-####',
      ],
      { direction: 'left' },
    );
}
