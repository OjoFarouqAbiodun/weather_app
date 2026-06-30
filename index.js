let now = new Date();
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Satuday",
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
let currentInfo = document.querySelector(".info");

if (currentMinute < 10) {
	currentMinute = `0${currentMinute}`;
}

if (currentHour < 10) {
	currentHour = `0${currentHour}`;
}

currentInfo.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;

let apiKey = "9f1739f0t2608f809957ea4ea4ob5f0b";
let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function (event) {
	event.preventDefault();
	let searchInput = document.querySelector(".search-input");
	let city = document.querySelector(".current-city");
	let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${searchInput.value}&key=${apiKey}&units=metric`;
	
	function show(response) {
		let currentTemperature = document.querySelector("#current-temperature");
		currentTemperature.innerHTML = Math.round(response.data.daily[0].temperature.day);
		city.innerHTML = response.data.city;
	}

	axios.get(apiUrl).then(show);
});

// Alternatively
// let searchForm = document.querySelector("#search-form");

// function searchSubmitted(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector(".search-input");
//   let city = document.querySelector(".current-city");
//   city.innerHTML = searchInput.value;
// }
// searchForm.addEventListener("submit", searchSubmitted);
