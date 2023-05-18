window.onload = function () {
  selectProduct();
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
  form.style.display = "block";

  console.log(reviewProduct);
}

function checkReview() {
  let form = document.getElementById("review-form");
  if (form.checkValidity()) {
    form.reset();
    location.href = "../main.html";
  }
}
