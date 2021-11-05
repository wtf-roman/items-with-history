<template>
  <div class="history">
    <HistoryItemsList
      :items="historyItems"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { itemsModule } from '@/store';
import { HistoryItem } from '@/store/modules/items/items.types';

@Component({
  name: 'HistoryView',
  components: {
    HistoryItemsList: () => import('@/components/items/HistoryItemsList.vue'),
  },
})
export default class HistoryView extends Vue {
  get action(): string {
    const action = this.$route.query?.action;
    return typeof action === 'string' ? action : '';
  }

  get historyItems(): HistoryItem[] {
    if (this.action) {
      return itemsModule.getters.getHistoryItems(this.action);
    }
    return itemsModule.state.history;
  }
}
</script>