<script lang="ts" setup>
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import SubTitle from "@/components/Layouts/SubTitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";
import Tab from "@/components/Layouts/Tab.vue";
import Paging from "@/components/Layouts/Paging.vue";
</script>
<template>
  <WebsiteLayout>
    <Navbar />
    <SubTitle>EVENT</SubTitle>
    <Subnavi>
      <template #depth1>
        <a href="/pages/event/">이벤트</a>
      </template>
      <template #depth2>
        <a href="/pages/Recruit/">진행중 이벤트</a>
      </template>
    </Subnavi>
    <div class="container">
      <Tab>전체</Tab>
      <div class="event">
        <ul>
          <li>
            <div class="text_area">
              <a href="#" target="_blank">
                <h2 class="page-sub-title-bold">제8회 크리스마스 로고 공모전</h2>
                <h4 class="page-sub">나의 작품이 스페셜 로고가 되다!</h4>
                <p>발표 : 2024-12-12</p>
                <p>경품 : [당첨자 1인] 다이노 테트리스 퍼즐 20세트(22만원 상당) + 공식 로고 게시</p>
                <p>[참여자 전원] 500P 지급</p>
              </a>
            </div>
            <div class="img_area">
              <a href="#" target="_blank">
                <img src="//images.kidkids.net/issue/event/event_img_20241120153032.GIF" />
              </a>
            </div>
          </li>
          <li>
            <div class="text_area">
              <a href="#" target="_blank">
                <h2 class="page-sub-title-bold">2024 키드키즈 콘서트 성원에 감사드립니다!</h2>
                <h4 class="page-sub">2024 키드키즈 콘서트 <고전과 낭만사이> 가을밤 울려 퍼진 아름다운 선율, 그 현장 속으로!</h4>
                <p>기간 : 2024-10-23 ~ 2024-11-08</p>
              </a>
            </div>
            <div class="img_area">
              <a href="#" target="_blank">
                <img src="//images.kidkids.net/issue/event/event_img_20241024090625.PNG" />
              </a>
            </div>
          </li>
          <li>
            <div class="text_area">
              <a href="#" target="_blank">
                <h2 class="page-sub-title-bold">놀이 팁, 운영팁도 e-book으로 구-독</h2>
                <h4 class="page-sub">언제 어디서나 쉽게 체험해보세요!</h4>
                <p>기간 : 2022-06-21 ~ 2024-12-31</p>
              </a>
            </div>
            <div class="img_area">
              <a href="#" target="_blank">
                <img src="//img.kidkids.net/banner/upimage/MAIN-2014_C1C1_20241025121357.png" />
              </a>
            </div>
          </li>
          <li class="end">
            <div class="text_area">
              <a href="#" target="_blank">
                <h2 class="page-sub-title-bold">2024 키드키즈 콘서트 성원에 감사드립니다!</h2>
                <h4 class="page-sub">2024 키드키즈 콘서트 <고전과 낭만사이> 가을밤 울려 퍼진 아름다운 선율, 그 현장 속으로!</h4>
                <p>기간 : 2024-10-23 ~ 2024-11-08</p>
              </a>
            </div>
            <div class="img_area">
              <a href="#" target="_blank">
                <img src="//images.kidkids.net/issue/event/event_img_20241024090625.PNG" />
              </a>
            </div>
            <div class="end_area">
              <div class="endname">
                <span>
                  <h2 class="page-sub-title-bold">이벤트 종료</h2>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="mt-16">
        <Paging />
      </div>
    </div>
  </WebsiteLayout>
</template>
<style lang="scss" scoped>
.event {
  border-top: 1px solid $dark;
  ul {
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid $dark-60;
      padding: rem(40) 0;
      width: 100%;
      @include bp(desktop) {
        flex-direction: row;
        justify-content: space-between;
      }
      .text_area {
        color: $dark;
        letter-spacing: -1px;
        width: 100%;
        @include bp(desktop) {
          width: 40%;
        }
        @include bp(desktop-lg) {
          width: 60%;
        }
        h2 {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          @include bp(desktop-lg) {
            max-width: 95%;
            -webkit-line-clamp: 1;
          }
        }
        h4 {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          clear: both;
          margin: rem(4) 0 rem(15);
          @include bp(desktop) {
            max-width: 77%;
            margin: rem(4) 0 rem(30);
          }
        }
        p {
          @apply text-base text-[#848484];
        }
        a h2:hover,
        a h4:hover {
          text-decoration: underline;
        }
      }
      .img_area {
        width: 100%;
        padding-bottom: 48%;
        position: relative;
        margin-top: rem(24);
        @include bp(desktop) {
          width: 50%;
          padding-bottom: 24%;
          margin-top: 0px;
        }
        @include bp(desktop-lg) {
          width: 57.8%;
          padding-bottom: 22.5%;
        }
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.3s ease;
        }
      }
    }
    .end {
      position: relative;
      .end_area {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000bd;
        .endname {
          width: 100%;
          height: 100%;
          text-align: center;
          display: table;
          span {
            display: table-cell;
            vertical-align: middle;
            h2 {
              @apply text-2xl md:text-4xl font-bold;
              color: $default;
              border: 1px solid $default;
              display: inline-block;
              padding: rem(16) rem(60);
            }
          }
        }
      }
    }
  }
}
</style>
