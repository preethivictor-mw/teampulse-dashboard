document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderAwardPage(
      dashboardData
    );

  }
);


function renderAwardPage(
  data
) {

  setText(
    "reportMonth",
    data.reportMonth
  );


  renderAward(
    data.teamAward,
    data.reportMonth
  );

}


function renderAward(
  award,
  month
) {

  const container =
    document.getElementById(
      "teamAwardGrid"
    );


  if (!award) {

    container.innerHTML =
      "<p>No award available.</p>";

    return;

  }


  container.innerHTML = `

    <div class="award-card">

      <img
        class="award-photo"
        src="${award.image}"
        alt="${award.name}"
      >

      <div class="award-details">

        <span class="award-title">
          ${award.title}
        </span>

        <h3>
          ${award.name}
        </h3>

        <p>

          Congratulations on being
          recognised as

          <strong>
            ${award.title}
          </strong>

          for ${month}.

        </p>

      </div>

    </div>

  `;

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
