const images = Array.from(document.querySelectorAll("img"));

console.log(typeof images);

let srcOfImages = [];

images.forEach((element) => {
  console.log(element.getAttribute("src"));
  srcOfImages.push(element.getAttribute("src"));
});

console.log(srcOfImages);
