const popup = document.querySelector(".popup")
const popupForm = document.querySelector(".popup__form")
const popupClose = document.querySelector(".popup__close")

const profileName = document.querySelector(".profile__name")
const profileDescription = document.querySelector(".profile__description")
const profileEdit = document.querySelector(".profile__edit")

const newProfileName = document.querySelector("#setProfileName")
const newProfileDescription = document.querySelector("#setProfileDescription")

function openPopup() {
  popup.classList.add("popup_opened")
}

function closePopup() {
  popup.classList.remove("popup_opened")
}

function setData() {
  newProfileName.value = profileName.textContent
  newProfileDescription.value = profileDescription.textContent
  openPopup()
}

function saveData() {
  profileName.textContent = newProfileName.value
  profileDescription.textContent = newProfileDescription.value
  closePopup()
}

popupForm.addEventListener("submit", function (evt) {
  evt.preventDefault()
  saveData()
})

profileEdit.addEventListener("click", setData)
popupClose.addEventListener("click", closePopup)