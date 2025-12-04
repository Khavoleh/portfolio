export const getUkraineTimezone = (): 'UTC+3 (EEST)' | 'UTC+2 (EET)' => {
  const now = new Date();
  const year = now.getFullYear();

  // Find the last Sunday of March
  const marchLastDay = new Date(year, 2, 31); // March 31
  const marchLastSunday = new Date(marchLastDay);
  marchLastSunday.setDate(31 - marchLastDay.getDay());
  marchLastSunday.setHours(3, 0, 0, 0);

  // Find the last Sunday of October
  const octoberLastDay = new Date(year, 9, 31); // October 31
  const octoberLastSunday = new Date(octoberLastDay);
  octoberLastSunday.setDate(31 - octoberLastDay.getDay());
  octoberLastSunday.setHours(4, 0, 0, 0);

  const isDST = now >= marchLastSunday && now < octoberLastSunday;

  return isDST ? 'UTC+3 (EEST)' : 'UTC+2 (EET)';
};
