const API = process.env.REACT_APP_GITHUB_API;

export function getUsers(success) {
  return fetch(API + '/users', {
    headers: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success)
    .catch(() => {
      console.log('error')
    })
}

// export function getUser(user_login) {
//   return fetch(API + '/users/' + user_login, {
//     headers: {
//       Accept: 'application/json',
//     },
//   }).then(checkStatus)
//     .then(parseJSON)
//     .then((response) => response);
// }

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
