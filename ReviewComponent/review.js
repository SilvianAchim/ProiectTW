function submitReview() {
  let form = document.getElementById("review-form");
  if (form.checkValidity()) {
    form.reset();
    location.href = "../tema.html";
  }
}
