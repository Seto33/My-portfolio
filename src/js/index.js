"use strict";
import { popupToggle } from "./modules/index.js";
import "./language/index.js";

//Burger
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
	nav.classList.toggle("nav_active");
	burger.classList.toggle("burger_active");
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




fetch('https://fmahwcxqaoqqgfkinrue.supabase.co', {
	method: "POST",
	body: "hello"
}).then(res => res.json())
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.error(error);
	});
