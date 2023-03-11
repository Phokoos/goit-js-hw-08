import throttle from 'lodash.throttle';	

const elInputForm = document.querySelector(".feedback-form");
const elInputEmail = document.querySelector("[name=email]");
const elInputMessage = document.querySelector("[name=message]");

const DATAS_STORAGE_KEY = 'feedback-form-state';

let formDates = {
	email: "",
	message: ""
}

try {
	if (JSON.parse(localStorage.getItem(DATAS_STORAGE_KEY)) !== null) {
		formDates = JSON.parse(localStorage.getItem(DATAS_STORAGE_KEY));
	}
} catch (error) {
	console.log(error);
}

elInputEmail.value = formDates.email;
elInputMessage.value = formDates.message;

elInputForm.addEventListener("input",  throttle(event => writeFormValueToStorage(event), 1000));

function writeFormValueToStorage(event) {
	formDates[event.target.name] = event.target.value;
	
	localStorage.setItem(DATAS_STORAGE_KEY, JSON.stringify(formDates));
}

elInputForm.addEventListener("submit", (event) => {
	event.preventDefault();

	console.log(formDates);

	elInputEmail.value = "";
	elInputMessage.value = "";
	
	localStorage.removeItem(DATAS_STORAGE_KEY);
})