import { apiUrlFor } from '../helpers';
import { getBoard } from './board';

// ----------------------------------------
// Card Create
// ----------------------------------------
export const REQUESTING_CARD_CREATE = 'REQUESTING_CARD_CREATE';
export const REQUEST_SUCCEEDED_CARD_CREATE = 'REQUEST_SUCCEEDED_CARD_CREATE';
export const REQUEST_FAILED_CARD_CREATE = 'REQUEST_FAILED_CARD_CREATE';

export function requestingCardCreate() {
  return {
    type: REQUESTING_CARD_CREATE
  };
}

export function requestSucceededCardCreate(card) {
  return {
    type: REQUEST_SUCCEEDED_CARD_CREATE,
    data: card
  };
}

export function requestFailedCardCreate(error) {
  return {
    type: REQUEST_FAILED_CARD_CREATE,
    error
  };
}

export function createCard(data) {
  return async dispatch => {
    try {
      dispatch(requestingCardCreate());
      const response = await fetch(apiUrlFor('/cards'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      // TODO check response status code
      const card = await response.json();
      dispatch(requestSucceededCardCreate(card));
      dispatch(getBoard(card.List.boardId));
    } catch (e) {
      dispatch(requestFailedCardCreate(e));
    }
  };
}
