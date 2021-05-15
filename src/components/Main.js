import React from "react";
import api from "../utils/Api.js";
import '../index.css'
import Card from "./Card.js";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}){
    const [userInfo, setUserInfo] = React.useState({ userName: "", userDescription: "", userAvatar: "" });

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setUserInfo({ userName: userData.name, userDescription: userData.about, userAvatar: userData.avatar });
                setCards(cards);
            })
            .catch((err) => {
                console.log(err, true);
        });
    }, []);
    return(
        <main className="content">
            <section className="profil">
                <div className="profil__place">
                    <img src={{backgroundImage: `url(${userInfo.userAvatar})`}}
                         alt="Аватар" className="profil__avatar"/>
                    <button
                        className="profil__replace"
                        onClick={onEditAvatar}/>
                </div>
                <div className="profil__info">
                    <h1 className="profil__name">{userInfo.userName}</h1>
                    <button
                        className="profil__edit"
                        aria-label="Редактирование профиля"
                        type="button"
                        onClick={onEditProfile}/>
                    <p className="profil__profession">{userInfo.userDescription}</p>
                </div>
                <button
                    className="profil__add"
                    aria-label="Добавить изображения"
                    type="button"
                    onClick={onAddPlace}/>
            </section>

            <section className="elements">
                    {cards.map((card) => {
                        return (
                            <Card key={card._id} card={card} onCardClick={onCardClick} />
                        );
                    })}
            </section>
        </main>
    )
}
export default Main