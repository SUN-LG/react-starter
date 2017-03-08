/**
 * constants
 */
const LOCATION_CHANGE = 'LOCATION_CHANGE'

/**
 * actions
 */
function locationChange(location = '/') {
  return {
    type: LOCATION_CHANGE,
    payload: location
  }
}

const updateLocation = ({dispatch}) => {
  return nextLocation => dispatch(locationChange(nextLocation))
}

/**
 * reducer
 */
const initialState = null
function locationReducer(state = initialState, action) {
  return action.type === LOCATION_CHANGE ? action.payload : state
}

export {
  LOCATION_CHANGE,
  locationChange
}

export {updateLocation}
export default locationReducer
