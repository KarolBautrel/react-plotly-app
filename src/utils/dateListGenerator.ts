export const generateDateList = (
  startDate: string,
  endDate: string
): string[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dateList: string[] = [];

  for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
    dateList.push(d.toISOString().split("T")[0]);
  }

  return dateList;
};
