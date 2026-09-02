//Question-1

function describeValue(value) {
    return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));

console.log(describeValue("0"));
console.log(describeValue(NaN));

//Question-2

function getDayType(day) {
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

console.log(getDayType("Friday"));      
console.log(getDayType("friday"));      
console.log(getDayType("SATURDAY"));    
console.log(getDayType("MONDAY"));      
console.log(getDayType("sunday"));      
console.log(getDayType("Bandarban"));   
console.log(getDayType("hello"));       

//Question-3

function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }
  if (username.includes(" ")) {
    return "No Space Allowed";
  }
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}


console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));

// Question-4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50; // minimum for first 2 km

  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  fare += waitingMinutes * 2;

  if (isNight) {
    fare += fare * 0.2; // 20% on the whole fare
  }

  return fare;
}

// Function calls
console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));

// Question-5

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));