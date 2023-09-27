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
  <ul v-if="$slots.default" :class="['card-list', computedClasses]">
    <slot />
  </ul>
</template>

<style scoped>
.card-list {
  @apply w-full;
}
</style>
