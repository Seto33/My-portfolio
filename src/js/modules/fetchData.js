import { URL } from "../config-js/constants.js";
import { slider, getElements, rating } from "./index.js";

function getIsData(data) {
	data?.forEach((item) => {
		getElements(item.__component.slice(11), item);
	})
}

export function fetchData(lang = 'en') {
	const dataEnStr = localStorage.getItem('dataEn');
	const dataRuStr = localStorage.getItem('dataRu');

	const dataRuParse = JSON.parse(dataRuStr);
	const dataEnParse = JSON.parse(dataEnStr);

	const dataArrayStr = [dataEnStr, dataRuStr];

	dataArrayStr.forEach(item =>
		item && getIsData(lang === 'ru' ? dataRuParse : dataEnParse)
	);

	fetch(`${URL}/api/page?populate[content][populate]=desktop,mobile,list.img,links&locale=${lang}`)
		.then((response) => response.json())
		.then(({ data }) => {
			console.log(data);

			dataArrayStr.forEach(item => {
				JSON.stringify(data.content) !== item &&
					localStorage.setItem(data.locale === 'ru' ? 'dataRu' : 'dataEn', JSON.stringify(data.content)),
					getIsData(data.locale === 'ru' ? dataRuParse : dataEnParse);
			})

			dataArrayStr.forEach((item) => !item && getIsData(data.content))
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			document.querySelector('.loading')?.remove();
			slider('portfolio');
			rating();
		});
}