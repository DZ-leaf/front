function register(data) {
    console.log("ddddddd" + data)
    return fetch('/user/register', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.json()); // parses JSON response into native JavaScript objects 
}

export const userUrl = {
    register: "/register/",
}

export const AjaxUser = {
    register: data => register(data),
    // register: async (data) => await fetch('/user/register', data),
}