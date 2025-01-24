// Highcharts initialization
const chart = Highcharts.chart("chart-container", {
  title: { text: "" },
  xAxis: { categories: ["Текущий день", "Вчера", "Этот день недели"] },
  series: [],
});

// Event listener for rows
const rows = document.querySelectorAll("#data-table tbody tr:not(.chart-row)");
const chartRow = document.querySelector(".chart-row");

rows.forEach((row) => {
  row.addEventListener("click", () => {
    // Move chart-row below the selected row
    row.after(chartRow);
    chartRow.style.display = "table-row";

    // Update chart data
    const data = JSON.parse(row.getAttribute("data-chart"));
    chart.series[0]?.remove();
    chart.addSeries({
      name: row.cells[0].innerText,
      data: data,
      color: "#2d993a",
    });
  });
});
