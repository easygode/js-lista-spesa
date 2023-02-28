'use strict';

const shoppingList = [
    'Milk',
    'Rice',
    'Noodles',
    'Biscuits',
    'Besciamella',
    'Flour',
    'Cubes',
    'Sugar',
    'Potato Chips',
    'Mayonese'
]

const list = document.querySelector('.shopping-list');


let i = 0;
while (i < shoppingList.length) {
    const li = document.createElement("li");
    li.append(shoppingList[i]);
    list.append(li);
    i++;
}