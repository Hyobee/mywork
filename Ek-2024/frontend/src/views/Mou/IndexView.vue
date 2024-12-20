<script lang="ts" setup>
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import SubTitle from "@/components/Layouts/SubTitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";
import Paging from "@/components/Layouts/Paging.vue";
</script>
<template>
  <WebsiteLayout>
    <Navbar />
    <SubTitle>MOU 체결기관 </SubTitle>
    <Subnavi>
      <template #depth1>
        <a href="/pages/group/">그룹소개</a>
      </template>
      <template #depth2>
        <a href="/pages/mou/">MOU 체결기관</a>
      </template>
    </Subnavi>
    <div class="container">
      <h3><span>EK㈜</span>와 업무협약을 맺은 <span>협력기관</span>입니다.</h3>
      <div class="mou">
        <ul>
          <li>
            <a href="#" target="_blank">
              <div class="img_area">
                <img src="//img.kidkids.net/user_files/172378441034.JPG" />
              </div>
              <div class="text_area">
                <h4>강원특별자치도어린이집연합회</h4>
                <h2>이케이그룹, 강원특별자치도어린이집연합회와 업무협약 체결</h2>
                <h5>
                  이케이그룹(회장 이희주)과 강원특별자치도어린이집연합회(회장 유종운)가 8월 14일, 강원특별자치도육아종합지원센터에서 영유아보·교육
                  발전을 위해 함께 하기로 업무협약을 체결했다. 협약식에는 유종운 회장을 비롯해 한동숙 상임부회장, 박미연 국공립분과장, 김순미
                  사회복지법인분과장, 안
                </h5>
                <p>2024-08-16</p>
              </div>
              <span>
                <img src="@/assets/scss/icons/arrow-right.svg" />
              </span>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <div class="img_area">
                <img src="//img.kidkids.net/user_files/172378441034.JPG" />
              </div>
              <div class="text_area">
                <h4>강원특별자치도어린이집연합회</h4>
                <h2>이케이그룹, 강원특별자치도어린이집연합회와 업무협약 체결</h2>
                <h5>
                  이케이그룹(회장 이희주)과 강원특별자치도어린이집연합회(회장 유종운)가 8월 14일, 강원특별자치도육아종합지원센터에서 영유아보·교육
                  발전을 위해 함께 하기로 업무협약을 체결했다.
                </h5>
                <p>2024-08-16</p>
              </div>
              <span>
                <img src="@/assets/scss/icons/arrow-right.svg" />
              </span>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <div class="img_area">
                <img src="//img.kidkids.net/user_files/172378441034.JPG" />
              </div>
              <div class="text_area">
                <h4>강원특별자치도어린이집연합회</h4>
                <h2>이케이그룹, 강원특별자치도어린이집연합회와 업무협약 체결 이케이그룹, 강원특별자치도어린이집연합회와 업무협약 체결</h2>
                <h5>
                  이케이그룹(회장 이희주)과 강원특별자치도어린이집연합회(회장 유종운)가 8월 14일, 강원특별자치도육아종합지원센터에서 영유아보·교육
                  발전을 위해 함께 하기로 업무협약을 체결했다.
                </h5>
                <p>2024-08-16</p>
              </div>
              <span>
                <img src="@/assets/scss/icons/arrow-right.svg" />
              </span>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <div class="img_area">
                <img src="//img.kidkids.net/user_files/172378441034.JPG" />
              </div>
              <div class="text_area">
                <h4>강원특별자치도어린이집연합회</h4>
                <h2>이케이그룹, 강원특별자치도어린이집연합회와 업무협약 체결</h2>
                <h5>
                  이케이그룹(회장 이희주)과 강원특별자치도어린이집연합회(회장 유종운)가 8월 14일, 강원특별자치도육아종합지원센터에서 영유아보·교육
                  발전을 위해 함께 하기로 업무협약을 체결했다.
                </h5>
                <p>2024-08-16</p>
              </div>
              <span>
                <img src="@/assets/scss/icons/arrow-right.svg" />
              </span>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <div class="img_area">
                <img src="//img.kidkids.net/user_files/172378441034.JPG" />
              </div>
              <div class="text_area">
                <h4>강원특별자치도어린이집연합회</h4>
                <h2>이케이그룹, 강원특별자치도어린이집연합회와 업무협약 체결</h2>
                <h5>
                  이케이그룹(회장 이희주)과 강원특별자치도어린이집연합회(회장 유종운)가 8월 14일, 강원특별자치도육아종합지원센터에서 영유아보·교육
                  발전을 위해 함께 하기로 업무협약을 체결했다.
                </h5>
                <p>2024-08-16</p>
              </div>
              <span>
                <img src="@/assets/scss/icons/arrow-right.svg" />
              </span>
            </a>
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
h3 {
  @apply text-xl font-normal;
  padding-bottom: rem(10);
  border-bottom: 1px solid $dark-60;
  letter-spacing: -1px;
  span {
    @apply font-bold;
  }
}
.mou {
  ul {
    li {
      border-bottom: 1px solid $dark-60;
      padding: rem(30) 0;
      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        @include bp(tablet) {
          flex-direction: row;
        }
        .img_area {
          width: 100%;
          padding-bottom: 50%;
          position: relative;
          @include bp(tablet) {
            width: 35%;
            padding-bottom: 22%;
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
        .text_area {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          letter-spacing: -1px;
          color: $dark;
          @include bp(tablet) {
            width: 50%;
          }

          h4 {
            @apply text-lg font-medium;
            margin-top: 10px;
            @include bp(tablet) {
              margin-top: 0;
            }
          }
          h2 {
            @apply text-3xl font-bold;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            @include bp(tablet) {
              -webkit-line-clamp: 1;
            }
          }
          h5 {
            @apply text-base text-[#555];
            margin: 10px 0 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;

            @include bp(tablet) {
              -webkit-line-clamp: 2;
            }
          }
          p {
            @apply text-sm;
            color: $dark-200;
          }
        }
        span {
          width: 5%;
          display: none;
          @include bp(tablet) {
            display: block;
          }

          img {
            width: rem(35);
          }
        }
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
