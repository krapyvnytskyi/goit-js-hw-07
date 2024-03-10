const qty = document.querySelectorAll('.item');
console.log(`Number of categories: ${qty.length}`);

const qtyLi = document.querySelectorAll('li.item');
qtyLi.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const qtyElem = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${qtyElem}`);
});
