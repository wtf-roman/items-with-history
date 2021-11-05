export interface ApiItem {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  'state-province': string;
  'web_pages': string[];
}

export interface Item {
  id: string;
  name: string;
  items?: ItemSubItem[];
}

export interface ItemSubItem {
  id: string;
  name: string;
}

export interface HistoryItemAdd {
  itemId: string;
  action: string;
}

export interface HistoryItem {
  id: string;
  itemId: string;
  name: string;
  action: string;
  date: number;
}