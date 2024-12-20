<script lang="ts" setup>
import Navbar from "@/components/Layouts/Navbar.vue";
import Footer from "@/components/Layouts/Footer.vue";
</script>

<template>
  <Navbar />

  <div class="container mx-auto">
    <slot />
  </div>

  <Footer />
</template>
