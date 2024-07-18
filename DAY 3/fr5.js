function checkLeapYear(year) {
    let isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "Leap Year" : "Not a Leap Year";
    console.log(year, "is a", isLeapYear);
}


checkLeapYear(2024);
