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
