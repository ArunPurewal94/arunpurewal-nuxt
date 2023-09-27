<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import clsx from "clsx";

interface Props {
  class?: string;
}

export default defineComponent({
  props: {
    class: String as PropType<Props["class"]>,
  },
  setup(props) {
    const computedClasses = computed(() => clsx(props.class));

    return {
      computedClasses,
    };
  },
});
</script>

<template>
  <li v-if="$slots.default" :class="['card-list-item', computedClasses]">
    <slot />
  </li>
</template>

<style scoped>
.card-list-item {
  @apply w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3;
}
</style>
