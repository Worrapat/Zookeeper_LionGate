const config = {
  api: "http://localhost:3002",
  options: {
    headers: {
      "Content-type": "application/json",
      "x-access-token": "token-value",
    },
  },
};

const handleResponse = (response) => {
  // You can handle 400 errors as well.
  if (response.status === 200) {
    return response.json();
  } else {
    throw Error(response.json() | "error");
  }
};

export const httpGet = (endpoint) => {
  return fetch(`${config.api}${endpoint}`, {
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

export const httpPost = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: "post",
    body: data ? JSON.stringify(data) : null,
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

export const httpPut = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: "put",
    body: data ? JSON.stringify(data) : null,
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

export const httpDelete = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: "delete",
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};
