<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// 이미지 파일을 import로 가져옵니다.
import award01 from "@/assets/scss/images/award_01.png";
import award02 from "@/assets/scss/images/award_02.png";
import award03 from "@/assets/scss/images/award_03.png";
import award04 from "@/assets/scss/images/award_04.png";
import award05 from "@/assets/scss/images/award_05.png";
import award06 from "@/assets/scss/images/award_06.png";
import award07 from "@/assets/scss/images/award_07.png";
import award08 from "@/assets/scss/images/award_08.png";
import award09 from "@/assets/scss/images/award_09.png";

// 수상 데이터 배열
const awards = [
  {
    img: award01,
    title: "부총리 겸 교육부<br />장관상 수상",
    link: "https://example.com/award-01",
  },
  {
    img: award02,
    title: "중소벤처기업부<br />장관 표창 수상",
    link: "https://example.com/award-02",
  },
  {
    img: award03,
    title: "부총리 겸 기획재정부<br />장관 표창 수상",
    link: "https://example.com/award-03",
  },
  {
    img: award04,
    title: "중소벤처기업부<br />장관상 수상",
    link: "https://example.com/award-04",
  },
  {
    img: award05,
    title: "국무총리<br />표창 수상",
    link: "https://example.com/award-05",
  },
  {
    img: award06,
    title: "보건복지부<br />장관 표창 수상",
    link: "https://example.com/award-06",
  },
  {
    img: award07,
    title: "과학기술정보통신부<br />장관 표창 수상",
    link: "https://example.com/award-07",
  },
  {
    img: award08,
    title: "산업통상자원부<br />장관 표창 수상",
    link: "https://example.com/award-08",
  },
  {
    img: award09,
    title: "미래창조과학부<br />장관상 수상",
    link: "https://example.com/award-09",
  },
];

const modules = [Autoplay];
</script>

<template>
  <swiper
    :spaceBetween="10"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      390: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 35,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 6.5,
        spaceBetween: 5,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <!-- v-for로 반복문 적용, 링크도 동적으로 바인딩 -->
    <swiper-slide v-for="(award, index) in awards" :key="index" class="swiper-slide-item">
      <a :href="award.link">
        <img :src="award.img" alt="Award Image" />
        <!-- 이미지 경로를 동적으로 바인딩 -->
        <h3 v-html="award.title"></h3>
      </a>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper-slide-item {
  img {
    margin: auto;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    margin-top: rem(20);
  }
}
</style>
