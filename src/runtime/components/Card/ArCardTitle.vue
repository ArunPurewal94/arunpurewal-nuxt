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
  <h5 v-if="$slots.default" :class="['card-title', computedClasses]">
    <slot />
  </h5>
</template>

<style scoped>
.card-title {
  @apply my-2 text-xl font-medium leading-tight text-neutral-800 text-center;
}
</style>
