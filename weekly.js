document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderWeeklyPage(
      dashboardData
    );

  }
);


function renderWeeklyPage(data) {

  setText(
    "reportMonth",
    data.reportMonth
  );


  renderWeeklyChart(
    data.weekly || []
  );


  renderWeeklyTable(
    data.weekly || []
  );

}


function renderWeeklyChart(
  weekly
) {

  const container =
    document.getElementById(
      "weeklyChart"
    );


  container.innerHTML =
    "";


  const maxTotal =
    Math.max(
      ...weekly.map(
        function (row) {

          return Number(
            row.total || 0
          );

        }
      )
    );


  weekly.forEach(
    function (row) {


      const column =
        document.createElement(
          "div"
        );


      column.className =
        "week-column";


      const height =
        maxTotal
          ? (
              Number(
                row.total
              ) /
              maxTotal
            ) * 170
          : 0;


      column.innerHTML = `

        <div class="week-total">
          ${formatNumber(row.total)}
        </div>

        <div class="bar-area">

          <div
            class="week-bar"
            style="height:${height}px">
          </div>

        </div>

        <div class="week-label">
          ${row.week}
        </div>

      `;


      container.appendChild(
        column
      );

    }
  );

}


function renderWeeklyTable(
  weekly
) {

  const body =
    document.getElementById(
      "weeklyTableBody"
    );


  body.innerHTML =
    "";


  weekly.forEach(
    function (row) {


      const tr =
        document.createElement(
          "tr"
        );


      tr.innerHTML = `

        <td>
          <strong>
            ${row.week}
          </strong>
        </td>

        <td>
          ${formatNumber(row.articleAddition)}
        </td>

        <td>
          ${formatNumber(row.sourceAnnotation)}
        </td>

        <td>
          <strong>
            ${formatNumber(row.total)}
          </strong>
        </td>

      `;


      body.appendChild(
        tr
      );

    }
  );

}


function setText(
  id,
  value
) {

  const element =
    document.getElementById(
      id
    );

  if (element) {

    element.textContent =
      value;

  }

}


function formatNumber(value) {

  return Number(
    value || 0
  ).toLocaleString(
    "en-IN"
  );

}
