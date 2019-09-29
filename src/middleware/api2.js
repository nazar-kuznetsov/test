import {ApiMethods, CONTENT_TYPE_JSON} from './constants';

export {ApiMethods} from './constants';

// const getRootApi = () => process.env.API_ROOT || '/';

const callApi = callInfo => {
  const API_ROOT = 'http://localhost:5050/api/';
  const {
    endpoint,
    method = ApiMethods.GET,
    body,
    headers
  } = callInfo;

  return fetch(`${API_ROOT}${endpoint}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('token') || ''}`,
      ...headers
    }
  }).then(response => responseToPromise(response).then(responseData => ({
    responseData,
    httpStatus: response.status
  }))).catch(error => {
    return Promise.reject(error);
  });
};

const upload = callInfo => {
  const API_ROOT = 'http://localhost:5050/api/';
  const {
    endpoint,
    body
  } = callInfo;
  return fetch(`${API_ROOT}${endpoint}`, {
    method: ApiMethods.POST,
    body
  }).then(response => responseToPromise(response).then(responseData => ({
    responseData,
    httpStatus: response.status
  }))).catch(error => {
    return Promise.reject(error);
  });
};

const defineType = r => {

  // const response = r.headers.get('Content-Type');
  return r.json();
  // switch (response) {
  //     case CONTENT_TYPE_JSON:
  //         return r.json();
  //     case CONTENT_TYPE_EXCEL:
  //         return r.arrayBuffer();
  //     default: return r.text();
  // }
};

const responseToPromise = r => (defineType(r));

const Api = {
  fetch: callApi,
  file: upload
};

export default Api;
