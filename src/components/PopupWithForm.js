function PopupWithForm({title, name, buttonSubmitText, children, isOpen, onClose, onSubmit}){
    return(
            <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
                <div className="popup__overlay">
                    <form className="popup__form" name={`form-edit-${name}`} onSubmit={onSubmit} noValidate>
                        <button className="popup__close" aria-label="Закрыть" type="reset" onClick={onClose}/>
                        <h3 className="popup__edit">{title}</h3>
                        {children}
                        <button className="popup__save" type="submit">{buttonSubmitText}</button>
                    </form>
                </div>
            </div>
    )
}
export default PopupWithForm