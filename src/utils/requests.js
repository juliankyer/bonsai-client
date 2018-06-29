async function parseResponse(response) {
  const contentType = response.headers.get('content-type');

  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json();
  } else if (contentType && contentType.indexOf('text/plain') !== -1) {
    return response.text();
  } else {
    throw new Error(`Unrecognized content type "${contentType}"`);
  }
}

export default async function checkStatus(response) {
  const data = await parseResponse(response);
  if (response.ok) {
    return data;
  } else {
    const error = new Error();

    // Add the list of error messages, if any, from the API response to the error being thrown
    if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
      error.messages = data.errors;
    } else {
      // Standard error response
      error.messages = [data.message];
    }

    throw error;
  }
}
