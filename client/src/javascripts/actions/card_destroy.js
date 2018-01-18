import { apiUrlFor } from '../helpers';
import { getBoard } from './board';

// ----------------------------------------
// Card Destroy
// ----------------------------------------
export const REQUESTING_CARD_DESTROY = 'REQUESTING_CARD_DESTROY';
export const REQUEST_SUCCEEDED_CARD_DESTROY = 'REQUEST_SUCCEEDED_CARD_DESTROY';
export const REQUEST_FAILED_CARD_DESTROY = 'REQUEST_FAILED_CARD_DESTROY';

export function requestingCardDestroy() {
  return {
    type: REQUESTING_CARD_DESTROY
  };
}

export function requestSucceededCardDestroy() {
  return {
    type: REQUEST_SUCCEEDED_CARD_DESTROY
  };
}

export function requestFailedCardDestroy(error) {
  return {
    type: REQUEST_FAILED_CARD_DESTROY,
    error
  };
}

export function destroyCard(id) {
  return async dispatch => {
    try {
      dispatch(requestingCardDestroy());
      const response = await fetch(apiUrlFor(`/cards/${ id }`), {
        method: 'DELETE'
      });
      // TODO check response status code
      const card = await response.json();
      dispatch(requestSucceededCardDestroy(card));
      dispatch(getBoard(card.List.boardId));
    } catch (e) {
      dispatch(requestFailedCardDestroy(e));
    }
  };
}
