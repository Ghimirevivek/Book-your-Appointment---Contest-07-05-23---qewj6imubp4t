import { createStore } from 'redux'

const initialState = {
  appointments: [],
}

function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return {
        ...state,
        appointments: [
          ...state.appointments,
          {
            name: action.payload.name,
            time: action.payload.time,
            description: action.payload.description,
          },
        ],
      }
    default:
      return state
  }
}

const store = createStore(appointmentReducer)

export default store
