function Card({card, onCardClick}){
    function handleClick(){
        onCardClick(card);
    }
    return(
            <div className="element">
                <img src={`${card.link}`}
                     alt=""
                     className="element__image"
                     onClick={handleClick}
                />
                <div className="element__container">
                    <h2 className="element__name">{card.name}</h2>
                    <button className="element__like"
                            aria-label="Поставить лайк"
                            type="button">
                        <span className="element__counter">{card.likes.length}</span>
                    </button>
                </div>
                <button className="element__delete" type="button" aria-label="Удалить"/>
            </div>

    )
}

export default Card