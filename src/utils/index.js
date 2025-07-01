export const getExperience = (startDateStr) => {
  const start = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = years * 12 + months;

  const extraMonth = now.getDate() >= 15 ? 1 : 0;

  const adjustedMonths = totalMonths + extraMonth;
  const roundedYears = Math.round((adjustedMonths / 12) * 10) / 10;

  return roundedYears.toFixed(1);
};