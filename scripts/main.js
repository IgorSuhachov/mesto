let popup = document.querySelector(".popup")
let popupForm = document.querySelector(".popup__form")
let popupClose = document.querySelector(".popup__close")

let profileName = document.querySelector(".profile__name")
let profileDescription = document.querySelector(".profile__description")
let profileEdit = document.querySelector(".profile__edit")

let setProfileName = document.querySelector(".setProfileName")
let setProfileDescription = document.querySelector(".setProfileDescription")

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

function SaveData(evt) {
  profileName.textContent = setProfileName.value
  profileDescription.textContent = setProfileDescription.value
  closePopup()
}

popupForm.addEventListener("submit", function (evt) {
  evt.preventDefault()
  SaveData()
})

profileEdit.addEventListener("click", userData)
popupClose.addEventListener("click", closePopup)