import { apiUrlFor } from '../helpers';
import { getBoard } from './board';
import { setCard } from './card';

// ----------------------------------------
// Card Update
// ----------------------------------------
export const REQUESTING_CARD_UPDATE = 'REQUESTING_CARD_UPDATE';
export const REQUEST_SUCCEEDED_CARD_UPDATE = 'REQUEST_SUCCEEDED_CARD_UPDATE';
export const REQUEST_FAILED_CARD_UPDATE = 'REQUEST_FAILED_CARD_UPDATE';

export function requestingCardUpdate() {
  return {
    type: REQUESTING_CARD_UPDATE
  };
}

export function requestSucceededCardUpdate(card) {
  return {
    type: REQUEST_SUCCEEDED_CARD_UPDATE,
    data: card
  };
}

export function requestFailedCardUpdate(error) {
  return {
    type: REQUEST_FAILED_CARD_UPDATE,
    error
  };
}

export function updateCard(id, data) {
  return async dispatch => {
    try {
      dispatch(requestingCardUpdate());
      const response = await fetch(apiUrlFor(`/cards/${ id }`), {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      // TODO check response status code
      const card = await response.json();
      dispatch(requestSucceededCardUpdate(card));
      dispatch(getBoard(card.List.boardId));
      dispatch(setCard(card));
    } catch (e) {
      dispatch(requestFailedCardUpdate(e));
    }
  };
}
