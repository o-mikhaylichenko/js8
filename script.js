// задание 1 
const arr = [3, 5, 9, 10, 1];

const arrFiltered = arr.filter(item => item <= 5);

const app = document.querySelector('#app');

for (let i = 0; i < arrFiltered.length; i++) {
    const arrEl = document.createElement('div');
    arrEl.classList.add('arrayNum');

    const paragraphNum = document.createElement('p');
    paragraphNum.classList.add('paragraph');
    paragraphNum.textContent = arrFiltered[i];

    arrEl.append(paragraphNum);

    app.append(arrEl);

}

// задание 2
const user = {
    name: 'Alex',
    age: 30,
    email: "alex@example.com",
    address: {
        city: "New York",
        zip: "10001"
    }
}

const { name, address: { city, zip } } = user;

const userInfo = { name, city }

console.log(userInfo);