<script lang="ts" setup>
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import Subtitle from "@/components/Layouts/Subtitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";
</script>

<template>
  <WebsiteLayout>
    <Navbar />
    <Subtitle>오시는 길</Subtitle>
    <Subnavi>
      <template #depth1>
        <a href="/pages/group/">그룹소개</a>
      </template>
      <template #depth2>
        <a href="/pages/location/">오시는 길</a>
      </template>
    </Subnavi>
    <div class="map_wrap w-hull relative">
      <div class="map_area">
        <img
          src="https://profile.silveredu.net/_nuxt/img/s_pin.96fa80c.png"
          class="absolute z-10 right-[24%] bottom-[52%] md:right-[35%] md:bottom-[50%] lg:right-[44%] lg:bottom-[48%]"
        />

        <img src="@/assets/scss/images/KakaoMap_20240726_110002.png" class="w-full h-full object-cover" />
      </div>

      <div class="container mx-auto">
        <div class="bg-primary text-white py-8 px-12 -mt-20 relative">
          <h1 class="text-3xl font-bold">이케이 주식회사</h1>
          <p class="text-xl flex items-center justify-cente">
            (16976) 경기도 용인시 기흥구 기흥로 58, 기흥 ICT SKV1 B동 29층
            <span class="circle">
              <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.667 16.482C12.0026 16.9405 12.4308 17.3199 12.9224 17.5944C13.4141 17.869 13.9578 18.0322 14.5167 18.0731C15.0755 18.114 15.6365 18.0316 16.1614 17.8315C16.6863 17.6314 17.163 17.3182 17.5591 16.9132L19.9035 14.5173C20.6152 13.7642 21.0091 12.7555 21.0002 11.7085C20.9913 10.6615 20.5804 9.65995 19.8559 8.91958C19.1315 8.17921 18.1515 7.75925 17.127 7.75015C16.1025 7.74105 15.1156 8.14354 14.3786 8.87094L13.0345 10.2366"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.3333 14.518C15.9977 14.0595 15.5696 13.6801 15.0779 13.4055C14.5862 13.131 14.0425 12.9677 13.4836 12.9268C12.9248 12.8859 12.3639 12.9683 11.8389 13.1685C11.314 13.3686 10.8373 13.6818 10.4412 14.0867L8.09682 16.4826C7.38508 17.2358 6.99125 18.2445 7.00015 19.2915C7.00905 20.3385 7.41997 21.34 8.14441 22.0804C8.86885 22.8207 9.84884 23.2407 10.8733 23.2498C11.8978 23.2589 12.8848 22.8564 13.6217 22.129L14.958 20.7633"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </p>
          <p class="text-base opacity-60 mt-4">※고층 전용 엘리베이터 이용 권장</p>
        </div>
        <div>
          <ul class="way">
            <li>
              <div>
                <svg viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37.8516" cy="37" r="37" fill="#EEEEEE" />
                  <path
                    d="M46.6016 46H29.1016V47.25C29.1016 47.9404 28.5419 48.5 27.8516 48.5H26.6016C25.9112 48.5 25.3516 47.9404 25.3516 47.25V34.75L28.4522 27.5152C28.8461 26.596 29.75 26 30.7501 26H44.9531C45.9532 26 46.8569 26.596 47.2509 27.5152L50.3516 34.75V47.25C50.3516 47.9404 49.7919 48.5 49.1016 48.5H47.8516C47.1612 48.5 46.6016 47.9404 46.6016 47.25V46ZM47.8516 37.25H27.8516V43.5H47.8516V37.25ZM28.0715 34.75H47.6317L44.9531 28.5H30.7501L28.0715 34.75ZM30.9766 42.25C29.941 42.25 29.1016 41.4105 29.1016 40.375C29.1016 39.3395 29.941 38.5 30.9766 38.5C32.0121 38.5 32.8516 39.3395 32.8516 40.375C32.8516 41.4105 32.0121 42.25 30.9766 42.25ZM44.7266 42.25C43.6911 42.25 42.8516 41.4105 42.8516 40.375C42.8516 39.3395 43.6911 38.5 44.7266 38.5C45.7621 38.5 46.6016 39.3395 46.6016 40.375C46.6016 41.4105 45.7621 42.25 44.7266 42.25Z"
                    fill="#007CC4"
                  />
                </svg>
                <h2 class="font-semibold">차량 이용 시</h2>
              </div>
              <div>
                <span class="list">기흥 ICT SKV1 B동 주차장 이용 (주차 혼잡)</span>
                <span class="list">지하 6층 주차 권장</span>
              </div>
            </li>
            <li>
              <div>
                <svg viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37.8516" cy="37" r="37" fill="#EEEEEE" />
                  <path
                    d="M44.3516 46L46.6016 47.875V48.5H29.1016V47.875L31.3516 46H29.1016C27.7208 46 26.6016 44.8808 26.6016 43.5V29.75C26.6016 26.9886 28.8401 24.75 31.6016 24.75H44.1016C46.8629 24.75 49.1016 26.9886 49.1016 29.75V43.5C49.1016 44.8808 47.9823 46 46.6016 46H44.3516ZM39.1016 27.25V34.75H46.6016V29.75C46.6016 28.3693 45.4823 27.25 44.1016 27.25H39.1016ZM36.6016 27.25H31.6016C30.2208 27.25 29.1016 28.3693 29.1016 29.75V34.75H36.6016V27.25ZM46.6016 37.25H29.1016V43.5H46.6016V37.25ZM32.2266 42.25C31.191 42.25 30.3516 41.4105 30.3516 40.375C30.3516 39.3395 31.191 38.5 32.2266 38.5C33.2621 38.5 34.1016 39.3395 34.1016 40.375C34.1016 41.4105 33.2621 42.25 32.2266 42.25ZM43.4766 42.25C42.4411 42.25 41.6016 41.4105 41.6016 40.375C41.6016 39.3395 42.4411 38.5 43.4766 38.5C44.5121 38.5 45.3516 39.3395 45.3516 40.375C45.3516 41.4105 44.5121 42.25 43.4766 42.25Z"
                    fill="#007CC4"
                  />
                </svg>

                <h2 class="font-semibold">지하철 이용 시</h2>
              </div>
              <div>
                <span class="list">지하철(수인분당선) 기흥역 1,2번 출구</span>
                <span class="list">지하철(수인분당선) 기흥역 하차 후 도보 9분</span>
              </div>
            </li>
            <li>
              <div>
                <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37.8516" cy="37" r="37" fill="#EEEEEE" />
                  <path
                    d="M44.1016 46H31.6016V47.25C31.6016 47.9404 31.0419 48.5 30.3516 48.5H27.8516C27.1612 48.5 26.6016 47.9404 26.6016 47.25V36H25.3516V31H26.6016V27.25C26.6016 25.8693 27.7208 24.75 29.1016 24.75H46.6016C47.9823 24.75 49.1016 25.8693 49.1016 27.25V31H50.3516V36H49.1016V47.25C49.1016 47.9404 48.5419 48.5 47.8516 48.5H45.3516C44.6612 48.5 44.1016 47.9404 44.1016 47.25V46ZM29.1016 27.25V34.75H46.6016V27.25H29.1016ZM46.6016 37.25H29.1016V43.5H46.6016V37.25ZM32.2266 42.25C31.191 42.25 30.3516 41.4105 30.3516 40.375C30.3516 39.3395 31.191 38.5 32.2266 38.5C33.2621 38.5 34.1016 39.3395 34.1016 40.375C34.1016 41.4105 33.2621 42.25 32.2266 42.25ZM43.4766 42.25C42.4411 42.25 41.6016 41.4105 41.6016 40.375C41.6016 39.3395 42.4411 38.5 43.4766 38.5C44.5121 38.5 45.3516 39.3395 45.3516 40.375C45.3516 41.4105 44.5121 42.25 43.4766 42.25Z"
                    fill="#007CC4"
                  />
                </svg>
                <h2 class="font-semibold">버스 이용 시</h2>
              </div>
              <div>
                <span class="list">기흥역 정류장 하차 도보 9~12분 거리</span>
                <span class="list">정류장번호 : 29269 (수원컨트리클럽 방면, 롯데캐슬스카이 방면)</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="notice">
          <h2 class="font-semibold">주차 안내 및 이용자 준수 사항</h2>
          <span class="list">무료 (주차 후 행사장 방문하여 차량번호 작성)</span>
          <span class="list">본 건물 주차시에만 적용됩니다. (외부 주차장 무료 지원 X)</span>
          <span class="list">주차장 내에서는 안전수칙을 준수해 주십시오.</span>
          <span class="list">아래의 사항에 대해서는 배상 책임을 지지 않습니다.</span>
          <div>
            <span class="list"> 천재지변 또는 유사한 사태로 발생되는 피해</span>
            <span class="list">이용자 과실 또는 고의로 발생되는 피해</span>
            <span class="list">차량내 귀중품 보관 금지에 따른 사고</span>
            <span class="list">법령에 의한 명령이나 강제 집행등으로 발생되는 피해</span>
            <span class="list">주차구역 이외의 지역에 주차한 차량의 파손 또는 도난으로 인한 피해</span>
            <span class="list">무단주차로 인한 견인 및 견인 보관료</span>
          </div>
        </div>
      </div>
    </div>
  </WebsiteLayout>
