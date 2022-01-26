//first exercise with querySelectorAll

const listElements = document.querySelectorAll("li");

listElements.forEach((element) => {
  console.log(element.innerHTML);
});
