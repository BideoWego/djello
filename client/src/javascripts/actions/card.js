import { apiUrlFor } from '../helpers';

// ----------------------------------------
// Card
// ----------------------------------------
export const REQUESTING_CARD = 'REQUESTING_CARD';
export const REQUEST_SUCCEEDED_CARD = 'REQUEST_SUCCEEDED_CARD';
export const REQUEST_FAILED_CARD = 'REQUEST_FAILED_CARD';
export const SET_CARD = 'SET_CARD';

export function requestingCard() {
  return {
    type: REQUESTING_CARD
  };
}

export function requestSucceededCard() {
  return {
    type: REQUEST_SUCCEEDED_CARD
  };
}

export function requestFailedCard(error) {
  return {
    type: REQUEST_FAILED_CARD,
    error
  };
}

export function setCard(card) {
  return {
    type: SET_CARD,
    data: card
  };
}

export function getCard(id) {
  return async dispatch => {
    try {
      dispatch(requestingCard());
      const response = await fetch(apiUrlFor(`/cards/${ id }`));
      const card = await response.json();
      dispatch(requestSucceededCard());
      dispatch(setCard(card));

    } catch (e) {
      dispatch(requestFailedCard(e));
    }
  };
}
