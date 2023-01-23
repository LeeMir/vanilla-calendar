export const nextMonth = (date: Date) => {
  const nextDate = date;
  nextDate.setMonth(date.getMonth() + 1);
  return nextDate;
};

export const prevMonth = (date: Date) => {
  const nextDate = date;
  nextDate.setMonth(date.getMonth() - 1);
  return nextDate;
};

export const firstDateOfMonth = (date: Date) => {
  const [year, month] = [date.getFullYear(), date.getMonth()];

  return new Date(year, month, 1);
};

export const lastDateOfMonth = (date: Date) => {
  const [year, month] = [date.getFullYear(), date.getMonth()];

  return new Date(year, month + 1, 0);
};

export const getYYYYMMDD = (date: Date) => {
  const [year, month, day] = [
    date.getFullYear().toString(),
    (date.getMonth() + 1).toString(),
    date.getDate().toString(),
  ];

  return `${year.padStart(4, '0')}${month.padStart(2, '0')}${day.padStart(2, '0')}`;
};

export const getDateFromYYYYMMDD = (YYYYMMDD: string) => {
  const year = Number(YYYYMMDD.slice(0, 4));
  const month = Number(YYYYMMDD.slice(4, 6));
  const day = Number(YYYYMMDD.slice(6));

  return new Date(year, month - 1, day);
};

export const isSameDate = (date1: Date, date2: Date) => {
  const [year1, month1, day1] = [date1.getFullYear(), date1.getMonth(), date1.getDate()];
  const [year2, month2, day2] = [date2.getFullYear(), date2.getMonth(), date2.getDate()];

  return year1 === year2 && month1 === month2 && day1 === day2;
};
