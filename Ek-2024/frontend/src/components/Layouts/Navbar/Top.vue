<script lang="ts" setup>
import Anchor from "@/components/Common/Anchor.vue";
import TopSearch from "@/components/Layouts/Navbar/Top/Search.vue";
import UserIcon from "@/components/Icons/User.vue";
import ShoppingCartIcon from "@/components/Icons/ShoppingCart.vue";

defineProps({
  // 검색창 placeholder
  searchInputPlaceholder: {
    type: String,
    required: false,
    default: "검색어를 입력해주세요",
  },
  // 브랜드 로고
  brandLogoImage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="relative w-full h-[100px] kk-pani-nav-top">
    <div class="flex container items-center justify-between select-none relative">
      <div>
        <Anchor href="/" class="flex-none">
          <img :src="brandLogoImage" alt="키드키즈" />
        </Anchor>
      </div>

      <div>
        <TopSearch :placeholder="searchInputPlaceholder" />
      </div>

      <div>
        <div class="flex space-x-6">
          <div class="flex flex-col items-center space-y-1">
            <UserIcon class="w-8 h-8" />
            <div class="text-sm">MY쇼핑</div>
          </div>

          <div class="flex flex-col items-center space-y-1">
            <ShoppingCartIcon class="w-8 h-8" />
            <div class="text-sm">장바구니</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kk-pani-nav-top {
  font-family: "Malgun Gothic", sans-serif;

  .sitemenu {
    li {
      @apply text-[18px] leading-loose hover:text-amber-400;

      a.bold {
        @apply text-[20px] font-bold;
      }
    }
  }
}
</style>
