import {
  FETCH_ALL_ACAPS_SUCCESS,
  FETCH_CREATE_ACAP,
  FETCH_PUT_ACAP,
  FETCH_DELETE_ACAP,
  FETCH_ACAP_BYNAME,
} from "./actionType";

const initialState = {
  acaps: [],
  // Agrega la propiedad "error" al estado inicial
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ACAPS_SUCCESS:
      return {
        ...state,
        acaps: action.payload,
      };
    case FETCH_ACAP_BYNAME:
      return {
        ...state,
        acaps: action.payload,
      };
    case FETCH_DELETE_ACAP: {
      const id = action.payload;
      const updatedAcaps = state.acaps.filter((acap) => acap.id !== id);
      return {
        ...state,
        acaps: updatedAcaps,
      };
    }
    case FETCH_PUT_ACAP: {
      const updatedAcapsAfterUpdate = state.acaps.map((acap) =>
        acap.id === action.payload.id ? action.payload : acap
      );
      return {
        ...state,
        acaps: updatedAcapsAfterUpdate,
      };
    }
    case FETCH_CREATE_ACAP:
      return {
        ...state,
        acaps: [...state.acaps, ...action.payload],
      };

    default:
      return state;
  }
}
