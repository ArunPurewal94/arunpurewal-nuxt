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
  <p v-if="$slots.default" :class="['card-content', computedClasses]">
    <slot />
  </p>
</template>

<style scoped>
.card-content {
  @apply text-base text-neutral-600 text-center p-2;
}
</style>
