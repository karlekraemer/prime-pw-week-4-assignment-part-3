console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = ['item', 'wallet', 'table'];
function addItem( item) {
    return true
}
console.log(addItem('item'));

function listItems() {
    for (let i = 0; i < basket.length; i++)
    console.log(listItems('item'));
}

// function empty() {
//     return basket.length = 0;
// }

// console.log(empty());
// console.log ( 'basket has', basket);

function empty() {
    while (basket.length > 0){
        basket.pop();
    }
}
empty();
console.log(basket);