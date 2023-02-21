let item1 = document.querySelector(`#item1`);
let item2 = document.querySelector(`#item2`);
let item3 = document.querySelector(`#item3`);

function onItemClick(evt) {
	evt.target.classList.toggle(`item_on`);
}

item1.addEventListener(`click`, onItemClick);
item2.addEventListener(`click`, onItemClick);
item3.addEventListener(`click`, onItemClick);