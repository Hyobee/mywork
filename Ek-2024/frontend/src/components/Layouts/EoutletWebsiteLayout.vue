<script lang="ts" setup>
import NavbarTopHeader from "@/components/Layouts/Navbar/Top/Header.vue";
import NavbarTop from "@/components/Layouts/Navbar/Top.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import EoutletFooter from "@/components/Layouts/Footer/EoutletFooter.vue";

// 키드키즈 Brand logo
const defaultBrandLogoImage = "https://www.kidkids.net/img/main2014/ek_logo_2021_01.png";

// 회원 로그인 여부 (true: 로그인 O, false: 로그인 X)
const memberLoggedIn = false;

// 검색창 placeholder text
const searchInputPlaceholder = "양꼬치앤 칭따오 꿔바로우";
</script>

<template>
  <div>
    <!-- 검색창 상단 메뉴 영역 -->
    <NavbarTopHeader :member-logged-in="memberLoggedIn" />
    <!-- 검색창 영역 -->
    <NavbarTop :brand-logo-image="defaultBrandLogoImage" :search-input-placeholder="searchInputPlaceholder" />
    <!-- GNB 메뉴영역 -->
    <Navbar />
  </div>

  <div class="min-h-screen py-8">
    <slot />
  </div>

  <div>
    <EoutletFooter />
  </div>
</template>
