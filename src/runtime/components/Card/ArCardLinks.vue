<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import clsx from "clsx";

interface Props {
  extraClasses?: string;
  href?: string;
}

export default defineComponent({
  props: {
    extraClasses: String as PropType<Props["extraClasses"]>,
    href: String as PropType<Props["href"]>,
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
  <a
    :href="href"
    v-if="$slots.default"
    :class="['card-links', computedClasses]"
  >
    <slot />
  </a>
</template>

<style scoped>
.card-links {
  @apply p-6 pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-blue-400 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-0 active:text-blue-700;
}
</style>
