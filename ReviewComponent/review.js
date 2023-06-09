window.onload = function () {
  selectProduct();
  listenForKeypress();
};

function selectProduct() {
  let boughtElements = JSON.parse(localStorage.getItem("cart")).map(
    (be) => be.item
  );

  let dropdown = document.getElementById("bought-products-dropdown");

  if (boughtElements) {
    boughtElements.forEach((value) => {
      let option = document.createElement("option");
      option.text = value;
      dropdown.add(option);
    });
  }

  dropdown.addEventListener("change", function () {
    submitReview(dropdown.value);
  });
}

function submitReview(reviewProduct) {
  let form = document.getElementById("review-form");
  form.style.display = "flex";

  console.log(reviewProduct);
}

function checkReview() {
  let form = document.getElementById("review-form");
  if (form.checkValidity()) {
    form.reset();
    location.href = "../main.html";
  }
}

function listenForKeypress() {
  document.addEventListener(
    "keyup",
    (event) => {
      if (event.code === "F2") {
        location.href = "../main.html";
      }
    },
    false
  );
}
