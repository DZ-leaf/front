
function register(url, data) {
      return fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      }).then(response => response.json()); // parses JSON response into native JavaScript objects 
  }

export const userUrl = {
    register: "/register/",
}

export const AjaxUser = {
    register: data => register('api/user/register', data),
}