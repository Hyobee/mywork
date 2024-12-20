<script lang="ts" setup>
import Navbar from "@/components/Layouts/Navbar.vue";
import Footer from "@/components/Layouts/Footer.vue";

// 키드키즈 Brand logo
const defaultBrandLogoImage = "https://www.kidkids.net/img/main2014/ek_logo_2021_01.png";

// 회원 로그인 여부 (true: 로그인 O, false: 로그인 X)
const memberLoggedIn = false;
</script>

<template>
  <Navbar />
  <div class="min-h-screen">
    <slot />
  </div>
  <Footer />
</template>
