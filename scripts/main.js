// PROFILE
const popupProfile = document.querySelector("#popupProfile")
const profileForm = document.querySelector("#profileForm")
const profileClose = document.querySelector("#profileClose")
const profileName = document.querySelector(".profile__name")
const profileDescription = document.querySelector(".profile__description")
const profileEdit = document.querySelector(".profile__edit")
const profileAdd = document.querySelector('.profile__add')
const newProfileName = document.querySelector("#setProfileName")
const newProfileDescription = document.querySelector("#setProfileDescription")

// EDIT
const popupEdit = document.querySelector('#popupEdit')
const cardForm = document.querySelector('#cardForm')
const cardClose = document.querySelector('#cardClose')

// ELEMENTS
const elementTemplate = document.querySelector('#card').content
const elementsContainer = document.querySelector('.elements')
const elementTitle = document.querySelector('#elementTitle')
const elementImage = document.querySelector('#elementImage')

// IMAGE
const popupImage = document.querySelector('#popupImage')
const imageClose = document.querySelector('#imageClose')
const imageElement = document.querySelector('.popup__image')
const imageText = document.querySelector('.popup__text')

// Открыть popup
function openPopup(popup) {
  popup.classList.add("popup_opened")
  // Закрытие по нажатию на Escape
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopup(popup)
    }
  })
  // Закрытие по нажатию overlay
  popup.addEventListener('click', function (evt) {
    if (evt.target === popup) {
      closePopup(popup)
    }
  })
}
// Закрыть popup
function closePopup(popup) {
  popup.classList.remove("popup_opened")
}
// Заполнить данные профиля
function setProfileData() {
  newProfileName.value = profileName.textContent
  newProfileDescription.value = profileDescription.textContent
  openPopup(popupProfile)
}
// Сохранить данные профиля
function saveProfileData() {
  profileName.textContent = newProfileName.value
  profileDescription.textContent = newProfileDescription.value
  closePopup(popupProfile)
}
// Отобразить карточки
function displayElement(card) {
  const element = elementTemplate.querySelector('.elements__card').cloneNode(true)
  const elementsTitle = element.querySelector('.elements__title')
  const elementsImage = element.querySelector('.elements__image')

  elementsImage.src = card.link
  elementsImage.alt = card.name
  elementsTitle.textContent = card.name

  element.querySelector('.elements__image').addEventListener('click', openPopupImage)

  element.querySelector('.elements__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like_active')
  })

  element.querySelector('.elements__trash').addEventListener('click', (evt) => {
    evt.target.closest('.elements__card').remove()
  })
  // Функция открытия popup картинки
  function openPopupImage() {
    imageElement.src = elementsImage.src
    imageElement.alt = elementsImage.alt
    imageText.textContent = elementsTitle.textContent
    openPopup(popupImage)
  }

  return element
}
// Вставить карточки
function addElement(card, container) {
  container.prepend(card)
}
// Создать карточки
function createElement() {
  const newElementData = {
    name: elementTitle.value,
    link: elementImage.value
  }

  const newElement = displayElement(newElementData)
  addElement(newElement, elementsContainer)

  cardForm.reset()

  closePopup(popupEdit)
}

initialCards.forEach(elementData => {
  const element = displayElement(elementData)
  addElement(element, elementsContainer)
})

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  saveProfileData()
})

cardForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  createElement()
})

profileEdit.addEventListener("click", setProfileData)
profileClose.addEventListener("click", () => closePopup(popupProfile))
profileAdd.addEventListener('click', () => openPopup(popupEdit))
cardClose.addEventListener('click', () => closePopup(popupEdit))
imageClose.addEventListener('click', () => closePopup(popupImage))