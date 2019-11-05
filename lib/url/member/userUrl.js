const url = 'http://52.141.21.120:8888/member';

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

idCheck = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}

findCompany = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}

sendEmail = (url, data) => {    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}

findIdAuthNm = (url, data) => {    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}

findPwAuthNm = (findurl, data) => {    
    return fetch(findurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}

findId = (url, data) => {    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}

changePw = (findurl, data) => {   
    return fetch(findurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}

export const AjaxUser = {
    register: data => register(url + '/register', data),
    idCheck: data => idCheck(url + '/idCheck/', data),
    login: data => login(url + '/login', data),
    findCompany: data => findCompany(url + '/findCompany', data),
    sendEmail: data => sendEmail(url + '/sendEmail', data),
    findIdAuthNm: data => findIdAuthNm(url + '/findIdAuthNm', data),
    findPwAuthNm: data => findPwAuthNm(url + '/findPwAuthNm', data),
    findId: data => findId(url + '/findId', data),
    changePw: data => changePw(url + '/changePw', data),
}