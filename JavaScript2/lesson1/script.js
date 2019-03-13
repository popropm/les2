const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 }
];

const value = 250;
const renderGoodsItem = (title, price = value) =>
    `<div class="goods-item">
        <h3>${title}</h3>
        <p>${price}</p>
        <div class="button">Добавить</div>
    </div>`;



const renderGoodsList = list => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

window.onload = () => {
    renderGoodsList(goods);
};
let GoodsList = document.querySelector('.goods-list');
GoodsList.sumAllItem = function () {
    let sum = 0;
    for (let i in goods) {
        if (goods[i].price) {
            sum += goods[i].price
        } else {
            sum += valuedddddd
        }
    }
    return sum
};

console.log(GoodsList.sumAllItem())
