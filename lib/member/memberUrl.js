import { AsyncStorage } from 'react-native';
import serverUrl from '../url';

const url = '/member';

register = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

login = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        await AsyncStorage.setItem('Authorization', response.headers.get("authorization"))
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

idCheck = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

findCompany = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

sendEmail = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

findIdAuthNm = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

findPwAuthNm = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

findId = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

changePw = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

export const AjaxMember = {
    register: data => register(serverUrl + url + '/register', data),
    idCheck: data => idCheck(serverUrl + url + '/idCheck/', data),
    login: data => login(serverUrl + url + '/login', data),
    findCompany: data => findCompany(serverUrl + url + '/findCompany', data),
    sendEmail: data => sendEmail(serverUrl + url + '/sendEmail', data),
    findIdAuthNm: data => findIdAuthNm(serverUrl + url + '/findIdAuthNm', data),
    findPwAuthNm: data => findPwAuthNm(serverUrl + url + '/findPwAuthNm', data),
    findId: data => findId(serverUrl + url + '/findId', data),
    changePw: data => changePw(serverUrl + url + '/changePw', data),
}