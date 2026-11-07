document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderHome(
      dashboardData
    );

  }
);


function renderHome(data) {

  const weekly =
    data.weekly || [];

  const team =
    data.team || [];


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


  const totalOutput =
    totalArticles +
    totalSources;


  const avgEfficiency =
    team.length
      ? (
          team.reduce(
            function (sum, member) {

              return (
                sum +
                Number(
                  member.efficiency || 0
                )
              );

            },
            0
          ) /
          team.length
        )
      : 0;


  const avgQuality =
    team.length
      ? (
          team.reduce(
            function (sum, member) {

              return (
                sum +
                Number(
                  member.quality || 0
                )
              );

            },
            0
          ) /
          team.length
        )
      : 0;


  setText(
    "reportingPeriod",
    data.reportMonth
  );


  setText(
    "welcomeMonth",
    data.reportMonth
  );


  setText(
    "totalRecords",
    formatNumber(
      totalOutput
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
    value || 0
  ).toLocaleString(
    "en-IN"
  );

}
