let counterValue = 0;

const counterBox = document.querySelector('#counter');
const counterValueEl = document.querySelector('#value')
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
    counterValue += 1;

    counterValueEl.textContent = counterValue;
})

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;

    counterValueEl.textContent = counterValue;
})
