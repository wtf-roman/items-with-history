import { Mutations } from 'vuex-smart-module';
import ItemsState from './items.state';
import { HistoryItem, Item } from '@/store/modules/items/items.types';

export default class ItemsMutations extends Mutations<ItemsState> {
  addItem(itemId: string): void  {
    if (this.state.selectedItems.includes(itemId)) return;
    this.state.selectedItems.push(itemId);
  }

  removeItem(itemId: string): void  {
    if (this.state.selectedItems.includes(itemId)) {
      const index = this.state.selectedItems.findIndex(item => item === itemId);
      this.state.selectedItems.splice(index, 1);
    }
  }

  addHistoryItem(item: HistoryItem): void  {
    this.state.history.push(item);
  }

  setSearchString(searchString: string): void {
    this.state.searchString = searchString;
  }

  setItems(items: Item[]): void {
    this.state.items = items;
  }
}
