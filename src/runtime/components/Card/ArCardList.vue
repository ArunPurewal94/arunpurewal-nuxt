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
  <ul v-if="$slots.default" :class="['card-list', computedClasses]">
    <slot />
  </ul>
</template>

<style scoped>
.card-list {
  @apply w-full;
}
</style>
