import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}){
    const [name, setName] = React.useState("name");
    const [description, setDescription] = React.useState("about");

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        if(currentUser.name && currentUser.about) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, isOpen])

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeAbout(evt) {
        setDescription(evt.target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({name, about: description})
    }
    function handleInputSelect(evt){
        evt.target.select()
    }
return(
    <PopupWithForm
        title='Редактировать профиль'
        name='profile'
        buttonSubmitText='Сохранить'
        onSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
    >
        <section className="popup__section">
            <input className="popup__input popup__input_type_name"
                   type="text"
                   placeholder="Ваше имя"
                   name="name" value={name}
                   minLength="2" maxLength="40"
                   onChange={handleChangeName}
                   onFocus={handleInputSelect}
                   required
            />
            <span className="popup__input-error"/>
        </section>
        <section className="popup__section">
            <input className="popup__input popup__input_type_profession"
                   type="text"
                   placeholder="Род вашей деятельности"
                   name="about" value={description}
                   minLength="2" maxLength="200"
                   onChange={handleChangeAbout}
                   onFocus={handleInputSelect}
                   required
            />
            <span className="popup__input-error"/>
        </section>
    </PopupWithForm>
)
}

export default EditProfilePopup