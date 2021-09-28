// from data.js
let tableData = data;
console.log(tableData);

// YOUR CODE HERE!
renderHtml();

const dateinput = document.querySelector("#datetime");
let dateInputValue = "";
dateinput.addEventListener("change", (e) => {
  dateInputValue = dateinput.value;
});

const filterButton = document.querySelector("#filter-btn");
filterButton.addEventListener("click", (e) => {
  e.preventDefault();
  const filteredData = tableData.filter(
    (data) => data.datetime === dateInputValue
  );
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
