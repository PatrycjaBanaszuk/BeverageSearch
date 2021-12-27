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

input.addEventListener('keyup', drinksSearch)
