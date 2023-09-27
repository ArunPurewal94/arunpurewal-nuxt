<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import clsx from "clsx";

interface Props {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive";
  size?: "small" | "medium" | "large";
  class?: string;
  onClick?: () => void;
}

export default defineComponent({
  props: {
    variant: String as PropType<Props["variant"]>,
    size: String as PropType<Props["size"]>,
    class: String as PropType<Props["class"]>,
    onClick: Function as PropType<Props["onClick"]>,
  },
  setup(props) {
    const variantClasses = {
      default: "btn-primary",
      secondary: "btn-secondary",
      outline: "btn-outline",
      ghost: "btn-ghost",
      link: "btn-link",
      destructive: "btn-destructive",
    };

    const sizeClasses = {
      small: "btn-sm",
      medium: "btn-md",
      large: "btn-lg",
    };

    const computedClasses = computed(() =>
      clsx(
        variantClasses[props.variant ?? "default"],
        sizeClasses[props.size ?? "medium"],
        props.class
      )
    );

    return {
      computedClasses,
      onClick: props.onClick,
    };
  },
});
</script>

<template>
  <button :class="['btn', computedClasses]" @click="onClick">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  @apply inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-indigo-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
}

.btn-primary {
  @apply bg-indigo-600 text-white hover:bg-indigo-600/90;
}

.btn-secondary {
  @apply bg-slate-900 text-white hover:bg-slate-900/80;
}

.btn-outline {
  @apply border hover:bg-gray-900 hover:text-white;
}

.btn-ghost {
  @apply hover:bg-slate-900 hover:text-white;
}

.btn-link {
  @apply text-gray-900 underline-offset-4 hover:underline;
}

.btn-destructive {
  @apply bg-red-600 text-white hover:bg-red-600/90;
}

.btn-sm {
  @apply py-1 px-2 text-sm;
}

.btn-md {
  @apply py-2 px-4 text-base;
}

.btn-lg {
  @apply py-3 px-6 text-lg;
}
</style>
