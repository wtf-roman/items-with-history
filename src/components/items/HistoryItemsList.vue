<template>
  <div class="history-items">
    <ul class="history-items-list">
      <li
        v-for="item of itemsSortedByDate"
        :key="item.id"
        class="history-items-list__item"
      >
        {{ item.itemId }} <strong>{{ item.action }}</strong> {{ item.name }} <strong>{{ formattedDate(item.date) }}</strong>
      </li>
      <li v-if="!items.length">
        Список пуст
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { HistoryItem } from '@/store/modules/items/items.types';

@Component
export default class HistoryItemsList extends Vue {
  @Prop() private items!: HistoryItem[];

  get itemsSortedByDate(): HistoryItem[] {
    return this.items.sort((a, b) => b.date - a.date);
  }

  formattedDate(timestamp: number): string {
    return new Date(timestamp).toLocaleString();
  }
}
</script>

<style lang="scss" scoped>
.history-items {
  display: flex;
  justify-content: center;
}
.history-items-list {
  display: flex;
  flex-direction: column;

  &__item {
    text-align: left;
  }
}
</style>
