"use strict";
import { popupToggle, slider } from "./modules/index.js";
import "./language/index.js";
import { disableScroll, enableScroll } from "./librarys/scrollController.js";

//Burger
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link => {
	link.addEventListener("click", function () {
		nav.classList.remove("nav_active");
		burger.classList.remove("burger_active");
		enableScroll();
	})
})

burger.addEventListener("click", function () {
	nav.classList.toggle("nav_active");
	burger.classList.toggle("burger_active");
	if (burger.classList.contains("burger_active")) {
		disableScroll();
	}
	else{
		enableScroll();
	}
});

//popup
const button = document.querySelector(".contacts__button");
const popup = document.querySelector(".popup");

button.addEventListener("click", () => {
	popupToggle(true);
});

const PopupButtonClose = document.querySelector(".popup__button-close");

PopupButtonClose.addEventListener("click", () => popupToggle());

window.addEventListener("click", (event) => {
	if (event.target === popup) {
		popupToggle();
	}
});

const FormButton = document.querySelector(".form__button");

FormButton.addEventListener("click", () => popupToggle());

//slider

slider("portfolio");

