function PopupWithForm({title, name, buttonSubmitText, children,isOpen, onClose}){
    return(
            <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
                <div className="popup__overlay">
                    <form className="popup__form" name={`form-edit-${name}`} noValidate>
                        <button className="popup__close" aria-label="Закрыть" type="reset" onClick={onClose}/>
                        <h3 className="popup__edit">{title}</h3>
                        {children}
                        <button className="popup__save" type="submit">{buttonSubmitText}</button>
                    </form>
                </div>
            </div>
    //     <div className="popup popup_type_add-profile">
    //         <div className="popup__overlay popup__overlay_profile">
    //             <form className="popup__form popup__form_profile" name="editProfile" noValidate>
    //                 <button className="popup__close popup__close_profil" aria-label="Закрыть" type="reset"/>
    //                 <h3 className="popup__edit popup__edit_theme-profil">Редактировать профиль</h3>
    //                 <section className="popup__section">
    //                     <input className="popup__input popup__input_type_name" type="text" defaultValue="" placeholder="Ваше имя"
    //                            name="name" minLength="2" maxLength="40" required/>
    //                     <span className="popup__input-error"/>
    //                 </section>
    //                 <section className="popup__section">
    //                     <input className="popup__input popup__input_type_profession" type="text" defaultValue=""
    //                            placeholder="Род вашей деятельности" name="about" minLength="2" maxLength="200" required/>
    //                     <span className="popup__input-error"/>
    //                 </section>
    //                 <button className="popup__save popup__save_add-profile" type="submit">Сохранить</button>
    //             </form>
    //         </div>
    //     </div>
    // <div className="popup popup_type_add-image">
    //     <div className="popup__overlay popup__overlay_image">
    //         <form className="popup__form popup__form_image" name="editImage" noValidate>
    //             <button className="popup__close popup__close_image" aria-label="Закрыть" type="reset"/>
    //             <h3 className="popup__edit popup__edit_theme-image">Новое место</h3>
    //             <section className="popup__section">
    //                 <input className="popup__input popup__input_type_image" type="text" placeholder="Название" defaultValue=""
    //                        name="title" minLength="2" maxLength="30" required/>
    //                 <span className="popup__input-error"/>
    //             </section>
    //             <section className="popup__section">
    //                 <input className="popup__input popup__input_type_src" type="url" placeholder="Ссылка на картинку" defaultValue=""
    //                        name='link' required/>
    //                 <span className="popup__input-error"/>
    //             </section>
    //             <button className="popup__save popup__save_add-image" type="submit">Создать</button>
    //         </form>
    //     </div>
    // </div>
    // <div className="popup popup_type_add-card">
    //     <div className="popup__overlay popup__overlay_card">
    //         <div className="popup__form-card">
    //             <button className="popup__close popup__close_card" aria-label="Закрыть" type="reset"/>
    //             <img src="#" alt="" className="popup__image"/>
    //             <h3 className="popup__name"/>
    //         </div>
    //     </div>
    // </div>
    //
    // <div className="popup popup_type_add-avatar">
    //     <div className="popup__overlay popup__overlay_avatar">
    //         <form className="popup__form popup__form_avatar" name="editAvatar" noValidate>
    //             <button className="popup__close popup__close_avatar" aria-label="Закрыть" type="reset"/>
    //             <h3 className="popup__edit popup__edit_theme-avatar">Обновить аватар</h3>
    //             <section className="popup__section">
    //                 <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на картинку"
    //                        name='link' required/>
    //                 <span className="popup__input-error"/>
    //             </section>
    //             <button className="popup__save popup__save_add-avatar" type="submit">Создать</button>
    //         </form>
    //     </div>
    // </div>
    // <div className="popup popup_type_delete">
    //     <div className="popup__overlay popup__overlay_delete">
    //         <form className="popup__form popup__form_delete" name="deleteCard">
    //             <button className="popup__close popup__close_image" aria-label="Закрыть" type="reset"/>
    //             <h3 className="popup__edit popup__edit_theme-image">Вы уверены?</h3>
    //             <button className="popup__save" type="submit">Да</button>
    //         </form>
    //     </div>
    // </div>

    );
}
export default PopupWithForm