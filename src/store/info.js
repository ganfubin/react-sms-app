let initState = {
  name: 'gan',
  sex: '男',
  age: 25
};


export function info(state = initState, action) {
  let {payload} = action;
  switch (action.type) {
    case 'changeName':
      return {...state, name: payload};
    case 'changeSex':
      return {...state, sex: payload};
    case 'changeAge':
      return {...state, age: payload};
    default:
      return state
  }
}






