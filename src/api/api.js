function makeRequest({ url, method, headers, data }) {
  let options = {
    method: method,
    headers: {
      'Content-type': 'application/json',
      ...headers
    },
    body: data ?
      JSON.stringify({
        ...data
      }) : null
  }

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((res) => {
        if (res.status < 400) {
          resolve(res.json());
        } else {
          reject(res.error);
          return
        }
      })
      .catch((err) => {
        reject(err);
        return
      })
  })
}

export const login = (username, password) => makeRequest({
  url: '/token-auth/',
  method: 'POST',
  data: {
    username: username, 
    password: password
  }
}).then(res => {
  localStorage.setItem('token', res.token)
})

export const register = (username, password) => makeRequest({
  url: '/authentication/users/',
  method: 'POST', 
  data: {
    username: username,
    password: password
  }
}).then(res => {
  localStorage.setItem('token', res.token)
})

export const current_user = () => makeRequest({
  url: '/authentication/current_user/',
  method: 'GET',
  headers: {
    Authorization: `JWT ${localStorage.getItem('token')}`
  }
})

export const logout = () => {
  localStorage.removeItem('token')
}