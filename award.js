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


  renderAwards(
    data.teamAward,
    data.reportMonth
  );

}


function renderAwards(
  awards,
  month
) {

  const container =
    document.getElementById(
      "teamAwardGrid"
    );


  if (!container) {

    return;

  }


  container.innerHTML =
    "";


  // Supports both the old single-object format
  // and the new array format.
  const awardList =
    Array.isArray(awards)
      ? awards
      : awards
        ? [awards]
        : [];


  if (!awardList.length) {

    container.innerHTML =
      "<p>No awards available.</p>";

    return;

  }


  awardList.forEach(
    function(award) {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "award-card";


      const imageHtml =
        award.image

          ? `

            <img
              class="award-photo"
              src="${escapeHtml(
                award.image
              )}"
              alt="${escapeHtml(
                award.name
              )}"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >

            <div
              class="award-placeholder"
              style="display:none;"
            >
              ${getInitial(
                award.name
              )}
            </div>

          `

          : `

            <div
              class="award-placeholder"
            >
              ${getInitial(
                award.name
              )}
            </div>

          `;


      card.innerHTML = `

        ${imageHtml}

        <div class="award-details">

          <span class="award-title">

            ${escapeHtml(
              award.title
            )}

          </span>


          <h3>

            ${escapeHtml(
              award.name
            )}

          </h3>


          <p>

            Congratulations on being
            recognised as

            <strong>

              ${escapeHtml(
                award.title
              )}

            </strong>

            for

            ${escapeHtml(
              month
            )}.

          </p>

        </div>

      `;


      container.appendChild(
        card
      );

    }
  );

}


function getInitial(
  name
) {

  const text =
    String(
      name || ""
    ).trim();


  return text
    ? escapeHtml(
        text.charAt(0).toUpperCase()
      )
    : "A";

}


function escapeHtml(
  value
) {

  return String(
    value == null
      ? ""
      : value
  )

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#39;"
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
