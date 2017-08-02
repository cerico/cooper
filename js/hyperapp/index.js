import { app, h } from 'hyperapp';
/** @jsx h */
// import { Router } from "@hyperapp/router"
import state from './state';
import actions from './actions';
import view from './views/index'

// app({ state, actions, view, mixins:[Router] })
app({ state, actions, view })
