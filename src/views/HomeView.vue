<template>
  <div class="home">
    <input
      :value="search"
      @input="inputHandler"
    >
    пример: st, te, tech
    <div class="columns">
      <div class="col first">
        <ItemsList
          :items="items"
          button-text="+"
          @item-click="addHandler"
        />
      </div>
      <div class="col second">
        <ItemsList
          :items="selectedItems"
          button-text="-"
          @item-click="removeHandler"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { itemsModule } from '@/store';
import { Item } from '@/store/modules/items/items.types';

@Component({
  name: 'HomeView',
  components: {
    ItemsList: () => import('@/components/items/ItemsList.vue'),
  },
})
export default class HomeView extends Vue {
  get search(): string {
    return itemsModule.state.searchString;
  }

  get selectedItems(): Item[] {
    return itemsModule.getters.selectedItems;
  }

  get items(): Item[] {
    return itemsModule.getters.allItems;
  }

  addHandler(itemId: string): void {
    itemsModule.dispatch('addItem', itemId);
  }

  removeHandler(itemId: string): void {
    itemsModule.dispatch('removeItem', itemId);
  }

  inputHandler(e: Event): void {
    const target = e.target as HTMLInputElement;
    itemsModule.dispatch('setSearchString', target.value);
  }

  created(): void {
    itemsModule.dispatch('fetchItems');
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 70vw;
  margin: 0 auto;
  text-align: left;
}
.columns {
  display: flex;
  justify-content: space-between;
}
.col {
  border: 1px solid;
  width: 49.5%;
  height: 70vh;
  overflow-y: scroll;
}
</style>
