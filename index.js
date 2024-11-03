//Retrieving the input
function calculateAge() {
  const day = parseInt(document.getElementById("Day").value);
  const month = parseInt(document.getElementById("Month").value);
  const year = parseInt(document.getElementById("Year").value);

  // Input validation
  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12.");
    return;
  }

  if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31.");
    return;
  }

  if (day < 0 || year > 2024) {
    alert("year must be current.");
    return;
  }

  //Current Date, Month, Year and time
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  //calculating the age
  let ageYears = currentYear - year;
  let ageMonths = currentMonth - month;
  let ageDays = currentDay - day;

  //Dealing with negatives
  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  //Displaying the output

  const outputYear = document.querySelector(".output h1:nth-child(1)");
  const outputMonth = document.querySelector(".output h1:nth-child(2)");
  const outputDay = document.querySelector(".output h1:nth-child(3)");

  outputYear.textContent = ageYears + "Years";
  outputMonth.textContent = ageMonths + "Months";
  outputDay.textContent = ageDays + "Days";
}
