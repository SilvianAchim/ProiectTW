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
  let boughtElements = JSON.parse(localStorage.getItem("cart"));
  if (boughtElements == null) boughtElements = [];

  const boughtElementTitle =
    this.parentElement.getElementsByTagName("h2")[0].textContent;
  let boughtElement = boughtElements.find(
    (be) => be.item === boughtElementTitle
  );
  if (boughtElement) {
    boughtElement.quantity++;
  } else {
    boughtElement = {
      item: boughtElementTitle,
      quantity: 1,
    };
    boughtElements.push(boughtElement);
  }
  localStorage.setItem("cart", JSON.stringify(boughtElements));

  alert("Produsul a fost cumparat!");
}
