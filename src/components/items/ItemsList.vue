<template>
  <div class="items">
    <ul class="items-list">
      <li
        v-for="item of items"
        :key="item.id"
        class="items-list__item"
      >
        <div
          class="item-name"
          v-html="item.name"
        />
        <button
          class="item-button"
          @click="itemClick(item.id)"
        >
          {{ buttonText }}
        </button>
        <div class="item-items">
          <span
            v-for="subItem in item.items"
            :key="subItem.id"
            v-html="subItem.name"
          />
        </div>
      </li>
      <li v-if="!items.length">
        Список пуст
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ItemsList extends Vue {
  @Prop({ required: true }) private items!: string;
  @Prop({ default: 'Click'}) private buttonText!: string;

  @Emit()
  itemClick(itemId: number): number {
    return itemId;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.items {}
.items-list {

  &__item {
    display: grid;
    grid-template-areas:
                  'name button'
                  'items items';
    grid-template-columns: 1fr max-content;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: .2rem;
    padding: .5rem;

    &:hover {
      background: #f1f1f1;
    }
  }

  .item-id {
    margin-right: 1rem;
    grid-area: id;
  }

  .item-name {
    margin-right: 1rem;
    grid-area: name;
  }

  .item-button {
    cursor: pointer;
    grid-area: button;
  }

  .item-items {
    font-size: 0.8rem;
    grid-area: items;
  }
}
</style>
