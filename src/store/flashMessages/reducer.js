import { FLASH_MESSAGE__CREATE, FLASH_MESSAGE__DELETE } from '../actionTypes';

const initialState = {
  message: null,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case FLASH_MESSAGE__CREATE:
      return { ...state, message: action.message };
    case FLASH_MESSAGE__DELETE:
      return { ...state, message: null };
    default:
      return state;
  }
}
