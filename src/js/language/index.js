import { langList } from "./langList.js";

const buttonRu = document.querySelectorAll(".language__button--ru");
const buttonEng = document.querySelectorAll(".language__button--eng");

let currentLanguage =
	localStorage.getItem("language") ||
	window.location.hash.substring(1) ||
	window.navigator.language.substring(0, 2) ||
	"en";

function changeLanguage(lang) {

	document.querySelectorAll(`[data-lang]`).forEach(item =>{
		const data = item.dataset.lang;


		const [key,value] = data.split("-");

		if(key && value && lang){

			item.textContent = langList[key][value][lang];
			if(item.placeholder){
				item.placeholder = langList[key][value][lang];
			}
		}

	});

	localStorage.setItem("language", lang);
	window.location.hash = lang;

}

changeLanguage(currentLanguage);

buttonRu.forEach((button, index) => {
	button.classList.toggle("language__button_active", currentLanguage === "ru");

	button.addEventListener("click", () => {
		buttonEng[index].classList.remove("language__button_active");
		button.classList.add("language__button_active");
		changeLanguage("ru");
	});
});

buttonEng.forEach((button, index) => {
	button.classList.toggle("language__button_active", currentLanguage === "en");

	button.addEventListener("click", () => {
		buttonRu[index].classList.remove("language__button_active");
		button.classList.add("language__button_active");
		changeLanguage("en");
	});
});
