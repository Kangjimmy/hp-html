export function pr02Reducer(state, action) {
  switch (action.position) {
    case 'Deposit':
      return state + parseInt(action.money);
    case 'Withdrawal':
      return state - parseInt(action.money);
    default:
      return state;
  }
}
