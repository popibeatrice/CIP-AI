import '../styles/index.css';
const img = document.querySelector('img');
img.classList.add('rounded-xl');
let yes = 10;
yes = 5;
console.log(yes);
const GetCash = async function () {
    console.log('cash');
};

const mama = async function () {
    await GetCash();
};
mama();

console.log("hello world")