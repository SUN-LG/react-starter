/**
 * constants
 */
const RECEIVE_ZEN = 'RECEIVE_ZEN'
const REQUEST_ZEN = 'REQUEST_ZEN'
const CLEAR_ZEN = 'CLEAR_ZEN'

/**
 * actions
 */
function requestZen() {
  return {
    type: REQUEST_ZEN
  }
}

let avaliableId = 0
function receiveZen(value) {
  return {
    type: RECEIVE_ZEN,
    payload: {
      text: value,
      id: avaliableId++
    }
  }
}

function clearZen() {
  return {
    type: CLEAR_ZEN
  }
}

// thunk action creator
const fetchZen = () => (dispatch, getState) => {
  if (getState().zen.fetching) return

  dispatch(requestZen())
  return fetch('https://api.github.com/zen')
    .then(data => data.text())
    .then(text => dispatch(receiveZen(text)))
}

/**
 * action handlers
 */
const ACTION_HANDLERS = {
  [REQUEST_ZEN]: (state, action) => ({
    ...state,
    fetching: true
  }),
  [RECEIVE_ZEN]: (state, action) => ({
    ...state,
    fetching: false,
    text: state.text.concat(action.payload)
  }),
  [CLEAR_ZEN]: (state, action) => ({
    ...state,
    text: []
  })
}

/**
 * reducer
 */
const initialState = {
  fetching: false,
  text: []
}

function zenReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export {
  RECEIVE_ZEN,
  REQUEST_ZEN,
  CLEAR_ZEN,
  receiveZen,
  requestZen,
  clearZen,
  fetchZen
}

export default zenReducer
