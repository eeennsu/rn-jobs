export const dateFormat = (date) => {
  if (!date || typeof date !== 'string') return null;

  const intl = new Intl.DateTimeFormat('en-US',  {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return intl.format(new Date(date));
}