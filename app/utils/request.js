import 'whatwg-fetch';

/**
 * Checks if a network request came back fine exclude redirects, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
const extractJsonIncludingErrors = (response) => {
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  }
  const error = new Error(response.statusText, response.status);
  throw error;
};

const extractJson = (response) => {
  if (response.status >= 200 && response.status < 300) {
    // 204 NO Content, 205 Reset Content
    if (response.status !== 204 && response.status !== 205) {
      return response.json();
    }
    return null;
  }
  const error = new Error(response.statusText, response.status);
  throw error;
};

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param  {boolean} optional indicate whether to get the json irrespective of the status
 *
 * @return {object}           The response data
 */
export const requestJSON = (url, options, errorAsJson) =>
  fetch(url, options)
    .then(errorAsJson ? extractJsonIncludingErrors : extractJson);


