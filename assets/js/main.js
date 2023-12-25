const faqItems = document.querySelectorAll(".faq-item");

window.onload = function () {
  const firstAnswer = document.querySelector(".faq-item p");
  firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
  faqItems[0].classList.add("active");
  const firstPlusIcon = faqItems[0].querySelector(
    ".faq-item__title .faq-item__action .icon-plus"
  );
  const firstMinusIcon = faqItems[0].querySelector(
    ".faq-item__title .faq-item__action .icon-minus"
  );
  firstPlusIcon.style.display = "none";
  firstMinusIcon.style.display = "block";
};

function handleClick() {
  this.classList.toggle("active");
  var panel = this.children[1];
  const plusIcon = this.querySelector(
    ".faq-item__title .faq-item__action .icon-plus"
  );
  const minusIcon = this.querySelector(
    ".faq-item__title .faq-item__action .icon-minus"
  );
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
  if (this.classList.contains("active")) {
    plusIcon.style.display = "none";
    minusIcon.style.display = "block";
  } else {
    plusIcon.style.display = "block";
    minusIcon.style.display = "none";
  }
}

faqItems.forEach((item) => item.addEventListener("click", handleClick));