</template>

<style lang="scss" scoped>
.map_area {
  margin-top: rem(50);
  width: 100%;
  height: 300px;

  @include bp(desktop) {
    height: 500px;
  }
  @apply relative overflow-hidden bg-black;
}
.map_area:hover .hover_txt {
  opacity: 1;
  margin-top: 20px;
  background: #000;
}

/* Ensure the image covers the entire area, including on tablets */
@media (max-width: 1024px) {
  /* Adjust this breakpoint if necessary */
  .map_area img {
    object-fit: cover;
  }
}

.sub {
  @include bg("@/assets/scss/images/bg_sub.png", center);
}
span.list {
  margin: 5px 0;
  display: block;
  padding-left: 3px;
  margin-left: 10px;
  position: relative;
  &::before {
    position: absolute;
    left: -10px;
    content: "·";
  }
}
.circle {
  aspect-ratio: 1 / 1;
  max-width: 40px;
  background-color: #000;
  border-radius: 50%;
  width: 20%;
  @apply flex bg-black rounded-full items-center justify-center ml-2 opacity-70;
}
.way {
  li {
    display: flex;
    border-bottom: 1px solid $dark-60;
    font-size: $font-xl;
    flex-direction: column;
    padding: 1rem 1.5rem;
    @include bp(tablet-lg) {
      flex-direction: row;
    }
    @include bp(desktop) {
    }

    div {
      @include bp(tablet-lg) {
        margin: 20px;
      }
      @include bp(desktop) {
      }
      &:first-child {
        display: flex;
        align-items: center;
        text-align: left;

        @include bp(tablet-lg) {
          width: 230px;
        }
      }
      svg {
        width: 3.125rem;
        height: 3.125rem;
        @include bp(desktop) {
          width: 4.688rem;
          height: 4.688rem;
        }
      }
    }
    h2 {
      margin-left: 10px;
    }
    &:last-child {
      border-bottom: 0;
    }
  }
}
.notice {
  background: $dark-30;
  margin-top: 40px;
  padding: 20px;
  font-size: $font-lg;
  @include bp(desktop) {
    padding: 30px;
  }
  div span {
    color: $dark-200;
    font-size: $font-base;
    margin-left: 10px;
    &::before {
      position: absolute;
      left: -10px;
      content: "-";
    }
  }
}
</style>
