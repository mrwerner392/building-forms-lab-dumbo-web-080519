export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log('HIT');
      console.log(action);
      console.log(state);
      return {
        ...state,
        bands: [
          ...state.bands,
          {name: action.name}
        ]
      }
    default:
      return state
  }
};
