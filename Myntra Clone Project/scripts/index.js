
function addToBag(){

}

function displayItemsOnHomePage() {

  let itemsContainerElement = document.querySelector('.items-container');
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
    <img class="item-image" src="${item_image}" alt="item image">
    <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class = current-price>
      ${item.current_price}
      </span>
      <span class="original-price">
      Rs. ${item.original_price}
      </span>
      <span class="discount">
      (%${item.discount_percentage} OFF)
      </span>
    </div>
    <button class="btn-add-bag" onclick="addToBag">Add to Bag</button>
    </div>`;
});

}






