import { Actions } from 'vuex-smart-module';
import ItemsState from './items.state';
import { ApiItem, HistoryItem, HistoryItemAdd, Item } from '@/store/modules/items/items.types';
import ItemsGetters from '@/store/modules/items/items.getters';
import ItemsMutations from '@/store/modules/items/items.mutations';
import { guid } from '@/utils/funcs';
import { getItems } from '@/api/ItemsService';

export default class ItemsActions extends Actions<ItemsState, ItemsGetters, ItemsMutations, ItemsActions> {
  addItem(itemId: string): void {
    this.commit('addItem', itemId);
    this.dispatch('addHistoryItem', {itemId, action: 'add'});
  }

  removeItem(itemId: string): void {
    this.commit('removeItem', itemId);
    this.dispatch('addHistoryItem', {itemId, action: 'remove'});
  }

  addHistoryItem({itemId, action}: HistoryItemAdd): void {
    const { id, name } = this.getters.getItemById(itemId);
    const historyItem : HistoryItem = {
      id: guid(),
      itemId: id,
      name,
      action,
      date: new Date().getTime(),
    };
    this.commit('addHistoryItem', historyItem);
  }

  setSearchString(searchString: string): void {
    this.commit('setSearchString', searchString);
  }

  async fetchItems(): Promise<void> {
    if (this.state.items.length) return;

    let rawData = [];
    try {
      const { data } = await getItems();
      rawData = data;
    } catch (e) {
      console.error('Не удалось получить данные:', e);
    }

    const items: Item[] = rawData.map(({ name, domains }: ApiItem) => {
      return {
        id: guid(),
        name,
        items: domains.map((item, i) => {
          return {id: i, name: item};
        }),
      }
    });
    this.commit('setItems', items);
  }
}
