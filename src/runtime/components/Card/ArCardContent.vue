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
  <p v-if="$slots.default" :class="['card-content', computedClasses]">
    <slot />
  </p>
</template>

<style scoped>
.card-content {
  @apply text-base text-neutral-600 text-center p-2;
}
</style>
