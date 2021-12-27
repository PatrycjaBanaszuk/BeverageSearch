const input = document.querySelector('input')
const drinksList = document.querySelectorAll('li')

const drinksSearch = () => {
	drinksList.forEach(drink => {
		if (drink.textContent.toLowerCase().indexOf(input.value.toLowerCase()) !== -1) {
			drink.style.display = 'flex'
		} else {
			drink.style.display = 'none'
		}
	})
}

//solution with RegExp below:

// const drinksSearch = () => {
// 	drinksList.forEach(drink => {
// 		const match = new RegExp(input.value, 'i').test(drink.textContent)

// 		if (!match) {
// 			drink.style.display = 'none'
// 		} else {
// 			drink.style.display = 'flex'
// 		}
// 	})
// }

input.addEventListener('keyup', drinksSearch)
