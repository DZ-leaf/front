import { AsyncStorage } from 'react-native';

// const url = 'http://52.141.21.120:8888/member';
// const url = 'http://218.39.221.78:8888/member';
const url = 'http://218.39.221.86:8888/member';

register = async (url, data) => {
    console.log(data);
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
    console.log(data)
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    try {
        // console.log(response.json());
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