const API = process.env.REACT_APP_GITHUB_API;

export function getUsers(success) {
  return fetch(`${API}/users`)
    .then(checkStatus)
    .then(parseJSON)
    .then(success)
    .catch(() => {
      console.log('error')
    })
}

export function getUsersProfiles(users_logins) {
  let requests = users_logins && users_logins.map(user_login => {
    return fetch(`${API}/users/${user_login}`)
  });
  return Promise.all(requests)
    .then(responses => {
      return responses;
    })
    .then(responses => Promise.all(responses.map(r => parseJSON(r))))
    .catch(() => {
      console.log('error')
    })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}
