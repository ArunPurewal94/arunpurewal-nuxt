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
  <div :class="['card', computedClasses]">
    <slot />
  </div>
</template>

<style scoped>
.card {
  @apply block max-w-lg rounded-lg bg-white;
}
</style>
