import { Getters } from 'vuex-smart-module';
import ItemsState from './items.state';
import { HistoryItem, Item, ItemSubItem } from '@/store/modules/items/items.types';
import { occurrenceCount, occurrenceHighlightText } from '@/utils/funcs';

export default class ItemsGetters extends Getters<ItemsState> {
  get allItems(): Item[] {
    const items = this.state.items;
    const selected = this.state.selectedItems;
    return this.getters.getItemsBySearchString(items.filter(item => {
      return !selected.includes(item.id);
    }));
  }

  get selectedItems(): Item[] {
    const items = this.state.items;
    const selected = this.state.selectedItems;
    return items.filter(item => {
      return selected.includes(item.id);
    });
  }

  getItemById(id: string): Item {
    return <Item>this.state.items.find(item => item.id === id);
  }

  getItemsBySearchString(items: Item[]): Item[] {
    if (!this.state.searchString.length) return items;

    const searchOccurrences: Record<string, number> = {};
    for (const item of items) {
      let count = occurrenceCount(item.name, this.state.searchString);
      for (const subItem of item.items ?? []) {
        count += occurrenceCount(subItem.name, this.state.searchString);
      }
      searchOccurrences[item.id] = count;
    }

    return items
      .filter(item => searchOccurrences[item.id] !== 0)
      .map(item => {
        return {
          ...item,
          name: occurrenceHighlightText(item.name, this.state.searchString),
          items: item.items && item.items.map(({ id, name }: ItemSubItem) => {
            return {
              id,
              name: occurrenceHighlightText(name, this.state.searchString),
            }
          }),
        };
      })
      .sort((a, b) => searchOccurrences[b.id] - searchOccurrences[a.id]);
  }

  getHistoryItems(action: string): HistoryItem[] {
    return this.state.history.filter(item => item.action === action);
  }
}
