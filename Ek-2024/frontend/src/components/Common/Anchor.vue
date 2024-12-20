<script lang="ts" setup>
interface Props {
  href: string;
  target?: string;
}

withDefaults(defineProps<Props>(), {
  target: "_blank",
});
</script>

<template>
  <a :href="href" :target="target">
    <slot />
  </a>
</template>
