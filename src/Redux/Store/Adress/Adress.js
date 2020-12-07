// types
export const SET_DISTRICTS = 'SET_DISTRICTS';
export const SET_CITIES = 'SET_CITIES';

const initialState = {
  cities: [],
  districts: [],
};
// reducer
export default function Adress(state = initialState, action) {
  switch (action.type) {
    case SET_DISTRICTS:
      return {
        ...state,
        districts: action.payload.districts,
      };
    case SET_CITIES:
      return {
        ...state,
        cities: action.payload.cities,
      };
    default:
      return state;
  }
}
// actions
export const setDistricts = (districts) => ({
  type: SET_DISTRICTS,
  payload: districts,
});
export const setCities = (cities) => ({
  type: SET_CITIES,
  payload: cities,
});
