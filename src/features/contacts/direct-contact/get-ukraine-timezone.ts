// Derives Ukraine's current UTC offset from the IANA tz database (Europe/Kyiv)
// instead of hand-rolling DST math. This is correct regardless of the host's
// own timezone (e.g. UTC on serverless) and stays valid if DST rules ever change.
export const getUkraineTimezone = (): 'UTC+3 (EEST)' | 'UTC+2 (EET)' => {
  const offset = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Kyiv',
    timeZoneName: 'shortOffset',
  })
    .formatToParts(new Date())
    .find((part) => part.type === 'timeZoneName')?.value;

  return offset === 'GMT+3' ? 'UTC+3 (EEST)' : 'UTC+2 (EET)';
};
