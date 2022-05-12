// =====================================================
// GRID ITEM 1
const mainImage = document.querySelector('#yoga-girl');
const subtitle = document.querySelector('#subtitle');
const textContent = document.querySelector('#text-content');
const langBoxItem = document.querySelectorAll('.lang-box1');

for (let i = 0; i < projectInformation.length; i++) {
  if (i === 0) {
    mainImage.src = projectInformation[i].featuredImage;
    subtitle.innerHTML = projectInformation[i].name;
    textContent.innerHTML = projectInformation[i].description;
    langBoxItem[0].innerHTML = projectInformation[i].technologies.technology1;
    langBoxItem[1].innerHTML = projectInformation[i].technologies.technology2;
    langBoxItem[2].innerHTML = projectInformation[i].technologies.technology3;
    langBoxItem[3].innerHTML = projectInformation[i].technologies.technology4;
  }
}
// ======================================================

// ======================================================
// GRID ITEM 2
const flexContainer2 = document.querySelectorAll('.grid-item2');
const subtitle2 = document.querySelectorAll('.subtitle2');
const textContent2 = document.querySelectorAll('.text-content2');
const langBoxItem2 = document.querySelectorAll('.lang-box2');

const generateContent = (index, lb1, lb2, lb3) => {
  for (let i = 0; i < projectInformation.length; i++) {
    if (i === index) {
      subtitle2[i - 1].innerHTML = projectInformation[i].name;
      textContent2[i - 1].innerHTML = projectInformation[i].shortDescription;
      langBoxItem2[lb1].innerHTML = projectInformation[i].technologies.technology1;
      langBoxItem2[lb2].innerHTML = projectInformation[i].technologies.technology2;
      langBoxItem2[lb3].innerHTML = projectInformation[i].technologies.technology3;
    }
  }
};

generateContent(1, 0, 1, 2);
generateContent(2, 3, 4, 5);
generateContent(3, 6, 7, 8);
generateContent(4, 9, 10, 11);
generateContent(5, 12, 13, 14);
generateContent(6, 15, 16, 17);
generateContent(7, 18, 19, 20);

// ======================================================
