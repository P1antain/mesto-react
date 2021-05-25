import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}){
    const [link, setLink] = React.useState('');


    React.useEffect(() => {
        setLink('')
    }, [isOpen]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar({avatar: link});
    }

    function handleChangeAvatar(evt) {
        setLink(evt.target.value);
    }


    return(
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            buttonSubmitText="Сохранить"
            onSubmit={handleSubmit}
            isOpen={isOpen}
            onClose={onClose}
        >
            <section className="popup__section">
                <input className="popup__input popup__input_type_avatar"
                       type="url"
                       placeholder="Ссылка на картинку"
                       name="link" value={link}
                       onChange={handleChangeAvatar}
                       required
                />
                <span className="popup__input-error"/>
            </section>
        </PopupWithForm>
    )
}

export default EditAvatarPopup