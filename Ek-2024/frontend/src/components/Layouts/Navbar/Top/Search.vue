<script lang="ts" setup>
import SearchIcon from "@/components/Icons/Navbar/Top/SearchIcon.vue";

// 검색어
const searchWord = defineModel<string | null>();

defineProps({
  // 검색창 placeholder
  placeholder: {
    type: String,
    required: false,
    default: "검색어를 입력해주세요",
  },
});

/**
 * 검색 버튼 클릭 혹은 검색 Input 엔터 입력
 */
const onClickSearch = () => {
  if (!searchWord.value) {
    return;
  }

  alert("몰검색 - " + searchWord.value);
};
</script>

<template>
  <div class="ml-4 w-[400px] border-[3px] border-maingreen rounded-full overflow-hidden kk-search-input">
    <label class="input flex items-center gap-2 rounded-full">
      <input type="text" class="grow" :placeholder="placeholder" v-model="searchWord" @keyup.enter="onClickSearch" />

      <div class="hover:cursor-pointer" @click="onClickSearch">
        <SearchIcon />
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.kk-search-input {
  font-size: 1rem !important;
  font-family: "Malgun Gothic", sans-serif;
}
</style>
