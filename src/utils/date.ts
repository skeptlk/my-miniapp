import { DateTime } from 'luxon';

export const getToday = () => {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long'
  });
  return formatter.format(date);
}

export const formatDate = (date: Date) => {
  // const date = DateTime.fromISO(dateStr).toJSDate();
  const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long'
  });
  return formatter.format(date);
}

