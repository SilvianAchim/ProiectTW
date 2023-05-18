window.onload = function () {
  addArticleButtons();
};

function addArticleButtons() {
  let articles = document.getElementsByTagName("article");
  Array.from(articles).forEach((article) => {
    let buyButton = document.createElement("button");
    buyButton.innerHTML = "Cumpara acum!";
    buyButton.classList.add("cumpara-button");
    buyButton.onclick = buyNow;
    article.appendChild(buyButton);
  });
}

function buyNow() {
  let boughtElement =
    this.parentElement.getElementsByTagName("h2")[0].textContent;

  console.log(boughtElement);

  let boughtElements = JSON.parse(localStorage.getItem("cart"));

  if (boughtElements == null) boughtElements = [];
  console.log(boughtElements);

  boughtElements.push(boughtElement);

  console.log(boughtElements);

  localStorage.setItem("cart", JSON.stringify(boughtElements));

  alert("Produsul a fost cumparat!");
}
