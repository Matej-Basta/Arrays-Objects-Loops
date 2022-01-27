const images = Array.from(document.querySelectorAll("img"));

console.log(typeof images);

let alts = [];
let urls = [];

images.forEach((element) => {
  console.log(element.getAttribute("src"));
  urls.push(element.getAttribute("src"));

  console.log(element.getAttribute("alt"));
  alts.push(element.getAttribute("alt"));
});

console.log(urls);
console.log(alts);

console.log(images.length);

const shallowCopy = urls.slice(0, 3);
console.log(shallowCopy);

let first = [];

for (let i = 0; i < urls.length; i++) {
  first.push(urls[i]);

  if (i === 2) {
    break;
  }
}

console.log(first);

const last3Elements = urls.slice(urls.length - 3);
console.log(last3Elements);

let last = [];

for (let i = 0; i < urls.length; i++) {
  if (i < urls.length - 3) {
    continue;
  }
  last.push(urls[i]);
}

console.log(last);

const object = {
  urls: urls,
  alts: alts,
};

console.log(object);

const arrayWithCatInside = alts.filter((element) => element.match(/cat/i));

console.log(arrayWithCatInside);

const ul = document.querySelector(".list-of-photos__list");

alts.forEach((element) => {
  ul.innerHTML += "<li>" + element + "</li>";
});
