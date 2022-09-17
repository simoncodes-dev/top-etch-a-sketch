const DEFAULT_SQUARE_SIZE = 16
const easContainer = document.getElementById('eas-container')
const resetBtn = document.getElementById('reset-btn')
const currentSizeBox = document.getElementById('current-size-box')
const sizeSlider = document.getElementById('square-size-slider')
const sliderLabel = document.getElementById('slider-label')
const randomColor = document.getElementById('random-color-toggle')
// Reset button functionality

const reset = () => {
    const colored = document.querySelectorAll('.hovered')
    colored.forEach(el => el.classList.remove('hovered'))
}

const removeGrid = () => {
    while (easContainer.firstChild) {
        easContainer.removeChild(easContainer.firstChild)
    }
}

// const hoverOver = (square) => {
//     if (randomColor.checked) {
//         square.classList.add('hovered-random')
//         square.style.backgroundColor
//     }
// }

// Generate the Grid

const createGrid = (size) => {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        row.classList.add(`row-${i + 1}`)
        easContainer.appendChild(row)
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.addEventListener('mouseover', () => {
                square.classList.add('hovered')
            })
            row.appendChild(square)
        }
    }
}



const newGrid = () => {
    const newSize = sizeSlider.value;
    sliderLabel.innerHTML = newSize;
    removeGrid()
    createGrid(newSize)
}

resetBtn.addEventListener('click', reset)
sizeSlider.addEventListener('change', newGrid)

sizeSlider.innerHTML = DEFAULT_SQUARE_SIZE;
createGrid(DEFAULT_SQUARE_SIZE);
