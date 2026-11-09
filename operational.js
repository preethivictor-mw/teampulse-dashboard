document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderOperationalPage(
      dashboardData
    );

  }
);


function renderOperationalPage(
  data
) {

  setText(
    "reportMonth",
    data.reportMonth
  );


  renderOperational(
    data.operational || []
  );

}


function renderOperational(
  items
) {

  const container =
    document.getElementById(
      "operationalGrid"
    );


  container.innerHTML =
    "";


  items.forEach(
    function (item) {


      const card =
        document.createElement(
          "div"
        );


      card.className =
        "info-card cross-functional-card";


      card.innerHTML = `

        <div class="cross-action">
          ${item.action}
        </div>

        <h4>
          ${item.area}
        </h4>

        <p>
          ${formatMultiline(
            item.description
          )}
        </p>

      `;


      container.appendChild(
        card
      );

    }
  );

}


function formatMultiline(
  text
) {

  return String(
    text || ""
  ).replace(
    /\n/g,
    "<br>"
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
