const pricingBtn = document.querySelector(".plan__toggle__button"),
    prices = [...document.querySelectorAll(".plan__articles__item-price")],
    plans = [...document.querySelectorAll(".plan__articles__item-plan")];

const changePrice = async (plan) => {
    try {
        const res = await fetch("data.json")
        const data = await res.json()
        prices.forEach((price, index) => {
            price.textContent = data[plan][price.dataset.price]
            plans[index].textContent = data[plan]['title']
        });
    } catch (error) {
        pricingBtn.classList.remove('yearly')
        alert("Oooops, something was wrogn changing the prices")
    }
}

document.addEventListener('click', e => {
    if(e.target === pricingBtn) {
        pricingBtn.classList.toggle('yearly')
        if (pricingBtn.classList.contains('yearly')) changePrice('yearly')
        else changePrice('monthly')
    }
})