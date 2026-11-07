document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderDashboard(
      dashboardData
    );

  }
);


// ========================================
// MASTER
// ========================================

function renderDashboard(data) {

  renderReportingPeriod(
    data.reportMonth
  );

  renderSummary(
    data.weekly,
    data.team
  );

  renderHighlights(
    data.team
  );

  renderWeeklyChart(
    data.weekly
  );

  renderLeaderboard(
    data.team
  );

  renderTeamConnect(
    data.teamConnect
  );

  renderOperational(
    data.operational
  );

  renderTeamAward(
    data.teamAward,
    data.reportMonth
  );

}


// ========================================
// REPORT MONTH
// ========================================

function renderReportingPeriod(
  month
) {

  setText(
    "reportingPeriod",
    month
  );

  setText(
    "welcomeMonth",
    month
  );

}


// ========================================
// SUMMARY
// ========================================

function renderSummary(
  weekly,
  team
) {

  const totalArticles =
    weekly.reduce(
      function (sum, row) {

        return (
          sum +
          Number(
            row.articleAddition || 0
          )
        );

      },
      0
    );


  const totalSources =
    weekly.reduce(
      function (sum, row) {

        return (
          sum +
          Number(
            row.sourceAnnotation || 0
          )
        );

      },
      0
    );


  const totalRecords =
    totalArticles +
    totalSources;


  const avgEfficiency =
    team.reduce(
      function (sum, member) {

        return (
          sum +
          Number(
            member.efficiency
          )
        );

      },
      0
    ) /
    team.length;


  const avgQuality =
    team.reduce(
      function (sum, member) {

        return (
          sum +
          Number(
            member.quality
          )
        );

      },
      0
    ) /
    team.length;


  setText(
    "totalRecords",
    formatNumber(
      totalRecords
    )
  );


  setText(
    "totalRecordsBottom",
    formatNumber(
      totalRecords
    )
  );


  setText(
    "totalArticles",
    formatNumber(
      totalArticles
    )
  );


  setText(
    "totalSources",
    formatNumber(
      totalSources
    )
  );


  setText(
    "employeeCount",
    team.length
  );


  setText(
    "averageEfficiency",
    avgEfficiency.toFixed(1) +
    "%"
  );


  setText(
    "averageQuality",
    avgQuality.toFixed(1) +
    "%"
  );

}


// ========================================
// HIGHLIGHTS
// ========================================

function renderHighlights(team) {

  const efficiencyChampion =
    team.reduce(
      function (best, member) {

        return (
          member.efficiency >
          best.efficiency
        )
          ? member
          : best;

      }
    );


  const qualityChampion =
    team.reduce(
      function (best, member) {

        return (
          member.quality >
          best.quality
        )
          ? member
          : best;

      }
    );


  setText(
    "efficiencyChampion",
    efficiencyChampion.name
  );


  setText(
    "efficiencyValue",
    efficiencyChampion.efficiency +
    "% efficiency"
  );


  setText(
    "qualityChampion",
    qualityChampion.name
  );


  setText(
    "qualityValue",
    qualityChampion.quality +
    "% quality"
  );

}


// ========================================
// WEEKLY CHART
// ========================================

function renderWeeklyChart(
  weekly
) {

  const container =
    document.getElementById(
      "weeklyChart"
    );


  const max =
    Math.max(
      ...weekly.map(
        function (row) {

          return row.total;

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
        (
          row.total /
          max
        ) * 170;


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


// ========================================
// LEADERBOARD
// ========================================

function renderLeaderboard(
  team
) {

  const body =
    document.getElementById(
      "leaderboardBody"
    );


  body.innerHTML = "";


  const sorted =
    [...team].sort(
      function (a, b) {

        return a.name.localeCompare(
          b.name
        );

      }
    );


  sorted.forEach(
    function (
      member,
      index
    ) {


      const performance =
        getPerformance(
          member.efficiency,
          member.quality
        );


      const row =
        document.createElement(
          "tr"
        );


      row.innerHTML = `

        <td>
          ${index + 1}
        </td>

        <td>
          <strong>
            ${member.name}
          </strong>
        </td>

        <td>
          ${member.efficiency}%
        </td>

        <td>
          ${member.quality}%
        </td>

        <td>

          <span
            class="performance-pill">

            ${performance}

          </span>

        </td>

      `;


      body.appendChild(
        row
      );

    }
  );

}


// ========================================
// PERFORMANCE
// ========================================

function getPerformance(
  efficiency,
  quality
) {

  if (
    efficiency >= 105 &&
    quality >= 95
  ) {

    return "Outstanding";

  }


  if (
    efficiency >= 100 &&
    quality >= 94
  ) {

    return "Excellent";

  }


  if (
    efficiency >= 95 &&
    quality >= 90
  ) {

    return "Strong";

  }


  return "Developing";

}


// ========================================
// TEAM CONNECT
// ========================================

function renderTeamConnect(
  items
) {

  const container =
    document.getElementById(
      "teamConnectGrid"
    );


  items.forEach(
    function (item) {


      const card =
        document.createElement(
          "div"
        );


      card.className =
        "info-card";


      card.innerHTML = `

        <h4>
          ${item.member}
        </h4>

        <div class="topic">
          ${item.topic}
        </div>

        <p>
          ${item.description}
        </p>

      `;


      container.appendChild(
        card
      );

    }
  );

}


// ========================================
// OPERATIONAL
// ========================================

function renderOperational(
  items
) {

  const container =
    document.getElementById(
      "operationalGrid"
    );


  items.forEach(
    function (item) {


      const card =
        document.createElement(
          "div"
        );


      card.className =
        "info-card";


      card.innerHTML = `

        <div class="topic">
          ${item.action}
        </div>

        <h4>
          ${item.area}
        </h4>

        <p>
          ${item.description.replace(
            /\n/g,
            "<br>"
          )}
        </p>

      `;


      container.appendChild(
        card
      );

    }
  );

}


// ========================================
// TEAM AWARD
// ========================================

function renderTeamAward(
  award,
  month
) {

  const container =
    document.getElementById(
      "teamAwardGrid"
    );


  container.innerHTML = `

    <div class="award-card">

      <img
        class="award-photo"
        src="${award.image}"
        alt="${award.name}"
      >

      <div>

        <div class="topic">
          ${award.title}
        </div>

        <h2>
          ${award.name}
        </h2>

        <p>
          Congratulations on being recognised as
          <strong>
            ${award.title}
          </strong>
          for ${month}.
        </p>

      </div>

    </div>

  `;

}


// ========================================
// UTILITIES
// ========================================

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


function formatNumber(
  value
) {

  return Number(
    value
  ).toLocaleString(
    "en-IN"
  );

}
