import { Module } from 'vuex-smart-module';
import state from './items.state';
import getters from './items.getters';
import actions from './items.actions';
import mutations from './items.mutations';

const items = new Module({
  state,
  getters,
  actions,
  mutations,
});

export default items;
