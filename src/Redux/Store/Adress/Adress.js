// types
export const GET_ADRESS = 'GET_ADRESS'

const initialState = {
  districts: {},
  cities: {},
}
// reducer
export default function Adress(state = initialState, action) {
  switch (action.type) {
    case GET_ADRESS:
      console.log('resposta do redux', action)
      return {
        ...state,
        districts: action.payload.districts,
        cities: action.payload.cities,
      }
    default:
      return state
  }
}
// actions
export const getAllAdress = (districts, cities) => ({
  type: GET_ADRESS,
  payload: [districts, cities],
})
