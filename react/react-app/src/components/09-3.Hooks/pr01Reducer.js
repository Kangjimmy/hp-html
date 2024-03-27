export function pr01Reducer(state, action) {
  switch (action.icon) {
    case '🍔':
      return state + action.price;
    case '🍟':
      return state + action.price;
    case '🥤':
      return state + action.price;
    default:
      return state;
  }
}
