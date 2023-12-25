const faqItems = document.querySelectorAll(".faq-item");

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
