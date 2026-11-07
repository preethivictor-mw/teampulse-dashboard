document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderLeaderboard(
      dashboardData.team
    );

  }
);


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
