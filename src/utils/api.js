import {apiSettings} from "./constants.js";

class Api {
    constructor ({url,groupId, token}) {
        this._url = url;
        this._groupId = groupId;
        this._token = token;
    }

    _checkData (res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getUserInfo() {
        return fetch(`${this._url}/${this._groupId}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkData);
    }

    getInitialCards() {
        return fetch(`${this._url}/${this._groupId}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkData);
    }

    getInitialData() {
        return Promise.all([this.getInitialCards(), this.getUserInfo()]);
    }

    setUserInfo(user) {
        return fetch(`${this._url}/${this._groupId}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                about: user.about
            })
        })
            .then(this._checkData);
    }

    addCard(card) {
        return fetch(`${this._url}/${this._groupId}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })
        })
            .then(this._checkData);
    }

    deleteCard (card) {
        return fetch(`${this._url}/${this._groupId}/cards/${card._id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkData);

    }

    setLike(card) {
        return fetch(`${this._url}/${this._groupId}/cards/likes/${card._id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkData);
    }

    deleteLike(card) {
        return fetch(`${this._url}/${this._groupId}/cards/likes/${card._id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkData);
    }

    updateAvatar(link) {
        return fetch(`${this._url}/${this._groupId}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(this._checkData);
    }
}

const api = new Api(apiSettings);
export default api