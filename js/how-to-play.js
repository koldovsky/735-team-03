(async function () {
  const responce = await fetch("api/rules.json");
  const rules = await responce.json();

  function renderRules(rules) {
    const rulesContainer = document.querySelector(".how-to-play__rules");
    rulesContainer.innerHTML = "";
    for (const rule of rules) {
      rulesContainer.innerHTML += `
            <div class="how-to-play__rule rule">
            <img class="rule__pic" src=${rule.image} alt=${rule.description}>
            <p class="rule__text">
                ${rule.text}
            </p>
        </div>`;
    }
  }
  renderRules(rules);
})();