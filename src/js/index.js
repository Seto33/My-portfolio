"use strict";
import "./language/index.js";

//Burger
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
	nav.classList.toggle("nav_active");
	burger.classList.toggle("burger_active");
});


//Slider
export function slider(elem) {
	const slider = document.querySelector(`[data-slider="${elem}"]`);
	const sliderList = slider.querySelector(".slider__list");
	const sliderSlides = slider.querySelectorAll(".slider__slide");
	const sliderButtonPrev = slider.querySelector(".slider__button--prev");
	const sliderButtonNext = slider.querySelector(".slider__button--next");

	sliderSlides.forEach(slide => {
		sliderButtonPrev.addEventListener("click", () => {
			sliderList.scrollBy({
				left: -slide.offsetWidth,
				behavior: "smooth",
			});
		});

		sliderButtonNext.addEventListener("click", () => {
			sliderList.scrollBy({
				left: slide.offsetWidth,
				behavior: "smooth",
			});

			if (sliderList.scrollLeft === sliderList.scrollWidth - sliderList.offsetWidth) {
				sliderList.scrollLeft = 0;
			}
		});
	});

	return slider;
};

slider("portfolio");


//popup
const button = document.querySelector(".contacts__button");
const popup = document.querySelector(".popup");

button.addEventListener("click", () => {
	popupToggle(true);
});

const PopupButtonClose = document.querySelector(".popup__button-close");

PopupButtonClose.addEventListener("click", () => popupToggle());

window.addEventListener("click", event => {
	if (event.target === popup) {
		popupToggle();
	}
});

const FormButton = document.querySelector(".form__button");

FormButton.addEventListener("click", () => popupToggle());

function popupToggle(toggle = false) {

	popup.classList.toggle("popup_open");
	document.body.style.paddingRight = toggle ? window.innerWidth - document.body.offsetWidth + 'px' : 0;
	popup.style.paddingRight = toggle ? window.innerWidth - document.body.offsetWidth + 'px' : 0;
	document.body.style.overflow = toggle ? "hidden" : "auto";
	Array.from(document.body.children).forEach(element => {
		toggle ? element.setAttribute("inert", "") : element.removeAttribute("inert");
		toggle ? popup.removeAttribute("inert") : popup.setAttribute("inert", "");
	});
};

// ScroollTo

function scrollToGo() {
	const links = document.querySelectorAll(".nav__link");

	links.forEach(link => {
		link.addEventListener ("click", function (event){
			event.preventDefault();

			const goToId = link.getAttribute("href");

			const findId = document.querySelector(goToId) ?.offsetTop;

				window.scrollTo({
				top: findId,
				left: 0,
				behavior: "smooth"
			});

		});
	});
};
scrollToGo();

