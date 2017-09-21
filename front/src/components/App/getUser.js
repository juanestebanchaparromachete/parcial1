import fetch from 'isomorphic-fetch';

export function getUser(data) {
    return fetch('/getfollowers/+'data, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => {
        return res;
    }).catch(err => err);
}