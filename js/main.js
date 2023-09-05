const nav =  document.querySelector(".nav");

const changeStyles = () => {
	if (window.scrollY >= 200) nav.classList.add("nav-2")
	else nav.classList.remove("nav-2")
}

document.addEventListener('click', e => {
    if (e.target.matches(".nav__hamburger")) {
    	document.body.classList.toggle("show-menu")
    }

    else if (e.target.matches(".nav__menu-links")) {
    	document.body.classList.remove("show-menu")
    }
})

document.addEventListener('DOMContentLoaded', changeStyles)

window.addEventListener('scroll', changeStyles)