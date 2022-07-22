import { StoreActionTypes } from '../constants/storeActionTypes';

const initialState = {
  usd: '',
  eur: '',
  gbp: '',
  time: '',
  disclaimer: '',
};
export const btcReducer = (state = initialState, action) => {
  switch (action.type) {
    case StoreActionTypes.setBTCRate:
      return {
        ...state,
        [action.payload.currency]: action.payload.amount,
      };
    case StoreActionTypes.setBTCUpdateTime:
      return {
        ...state,
        time: action.payload.time,
      };
    case StoreActionTypes.setDisclaimer:
      return {
        ...state,
        disclaimer: action.payload.disclaimer,
      };
    default:
      return state;
  }
};
