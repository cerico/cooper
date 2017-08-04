import { h } from 'hyperapp';
import Kendal from './Kendal/index';
import Main from './Main/index';
import state from '../state';
import actions from '../actions';

const Index = module.exports = () => {

  return (
    <Main state={state} actions={actions}/>
  )
};
