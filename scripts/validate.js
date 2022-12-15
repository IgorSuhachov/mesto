const validationProperties = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save',
	inactiveButtonClass: 'popup__save_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
}
// Отобразить ошибки в полях ввода
const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
	inputElement.classList.add(validationProperties.inputErrorClass)
	errorElement.textContent = errorMessage
	errorElement.classList.add(validationProperties.errorClass)
}
// Спрятать ошибки в полях ввода
const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
	inputElement.classList.remove(validationProperties.inputErrorClass)
	errorElement.classList.remove(validationProperties.errorClass)
	errorElement.textContent = ''
}
// Проверить поле ввода на валидность
const checkInputValidity = (formElement, inputElement) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage)
	} else {
		hideInputError(formElement, inputElement)
	}
}

const setEventListeners = (formElement, validationProperties) => {
	const inputList = Array.from(formElement.querySelectorAll(validationProperties.inputSelector))
	const buttonElement = formElement.querySelector(validationProperties.submitButtonSelector)

	toggleButtonState(inputList, buttonElement)

	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', function () {
			checkInputValidity(formElement, inputElement)
			toggleButtonState(inputList, buttonElement, validationProperties.inactiveButtonClass)
		})
	})
}
const enableValidation = (validationProperties) => {
	const formList = Array.from(document.querySelectorAll(validationProperties.formSelector))

	formList.forEach((formElement) => {
		formElement.addEventListener('submit', function (evt) {
			evt.preventDefault()
		})
		setEventListeners(formElement, validationProperties)
	})
}
// Проверить отсутствие валидации
function hasInvalidInput(inputList) {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid
	})
}

function disableSumbitButton(buttonElement) {
	buttonElement.disabled = true
	buttonElement.classList.add(validationProperties.inactiveButtonClass)
}

function enableSumbitButton(buttonElement) {
	buttonElement.disabled = false
	buttonElement.classList.remove(validationProperties.inactiveButtonClass)
}

// Переключение статуса кнопки submit
function toggleButtonState(inputList, buttonElement) {
	if (hasInvalidInput(inputList)) {
		disableSumbitButton(buttonElement)
	} else {
		enableSumbitButton(buttonElement)
	}
}

enableValidation(validationProperties)
