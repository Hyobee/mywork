<script lang="ts" setup>
import { ref } from "vue"; // Vue Composition API에서 ref 가져오기
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import SubTitle from "@/components/Layouts/SubTitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";

// activeTab 상태 관리
const activeTab1 = ref<number>(0);
const activeTab2 = ref<number>(3);
const activeTab3 = ref<number>(6);
</script>

<template>
  <WebsiteLayout>
    <Navbar />
    <SubTitle>인재채용</SubTitle>
    <Subnavi>
      <template #depth1>
        <a href="/pages/group/">그룹소개</a>
      </template>
      <template #depth2>
        <a href="/pages/Recruit/">인재채용</a>
      </template>
      <template #depth3>
        <a href="/pages/Recruit/">회사생활 · 복리후생</a>
      </template>
    </Subnavi>
    <!--Grow Up-->
    <div class="container gather gatheraa">
      <div class="textbox">
        <div>
          <p class="page-group-sub gg">Grow Up</p>
          <div class="page-title text-black">성장하는 EK(주) 키드키즈</div>
          <p class="page-group-sub">
            사이트 운영 및 콘텐츠 품질과<br />
            관련된 외부 인증을 통해 신뢰할 수 있는 회사로 성장합니다.
          </p>
          <div class="text-xl tabbtnbox">
            <!-- 탭 클릭 시 activeTab 값 변경 -->
            <div class="tabbtn" :class="{ 'active-tab': activeTab1 === 0 }" @click="activeTab1 = 0">외부인증</div>
            <div class="tabbtn" :class="{ 'active-tab': activeTab1 === 1 }" @click="activeTab1 = 1">1:1 교육</div>
            <div class="tabbtn" :class="{ 'active-tab': activeTab1 === 2 }" @click="activeTab1 = 2">사회공헌</div>
          </div>
        </div>
      </div>
      <div class="imgbox">
        <!-- activeTab에 맞는 이미지만 표시 -->
        <div v-if="activeTab1 === 0" class="tabimg"><img src="//ek.kidkids.net/story/images/img_grow.jpg" /></div>
        <div v-if="activeTab1 === 1" class="tabimg"><img src="//ek.kidkids.net/story/images/img_grow2.jpg" /></div>
        <div v-if="activeTab1 === 2" class="tabimg"><img src="//ek.kidkids.net/story/images/img_grow3.jpg" /></div>
      </div>
    </div>
    <!--With Us-->
    <div class="bg-[#f4f4f4]">
      <div class="container gather reflection">
        <div class="textbox">
          <div>
            <p class="page-group-sub gg">With Us</p>
            <div class="page-title text-black">함께하는 EK(주) 키드키즈</div>
            <p class="page-group-sub">임직원이 한자리에 모여 <br />회사의 비전을 공유합니다.</p>
            <div class="text-xl tabbtnbox">
              <!-- 탭 클릭 시 activeTab 값 변경 -->
              <div class="tabbtn" :class="{ 'active-tab': activeTab2 === 3 }" @click="activeTab2 = 3">비전 공유</div>
              <div class="tabbtn" :class="{ 'active-tab': activeTab2 === 4 }" @click="activeTab2 = 4">송년회</div>
              <div class="tabbtn" :class="{ 'active-tab': activeTab2 === 5 }" @click="activeTab2 = 5">워크샵</div>
            </div>
          </div>
        </div>
        <div class="imgbox">
          <!-- activeTab에 맞는 이미지만 표시 -->
          <div v-if="activeTab2 === 3" class="tabimg"><img src="//ek.kidkids.net/story/images/img_together.jpg" /></div>
          <div v-if="activeTab2 === 4" class="tabimg"><img src="//ek.kidkids.net/story/images/img_together2.jpg" /></div>
          <div v-if="activeTab2 === 5" class="tabimg"><img src="//ek.kidkids.net/story/images/img_together3.jpg" /></div>
        </div>
      </div>
    </div>
    <!--We Communicate-->
    <div class="container gather">
      <div class="textbox">
        <div>
          <p class="page-group-sub gg">We Communicate</p>
          <div class="page-title text-black">소통하는 EK(주) 키드키즈</div>
          <p class="page-group-sub">
            각 팀간의 원활한 협업을 위해 서로의 아이디어를 수시로<br />
            나누며 시너지를 높입니다.
          </p>
          <div class="text-xl tabbtnbox">
            <!-- 탭 클릭 시 activeTab 값 변경 -->
            <div class="tabbtn" :class="{ 'active-tab': activeTab3 === 6 }" @click="activeTab3 = 6">THINK SESSION</div>
            <div class="tabbtn" :class="{ 'active-tab': activeTab3 === 7 }" @click="activeTab3 = 7">BRAIN STORMING</div>
            <div class="tabbtn" :class="{ 'active-tab': activeTab3 === 8 }" @click="activeTab3 = 8">RECEPTION</div>
          </div>
        </div>
      </div>
      <div class="imgbox">
        <!-- activeTab에 맞는 이미지만 표시 -->
        <div v-if="activeTab3 === 6" class="tabimg"><img src="@/assets/scss/images/img_community.png" /></div>
        <div v-if="activeTab3 === 7" class="tabimg"><img src="@/assets/scss/images/img_community2.png" /></div>
        <div v-if="activeTab3 === 8" class="tabimg"><img src="@/assets/scss/images/img_community3.png" /></div>
      </div>
    </div>
    <div class="ekphoto">
      <img src="@/assets/scss/images/ekimg01.png" alt="" />
      <img src="@/assets/scss/images/ekimg02.png" alt="" />
      <img src="@/assets/scss/images/ekimg03.png" alt="" />
      <!-- <img src="@/assets/scss/images/ekimg04.png" alt="" /> -->
    </div>
    <div class="welfare">
      <div class="container">
        <div class="page-title text-black">EK 그룹 복리후생</div>
        <p class="page-group-sub">일하기 좋은 회사를 만들기 위해 다양한 복리후생 제도와 혜택을 진행하고 있습니다.</p>

        <ul class="welfarear">
          <li>
            <div class="icona"></div>
            <h2>주 4.5일 근무</h2>
            <p>매주 금요일 오후 1시 퇴근</p>
          </li>
          <li>
            <div class="icona icona01"></div>
            <h2>카페테리아 운영</h2>
            <p>전문 바리스타님과 함께하는 EK카페 모든 음료 500원</p>
          </li>
          <li>
            <div class="icona icona02"></div>
            <h2>임직원 할인혜택</h2>
            <p>당사 쇼핑몰 제품 할인 혜택 제공</p>
          </li>
          <li>
            <div class="icona icona03"></div>
            <h2>여행 지원</h2>
            <p>대명리조트 등 숙소 할인권 가격 상품 제공, 제주 여행 시 공항 5분 거리 내 오피스텔 제공</p>
          </li>
          <li>
            <div class="icona icona04"></div>
            <h2>복직률 100%</h2>
            <p>임신기간 중 단축근무, 출산휴가(임산부/배우자 모두) 새일 여성인턴제도를 통한 경력단절여성 채용 적극 진행</p>
          </li>
          <li>
            <div class="icona icona05"></div>
            <h2>기쁨과 슬픔 함께 나누기</h2>
            <p>조직 적응 및 업무효율 강화를 위한 체계적인 면담 및 케어 시스템</p>
            <p>신규입사자 3개월 코칭 시스템 및 팀장트레이닝 센터 운영</p>
          </li>
          <li>
            <div class="icona icona06"></div>
            <h2>눈치 보지 않고 연차 사용</h2>
            <p>자유로운 연차/반차 사용 문화 근로자의 날 휴무</p>
          </li>
          <li>
            <div class="icona icona07"></div>
            <h2>야근 및 회식 강요 NO</h2>
            <p>칼퇴가 아닌 정시 퇴근을 지향 왜곡된 회식 문화 / 음주 문화 없음</p>
          </li>
          <li>
            <div class="icona icona08"></div>
            <h2>함께 성장하는 교육관리 시스템</h2>
            <p>조직 적응 및 업무효율 강화를 위한 체계적인 면담 및 케어 시스템 신규입사자 3개월 코칭 시스템 및 팀장트레이닝 센터 운영</p>
          </li>
        </ul>
      </div>
    </div>
  </WebsiteLayout>
