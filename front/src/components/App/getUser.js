import fetch from 'isomorphic-fetch';

export function getUser(data) {
    return fetch('/getfollowers/'+data, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => {
        console.log(res)

        return res;
    }).catch(err => err);
}