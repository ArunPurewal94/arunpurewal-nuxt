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
  <div v-if="$slots.default" :class="['card-img', computedClasses]">
    <slot />
  </div>
</template>

<style scoped>
.card-img {
  @apply relative overflow-hidden bg-cover bg-no-repeat;
}
</style>
