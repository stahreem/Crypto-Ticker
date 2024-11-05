// Fetch data from the backend and display it in the table
fetch("http://localhost:7000/api/tickers")
  .then(response => response.json())
  .then(data => {
    const tickerRowsContainer = document.getElementById("ticker-rows");

    // Iterate over the data and create rows dynamically
    data.forEach((item) => {
      const row = document.createElement("div");
      row.classList.add("ticker-row");

      row.innerHTML = `
        <div class="index">${item.index}</div>
        <div class="platform">${item.name}</div>
        <div class="last-price">${item.last}</div>
        <div class="buy-sell">${item.buy} / ${item.sell}</div>
        <div class="volume">Volume: ${item.volume}</div>
        <div class="base-unit">Base Unit: ${item.base_unit}</div>
      `;

      // Append the row to the container
      tickerRowsContainer.appendChild(row);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
