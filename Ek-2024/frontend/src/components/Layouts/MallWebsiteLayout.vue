<script lang="ts" setup>
import NavbarTopHeader from "@/components/Layouts/Navbar/Top/Header.vue";
import NavbarTop from "@/components/Layouts/Navbar/Top.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Footer from "@/components/Layouts/Footer.vue";
//import Foot from "@/components/Layouts/Footer/MainFooter.vue";
//import GnbTop from "@/components/Layouts/Gnb.vue";
//import Awardwrap from "@/components/Layouts/Award.vue";

// 키드키즈 Brand logo
const defaultBrandLogoImage = "https://www.kidkids.net/img/main2014/ek_logo_2021_01.png";

// 회원 로그인 여부 (true: 로그인 O, false: 로그인 X)
const memberLoggedIn = false;

// 검색창 placeholder text
const searchInputPlaceholder = "양꼬치앤 칭따오 꿔바로우";
</script>

<template>
  <Navbar />
  <div class="min-h-screen ">
    <slot />
  </div>
  <Footer />
</template>

