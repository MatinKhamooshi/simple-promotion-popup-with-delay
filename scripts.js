import * as other from "./other.js";
import w from "./other.js";

const ulElem = document.querySelector('ul');

other.users.push({id: other.users.length + 1, name: 'Mahla', age: 20})

for (let user of other.users) {
    let obj = other.addUserToList (user)
    let name = obj.name
    let age = obj.age

    ulElem.insertAdjacentHTML('beforeend', `<li>${name} ${age.toString().padStart(2,'0')}</li>`);
}

ulElem.insertAdjacentHTML('beforeend', `<li>${w}</li>`);

const popup = document.getElementById('promotion-popup');

if (window.location.includes('/طب-سنتی-ایرانی/')) {
    setTimeout(() => {
        popup.classList.add('active');
    }, 30000);
}

popup.addEventListener('click', (e) => {
    if (e.target === popup.querySelector('#close-popup')) {
        popup.classList.remove('active');
    }
});