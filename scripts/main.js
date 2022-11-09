const popup = document.querySelector(".popup")
const popupForm = document.querySelector(".popup__form")
const popupClose = document.querySelector(".popup__close")

const profileName = document.querySelector(".profile__name")
const profileDescription = document.querySelector(".profile__description")
const profileEdit = document.querySelector(".profile__edit")

const setProfileName = document.querySelector(".setProfileName")
const setProfileDescription = document.querySelector(".setProfileDescription")

function openPopup() {
  popup.classList.add("popup__opened")
}

function closePopup() {
  popup.classList.remove("popup__opened")
}

function userData() {
  setProfileName.value = profileName.textContent
  setProfileDescription.value = profileDescription.textContent
  openPopup()
}

function saveData() {
  profileName.textContent = setProfileName.value
  profileDescription.textContent = setProfileDescription.value
  closePopup()
}

popupForm.addEventListener("submit", function (evt) {
  evt.preventDefault()
  saveData()
})

profileEdit.addEventListener("click", userData)
popupClose.addEventListener("click", closePopup)