</template>

<style lang="scss" scoped>
p {
  word-break: keep-all;
}
.gather {
  @apply flex justify-between flex-col;
  @include bp(desktop-lg) {
    @apply flex-row py-16;
  }
}

.gatheraa {
  @apply pt-0;
}
.page-group-sub.gg {
  color: $primary;
}
.textbox {
  @apply flex-col items-start;
  p {
    @apply mt-4;
    text-align: left;
  }
  @include bp(desktop-lg) {
    @apply flex-row justify-between items-end flex;
  }
}
.textboxor {
  flex-direction: row-reverse;
}
.reflection {
  @include bp(desktop-lg) {
    flex-direction: row-reverse;
  }
}

.imgbox {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @include bp(desktop-lg) {
    justify-content: end;
    margin-top: 0;
  }

  .tabimg {
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
    @include bp(tablet) {
      width: 360px;
      padding-top: 320px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; /* 이미지를 컨테이너에 맞게 크기 조정 */
    }
  }
}

.tabbtnbox {
  @apply grid justify-center grid-cols-3 text-center w-full mt-4;

  @include bp(desktop-lg) {
    @apply w-[500px] mt-10 block text-left;
  }

  .tabbtn {
    cursor: pointer;
    padding: 10px 0;
    margin: 5px;
    border-bottom: 2px solid $dark-60;
    display: flex;
    align-items: center;
    justify-content: center;
    @include bp(desktop-lg) {
      justify-content: flex-start;
    }
  }
  .active-tab {
    border-bottom: 2px solid $primary;
    color: $primary;
  }
}

.ekphoto {
  @apply hidden;
  @include bp(desktop-lg) {
    @apply flex items-start gap-6 overflow-hidden justify-center w-full my-10;
  }
}

.welfare {
  @apply py-16;

  .welfarear {
    @apply grid grid-cols-2 gap-14 mt-12;
    @include bp(tablet-lg) {
      @apply grid-cols-3  mt-20;
    }

    @include bp(desktop-lg) {
      @apply gap-40;
    }
    li {
      .icona {
        width: 52px;
        height: 52px;
        margin-bottom: 30px;
        @include bg("@/assets/scss/images/welfare_00.svg");
        &.icona01 {
          @include bg("@/assets/scss/images/welfare_01.svg");
        }
        &.icona02 {
          @include bg("@/assets/scss/images/welfare_02.svg");
        }
        &.icona03 {
          @include bg("@/assets/scss/images/welfare_03.svg");
        }
        &.icona04 {
          @include bg("@/assets/scss/images/welfare_04.svg");
        }
        &.icona05 {
          @include bg("@/assets/scss/images/welfare_05.svg");
        }
        &.icona06 {
          @include bg("@/assets/scss/images/welfare_06.svg");
        }
        &.icona07 {
          @include bg("@/assets/scss/images/welfare_07.svg");
        }
        &.icona08 {
          @include bg("@/assets/scss/images/welfare_08.svg");
        }
      }

      h2 {
        font-size: $font-2xl;
        font-weight: 600;
      }
      p {
        color: $dark-300;
        font-size: $font-lg;
      }
    }
  }
}
</style>
