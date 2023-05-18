window.onload = function () {
  addArticleButtons();
  randomChangeBackgroundColor();
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

function randomChangeBackgroundColor(){
  const colors = [
    "#56CCF2", // Light Blue
    "#2F80ED", // Azure
    "#9B51E0", // Violet
    "#BB6BD9", // Light Violet
    "#6FCF97", // Light Green
    "#27AE60", // Dark Green
    "#F2994A", // Yellow Orange
    "#EB5757", // Red
    "#F2C94C", // Yellow
    "#333333", // Dark Grey
    "#828282", // Grey
    "#BDBDBD", // Light Grey
    "#F7F2E8", // Cream
  ];
  
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementsByTagName('header')[0].style.background = randomColor;
}
