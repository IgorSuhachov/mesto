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
const editForm = document.querySelector('#editForm')
const editClose = document.querySelector('#editClose')

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

// Данные карточек
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]
// Открыть popup
function openPopup(popup) {
  popup.classList.add("popup_opened")
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopup(popup)
    }
  })
}
// Закрыть popup
function closePopup(popup) {
  popup.classList.remove("popup_opened")
}
// Заполнить данные профиля
function setData() {
  newProfileName.value = profileName.textContent
  newProfileDescription.value = profileDescription.textContent
  openPopup(popupProfile)
}
// Сохранить данные профиля
function saveData() {
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

  editForm.reset()

  closePopup(popupEdit)
}

initialCards.forEach(elementData => {
  const element = displayElement(elementData)
  addElement(element, elementsContainer)
})

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  saveData()
})

editForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  createElement()
})

profileEdit.addEventListener("click", setData)
profileClose.addEventListener("click", () => closePopup(popupProfile))
profileAdd.addEventListener('click', () => openPopup(popupEdit))
editClose.addEventListener('click', () => closePopup(popupEdit))
imageClose.addEventListener('click', () => closePopup(popupImage))