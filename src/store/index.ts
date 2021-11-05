import Vue from 'vue';
import Vuex from 'vuex';

import { Module, createStore } from 'vuex-smart-module';
import items from './modules/items';

Vue.use(Vuex);

const root = new Module({
  modules: {
    items,
  },
});

const store = createStore(root);

export default store;

export const itemsModule = items.context(store);
