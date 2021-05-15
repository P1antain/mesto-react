import React from "react";
import '../index.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagaPopup";

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState({});
    const [error, setError] = React.useState({ errorText: "", isActive: false });

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);

        setSelectedCard({});
    }
    function setErrorPopup(err, active) {
        setError({ ...error, errorText: err, isActive: active });
    }

    return (
      <div className="page">
        <Header/>
        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onError={setErrorPopup}
        />
        <Footer/>
        <PopupWithForm
            title='Редактировать профиль'
            name='profile'
            buttonSubmitText='Сохранить'
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            >
            <section className="popup__section">
                <input className="popup__input popup__input_type_name" type="text"
                       defaultValue="" placeholder="Ваше имя"
                       name="name" minLength="2" maxLength="40" required/>
                <span className="popup__input-error"/>
            </section>
            <section className="popup__section">
                <input className="popup__input popup__input_type_profession" type="text"
                       defaultValue="" placeholder="Род вашей деятельности"
                       name="about" minLength="2" maxLength="200" required/>
                <span className="popup__input-error"/>
            </section>
        </PopupWithForm>
        <PopupWithForm
            title="Новое место"
            name="card"
            buttonSubmitText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            >
            <section className="popup__section">
                <input className="popup__input popup__input_type_name" type="text"
                       defaultValue="" placeholder="Ваше имя"
                       name="name" minLength="2" maxLength="40" required/>
                <span className="popup__input-error"/>
            </section>
            <section className="popup__section">
                <input className="popup__input popup__input_type_profession" type="text"
                       defaultValue="" placeholder="Род вашей деятельности"
                       name="about" minLength="2" maxLength="200" required/>
                <span className="popup__input-error"/>
            </section>
        </PopupWithForm>
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            buttonSubmitText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
        >
            <section className="popup__section">
               <input className="popup__input popup__input_type_avatar" type="url"
                      placeholder="Ссылка на картинку"
                      name='link' required/>
               <span className="popup__input-error"/>
           </section>
        </PopupWithForm>
          <PopupWithForm
              title='Вы уверены?'
              name='remove'
              buttonSubmitText='Да'
              />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>
  );
}

export default App;
