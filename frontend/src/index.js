import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getUsers } from './actions/usersActions';

// DEVTOOLS A RETIRER LORS DE LA MISE EN PROD DU SITE 
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);