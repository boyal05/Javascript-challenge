// from data.js
let tableData = data;
console.log(tableData);

// YOUR CODE HERE!
renderHtml();

// Getting Form Fields
const dateinput = document.querySelector("#datetime");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const country = document.querySelector("#country");
const shape = document.querySelector("#shape");

// On change Listeners
let dateInputValue = dateinput.value;
let cityInputValue = city.value;
let stateInputValue = state.value;
let countryInputValue = country.value;
let shapeInputValue = shape.value;

dateinput.addEventListener("change", (e) => {
  dateInputValue = dateinput.value;
});

city.addEventListener("change", (e) => {
  cityInputValue = city.value;
});
state.addEventListener("change", (e) => {
  stateInputValue = state.value;
});
country.addEventListener("change", (e) => {
  countryInputValue = country.value;
});
shape.addEventListener("change", (e) => {
  shapeInputValue = shape.value;
});

const filterButton = document.querySelector("#filter-btn");
filterButton.addEventListener("click", (e) => {
  e.preventDefault();
  let filteredData;
  if (dateInputValue !== "") {
    filteredData = tableData.filter((data) => data.datetime === dateInputValue);
  }
  if (cityInputValue !== "") {
    filteredData = filteredData.filter(
      (data) => data.city.toLowerCase() === cityInputValue.toLowerCase()
    );
  }
  if (stateInputValue !== "") {
    filteredData = filteredData.filter(
      (data) => data.state.toLowerCase() === stateInputValue.toLowerCase()
    );
  }
  if (countryInputValue !== "") {
    filteredData = filteredData.filter(
      (data) => data.country.toLowerCase() === countryInputValue.toLowerCase()
    );
  }
  if (shapeInputValue !== "") {
    filteredData = filteredData.filter(
      (data) => data.shape === shapeInputValue.toLowerCase()
    );
  }

  renderHtml(filteredData);
});

function renderHtml(dataArray = tableData) {
  const tablebody = document.getElementsByTagName("tbody")[0];
  let tableHtml = "";
  dataArray.forEach((element) => {
    tableHtml += `<tr>
                    <td>${element.datetime}</td>
                    <td>${element.city}</td>
                    <td>${element.state.toUpperCase()}</td>
                    <td>${element.country.toUpperCase()}</td>
                    <td>${element.shape}</td>
                    <td>${element.durationMinutes}</td>
                    <td>${element.comments}</td>
                  </tr>`;
  });

  tablebody.innerHTML = tableHtml;
}
