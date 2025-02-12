
export const getToday = () => {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long'
  });
  return formatter.format(date);
}
