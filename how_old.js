function howOld(age, year) {
  let currentYear = 2023;
  let calculatedAge = year - currentYear + age;
  if (year > currentYear) 
    return `You will be ${calculatedAge} in the year ${year}`;
  else if (calculatedAge < 0) 
    return `The year ${year} was ${Math.abs(calculatedAge)} years before you were born`;
  else if (currentYear > year)
    return `You were ${Math.abs(calculatedAge)} in the year ${year}`;
}
