<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import clsx from "clsx";

interface Props {
  extraClasses?: string;
}

export default defineComponent({
  props: {
    extraClasses: String as PropType<Props["extraClasses"]>,
  },
  setup(props) {
    const computedClasses = computed(() => clsx(props.extraClasses));

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
