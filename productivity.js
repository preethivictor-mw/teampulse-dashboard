document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderProductivity(
      dashboardData
    );

  }
);


function renderProductivity(data) {

  const weekly =
    data.weekly || [];


  const articleTotal =
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


  const sourceTotal =
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


  const overallTotal =
    articleTotal +
    sourceTotal;


  setText(
    "reportMonth",
    data.reportMonth
  );


  setText(
    "articleTotal",
    formatNumber(
      articleTotal
    )
  );


  setText(
    "sourceTotal",
    formatNumber(
      sourceTotal
    )
  );


  setText(
    "overallTotal",
    formatNumber(
      overallTotal
    )
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
