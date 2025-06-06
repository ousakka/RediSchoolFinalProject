const travelActivities = [
  {
    activity: "Explore ancient ruins",
    options: [
      { country: "Italy", minPriceDKK: 600 },
      { country: "Egypt", minPriceDKK: 650 },
      { country: "Tunisia", minPriceDKK: 500 },
    ],
  },
  {
    activity: "Relax on beautiful beaches",
    options: [
      { country: "Thailand", minPriceDKK: 500 },
      { country: "Tunisia", minPriceDKK: 450 },
      { country: "Egypt", minPriceDKK: 550 },
    ],
  },
  {
    activity: "Adventure in the desert",
    options: [
      { country: "Morocco", minPriceDKK: 700 },
      { country: "Tunisia", minPriceDKK: 550 },
      { country: "Egypt", minPriceDKK: 650 },
    ],
  },
  {
    activity: "Explore natural wonders",
    options: [
      { country: "Iceland", minPriceDKK: 900 },
      { country: "Thailand", minPriceDKK: 520 },
    ],
  },
  {
    activity: "Visit vibrant local markets",
    options: [
      { country: "Morocco", minPriceDKK: 400 },
      { country: "Tunisia", minPriceDKK: 350 },
      { country: "Thailand", minPriceDKK: 450 },
    ],
  },
];

function search() {
  targetPrice = Number(document.getElementById("price").value);
  targetActivity = document.getElementById("activity").value;

  const activity = travelActivities.find(
    (item) => item.activity.toUpperCase() == targetActivity.toUpperCase()
  );
  if (activity) {
    const matchingCountries = activity.options.filter(
      (Option) => Option.minPriceDKK <= targetPrice
    );
    if (matchingCountries.length > 0 && activity) {
      alert(
        matchingCountries
          .map((option) => `${option.country} - ${option.minPriceDKK} DKK`)
          .join("\n")
      );
    } else alert("the price is lower than the minimum price");
  } else alert("Activity not found");
}

function book() {
  alert(" Your Trip is booked ");
}

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
