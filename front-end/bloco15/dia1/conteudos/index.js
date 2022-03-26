const Redux = require('redux');

const initialState = {
  name: '',
  email: '',
}

const mudaNome = (nome) => ({
  type: 'NAME',
  nome,
});

const mudaEmail = (email) => ({
  type: 'EMAIL',
  email,
})

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case "NAME":
      return {
        name: action.nome,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
}

const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case "EMAIL":
      return {
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
}

const reducerCombinado = Redux.combineReducers({
  reducer1,
  reducer2});

const store = Redux.createStore(reducerCombinado);

store.dispatch(mudaEmail("alguem@email.com"));
store.dispatch(mudaNome("Alexandre"));

store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

/* const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' } */
