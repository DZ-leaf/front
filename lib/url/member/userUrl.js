const url = 'http://218.39.221.86:8888/member';

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


const findurl = 'http://218.39.221.86:8888/member';

findIdAuthNm = (findurl, data) => {    
    return fetch(findurl, {
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

findId = (findurl, data) => {    
    return fetch(findurl, {
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
    findIdAuthNm: data => findIdAuthNm(findurl + '/findIdAuthNm', data),
    findPwAuthNm: data => findPwAuthNm(findurl + '/findPwAuthNm', data),
    findId: data => findId(findurl + '/findId', data),
    changePw: data => changePw(findurl + '/changePw', data),
}