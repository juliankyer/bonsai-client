import * as types from '../actionTypes';

const DEFAULT_ERROR_MESSAGE = 'Oops something went wrong!';

export function createErrorMessage(list = [DEFAULT_ERROR_MESSAGE]) {
  const message = { list, messageType: 'error' };
  return { type: types.FLASH_MESSAGE__CREATE, message };
}

export function createSuccessMessage(list = [DEFAULT_ERROR_MESSAGE]) {
  const message = { list, messageType: 'success' };
  return { type: types.FLASH_MESSAGE__CREATE, message };
}

export function deleteMessage() {
  return { type: types.FLASH_MESSAGE__DELETE };
}
