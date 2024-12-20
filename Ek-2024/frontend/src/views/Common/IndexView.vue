<script lang="ts" setup>
import MallWebsiteLayout from "@/components/Layouts/MallWebsiteLayout.vue";
</script>

<template>
  <div class="container mt-10">
    <!-- Text Size(Tailwind) --
    <div class="page-sample-section">
      <h1 class="page-sample-title">Text Size(Tailwind)</h1>
      <h1 class="text-7xl">text-7xl 72px</h1>
      <h1 class="text-6xl">text-6xl 60px</h1>
      <h1 class="text-5xl">text-5xl 48px</h1>
      <h1 class="text-5xl">text-3xl 30px</h1>
    </div-->

    <!-- Text Size(Custom) -->
    <div class="page-sample-section">
      <h1 class="page-sample-title">Text Size(Custom)</h1>
      <h1 class="text-9xl">text-9xl 75px</h1>
      <h1 class="text-8xl">text-8xl 60px</h1>
      <h1 class="text-7xl">text-7xl 54px</h1>
      <h1 class="text-6xl">text-6xl 50px</h1>
      <h1 class="text-5xl">text-5xl 44px</h1>
      <h1 class="text-4xl">text-4xl 38px</h1>
      <h1 class="text-3xl">text-3xl 30px</h1>
      <h1 class="text-2xl">text-2xl 24px</h1>
      <h1 class="text-xl">text-xl 22px</h1>
      <h1 class="text-lg">text-lg 20px</h1>
      <h1 class="text-base">text-base 16px</h1>
      <h1 class="text-sm">text-sm 14px</h1>
      <h1 class="text-xs">text-xs 13px</h1>
      <h1 class="text-2xs">text-2xs 12px</h1>
    </div>
    <!--Colors-->
    <div class="page-sample-section  ">
      <h1 class="page-sample-title">Colors</h1>
      <ul class="page-sample-colors-primary">
        <li class="bg-primary">#1774D0 / bg-blue / $primary</li>
        <li class="bg-secondary">#73C108 / bg-green / $secondary</li>
      </ul>
      <ul class="page-sample-colors-orange">
        <li class="bg-orange">#FF6029 / bg-orange / $primary</li>
        <li class="bg-orange-50">#FF7F22 / bg-orange-50 / $primary</li>
      </ul>
      <ul class="page-sample-colors-yellow">
        <li class="bg-yellow">#FFB400 / bg-yellow / $primary</li>
        <li class="bg-yellow-50">#FFD368 / bg-yellow-50 / $primary</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .page-sample-section{
    margin-bottom:50px;
  }
  .page-sample-title {
    @apply text-2xl font-bold mb-3;

    border-bottom: 1px solid #e3e3e3;
  }

  [class^="page-sample-colors"] {
  margin-bottom: 20px;

  li {
    display: inline-block;
    width: 100%;
    font-size: 1rem;
    word-break: keep-all;
    padding: 10px 15px;

    @include bp(tablet) {
      width: 50%;
    }
    @include bp(desktop) {
      width: 33.2%;
    }
  }
}
</style>