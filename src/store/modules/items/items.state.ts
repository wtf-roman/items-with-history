import { HistoryItem, Item } from '@/store/modules/items/items.types';

export default class ItemsState {
  items: Item[] = [];

  selectedItems: string[] = [];

  history: HistoryItem[] = [];

  searchString = '';
}
