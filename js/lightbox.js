const images = [...document.querySelectorAll("img[data-lightbox-img]")],
	lightboxImage = document.querySelector(".lightbox-img"),
	lightboxContent = document.querySelector(".lightbox__container");

const dataImages = []

// Getting data of every image
images.forEach((img) => {
	dataImages.push({
		src: img.getAttribute('src'),
		alt: img.getAttribute('alt')
	})
})

const changeImage = index => {
	lightboxImage.setAttribute('src', dataImages[index].src)
	lightboxImage.setAttribute('alt', dataImages[index].alt)
	lightboxImage.setAttribute('data-index', index)
	if(lightboxImage.complete) lightboxContent.classList.remove('no-ready')
	else lightboxContent.classList.add('no-ready')
}

document.addEventListener('click', e => {
	if (e.target.matches(".lightbox") || e.target.matches(".lightbox__button.lightbox__button--close")) {
		document.body.classList.remove('active-lightbox')
		lightboxContent.classList.remove("no-ready")
		lightboxImage.removeAttribute('src')
		lightboxImage.removeAttribute('alt')
		lightboxImage.removeAttribute('data-index')
	}

	else if (e.target.matches("img[data-lightbox-img]")) {
		document.body.classList.add('active-lightbox')
		lightboxContent.classList.add('no-ready')
		lightboxImage.setAttribute('src', dataImages[e.target.dataset.lightboxImg].src)
		lightboxImage.setAttribute('alt', dataImages[e.target.dataset.lightboxImg].alt)
		lightboxImage.setAttribute('data-index', e.target.dataset.lightboxImg)
		if(lightboxImage.complete) lightboxContent.classList.remove('no-ready')
	}

	// Next image in lightbox
	else if (e.target.matches(".lightbox__button.lightbox__button--next")) {
		// When last image is shown
		if (lightboxImage.getAttribute('data-index') == images.length-1) {
			lightboxImage.setAttribute('src', dataImages[0].src)
			lightboxImage.setAttribute('alt', dataImages[0].alt)
			lightboxImage.setAttribute('data-index', 0)
		} else {
			let index = parseInt(lightboxImage.getAttribute('data-index')) + 1
			changeImage(index)
		}
	}

	// Previous image in lightbox
	else if (e.target.matches(".lightbox__button.lightbox__button--prev")) {
		if (lightboxImage.getAttribute('data-index') == 0) {
			lightboxImage.setAttribute('src', dataImages[dataImages.length-1].src)
			lightboxImage.setAttribute('alt', dataImages[dataImages.length-1].alt)
			lightboxImage.setAttribute('data-index', dataImages.length-1)
		} else {
			let index = parseInt(lightboxImage.getAttribute('data-index')) - 1
			changeImage(index)
		}
	}
})