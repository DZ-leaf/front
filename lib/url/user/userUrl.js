const url = 'http://218.39.221.86:8888';

register = (url, data) => {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}

login = (url, data) => {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}


export const AjaxUser = {
    register: data => register(url + '/user/register', data),
    login: data => login(url + '/user/login', data),
}