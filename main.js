window.onload = function () {
  addArticleButtons();
  randomChangeBackgroundColor();
  listenForKeypress();
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

function randomChangeBackgroundColor() {
  const colors = [
    "#FF5733",
    "#FF8D1A",
    "#E4FF1A",
    "#1AFFD5",
    "#1A9EFF",
    "#571AFF",
    "#D61AFF",
    "#FF1A75",
    "#FF5733",
    "#FF8D1A",
    "#E4FF1A",
    "#1AFFD5",
    "#1A9EFF",
    "#571AFF",
    "#D61AFF",
    "#FF1A75",
    "#FF5733",
    "#FF8D1A",
    "#E4FF1A",
    "#1AFFD5",
    "#1A9EFF",
    "#571AFF",
    "#D61AFF",
    "#FF1A75",
    "#FF5733",
    "#FF8D1A",
    "#E4FF1A",
    "#1AFFD5",
    "#1A9EFF",
    "#571AFF",
  ];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementsByTagName("header")[0].style.background = randomColor;
}

function listenForKeypress() {
  document.addEventListener(
    "keyup",
    (event) => {
      if (event.code === "Digit1") {
        location.href = "ReviewComponent/review.html";
      }
    },
    false
  );
}

setTimeout(function () {
  alert("Welcome to Amazon!");
  changeBackground();
}, 2000);

function changeBackground() {
  const colors = [
    "#FFB3B3",
    "#FFCC99",
    "#FFFF99",
    "#CCFFCC",
    "#CCFFFF",
    "#99CCFF",
    "#CC99FF",
    "#FFFFFF",
    "#FFCCCC",
    "#FFCC99",
    "#FFFFCC",
    "#CCFFCC",
    "#CCFFCC",
    "#99CCFF",
    "#CC99FF",
    "#FFCCCC",
    "#FFCC99",
    "#FFFFCC",
    "#CCFFCC",
    "#CCFFFF",
    "#99CCFF",
    "#CC99FF",
    "#FFCCCC",
    "#FFCC99",
    "#FFFFCC",
    "#CCFFCC",
    "#CCFFFF",
    "#99CCFF",
    "#CC99FF",
    "#FFCCCC",
  ];

  let i = 0;

  setInterval(function () {
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i == colors.length) {
      i = 0;
    }
  }, 2000);
}
