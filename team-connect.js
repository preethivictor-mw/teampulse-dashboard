document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderTeamConnect(
      dashboardData.teamConnect
    );

  }
);


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
