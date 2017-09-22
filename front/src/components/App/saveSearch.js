import fetch from 'isomorphic-fetch';

export function saveSearch(data) {
    console.log("entra a save " + data);
    return fetch('/search', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}