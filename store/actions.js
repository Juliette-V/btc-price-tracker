import { StoreActionTypes } from '../constants/storeActionTypes';

export function setBTCRate(currency, amount) {
  return {
    type: StoreActionTypes.setBTCRate,
    payload: {
      currency: currency,
      amount: amount,
    },
  };
}
export function setBtcUpdateTime(time) {
  return {
    type: StoreActionTypes.setBTCUpdateTime,
    payload: {
      time: time,
    },
  };
}
export function setDisclaimer(disclaimer) {
  return {
    type: StoreActionTypes.setDisclaimer,
    payload: {
      disclaimer: disclaimer,
    },
  };
}
