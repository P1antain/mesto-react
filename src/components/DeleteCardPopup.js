import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup({isOpen, onClose, card, onSubmitDelete}){

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmitDelete(card);
    }
    return(
        <PopupWithForm
            buttonSubmitText="Да"
            title='Вы уверены?'
            name='remove'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        />
    )
}

export default DeleteCardPopup