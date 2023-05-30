// Get the necessary elements
const subtractButton = document.getElementById('subtractButton');
const addButton = document.getElementById('addButton');
const countElement = document.getElementById('count');
const starsContainer = document.getElementById('starsContainer');

let count = 0;

// Update the count and stars display
function updateCount() {
    countElement.textContent = count;
    starsContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const star = document.createElement('img');
        star.src = 'pngwing.com.png';
        star.classList.add('star');
        starsContainer.appendChild(star);
    }
}


// Event listener for the subtract button
subtractButton.addEventListener('click', function () {
    if (count > 0) {
        count--;
        updateCount();
    }
});


// Event listener for the add button
addButton.addEventListener('click', function () {
    count++;
    updateCount();
});


// Initial update of the count display
updateCount();
