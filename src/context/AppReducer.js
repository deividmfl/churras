export default (state, action) => {
  switch(action.type) {
    
    // events
    case 'NEW_EVENT':
      return {
        ...state,
        events: [action.payload, ...state.events],
      }
    case 'UPDATE_EVENT':
      return {
        ...state,
        events: state.events.map(event => event.id === action.payload.id ?
          {
            ...event,
            title: action.payload.title,
            date: action.payload.date,
            amount: action.payload.amount,
          } : 
          event
        ),
      }
      
    // user
    case 'NEW_USER':
      return {
        ...state,
        users: [action.payload, ...state.users],
      }
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.id ?
          {
            ...user,
            checked: action.payload.checked,
          } : 
          user
        ),
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      }      
    default:
      return state;
  }
}
