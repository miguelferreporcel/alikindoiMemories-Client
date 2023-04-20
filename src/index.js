import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore , applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';