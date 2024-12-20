<script lang="ts" setup>
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import SubTitle from "@/components/Layouts/SubTitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";
import Tab from "@/components/Layouts/Tab.vue";
</script>
<template>
  <WebsiteLayout>
    <Navbar />
    <SubTitle>캐릭터 소개</SubTitle>
    <Subnavi>
      <template #depth1>
        <a href="/pages/group/">그룹소개</a>
      </template>
      <template #depth2>
        <a href="/pages/character/">캐릭터 소개</a>
      </template>
    </Subnavi>
    <div class="container">
      <div class="page-title text-black">
        EK㈜ 키드키즈에서는 아이들이 흥미를 가지고 <span class="blockcases"></span>학습할 수 있도록 <span class="pcblock"></span>캐릭터를 활용해
        다양한 프로그램을 개발하고 있습니다.
      </div>
      <img src="@/assets/scss/images/character_all.png" alt="캐릭터전체" class="character_all" />
      <Tab>전체</Tab>
      <h1 class="page-title">티피하파 <span>(TEEPAHAPA)</span></h1>
      <h2 class="page-group-sub text-black">
        <span>티파하파</span>는 이케이의 대표 캐릭터입니다.<br />
        숲 속에 사는 요정 티파, 하파, 파니, 키니, 후니, 톡스, 칙스는 모험을 즐기는 유랑악단입니다.
      </h2>
      <div class="cha_wrap">
        <ul>
          <li>
            <div class="wrap">
              <div class="chracter_on">
                <img src="@/assets/scss/images/character_01_teepa.png" />
              </div>
              <div class="chracter_off">
                <div class="midwrap">
                  <div class="mid">
                    <h3 class="page-group-sub">티파 (Teepa)</h3>
                    <p class="page-sub">
                      하파의 이름은 합하(閤下)에서 따왔습니다. <br />
                      합하는 존귀한 사람을 높여 부르는 말로<br />
                      고려시대 존경받는 우두머리 장군을<br />
                      합하라고 불렀습니다. 용감하고<br />
                      힘이 센 장군과 같아 이름이 하파입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nametag">
              <div class="name">
                <h5 class="page-sub">Teepa</h5>
                <h3 class="page-group-sub">티파</h3>
              </div>
              <img src="@/assets/scss/images/character_01_teepa_2.png" />
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="chracter_on">
                <img src="@/assets/scss/images/character_02.png" />
              </div>
              <div class="chracter_off">
                <div class="midwrap">
                  <div class="mid">
                    <h3 class="page-group-sub">하파 (Hapa)</h3>
                    <p class="page-sub">
                      하파의 이름은 합하(閤下)에서 따왔습니다. <br />
                      합하는 존귀한 사람을 높여 부르는 말로<br />
                      고려시대 존경받는 우두머리 장군을<br />
                      합하라고 불렀습니다. 용감하고<br />
                      힘이 센 장군과 같아 이름이 하파입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nametag">
              <div class="name">
                <h5 class="page-sub">Hapa</h5>
                <h3 class="page-group-sub">하파</h3>
              </div>
              <img src="@/assets/scss/images/character_02_1.png" />
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="chracter_on">
                <img src="@/assets/scss/images/character_03.png" />
              </div>
              <div class="chracter_off">
                <div class="midwrap">
                  <div class="mid">
                    <h3 class="page-group-sub">하파 (Hapa)</h3>
                    <p class="page-sub">
                      하파의 이름은 합하(閤下)에서 따왔습니다. <br />
                      합하는 존귀한 사람을 높여 부르는 말로<br />
                      고려시대 존경받는 우두머리 장군을<br />
                      합하라고 불렀습니다. 용감하고<br />
                      힘이 센 장군과 같아 이름이 하파입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nametag">
              <div class="name">
                <h5 class="page-sub">Teepa</h5>
                <h3 class="page-group-sub">티파</h3>
              </div>
              <img src="@/assets/scss/images/character_03_1.png" />
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="chracter_on">
                <img src="@/assets/scss/images/character_04.png" />
              </div>
              <div class="chracter_off">
                <div class="midwrap">
                  <div class="mid">
                    <h3 class="page-group-sub">하파 (Hapa)</h3>
                    <p class="page-sub">
                      하파의 이름은 합하(閤下)에서 따왔습니다. <br />
                      합하는 존귀한 사람을 높여 부르는 말로<br />
                      고려시대 존경받는 우두머리 장군을<br />
                      합하라고 불렀습니다. 용감하고<br />
                      힘이 센 장군과 같아 이름이 하파입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nametag">
              <div class="name">
                <h5 class="page-sub">Teepa</h5>
                <h3 class="page-group-sub">티파</h3>
              </div>
              <img src="@/assets/scss/images/character_04_1.png" />
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="chracter_on">
                <img src="@/assets/scss/images/character_05.png" />
              </div>
              <div class="chracter_off">
                <div class="midwrap">
                  <div class="mid">
                    <h3 class="page-group-sub">하파 (Hapa)</h3>
                    <p class="page-sub">
                      하파의 이름은 합하(閤下)에서 따왔습니다. <br />
                      합하는 존귀한 사람을 높여 부르는 말로<br />
                      고려시대 존경받는 우두머리 장군을<br />
                      합하라고 불렀습니다. 용감하고<br />
                      힘이 센 장군과 같아 이름이 하파입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nametag">
              <div class="name">
                <h5 class="page-sub">Teepa</h5>
                <h3 class="page-group-sub">티파</h3>
              </div>
              <img src="@/assets/scss/images/character_05_1.png" />
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="chracter_on">
                <img src="@/assets/scss/images/character_06.png" />
              </div>
              <div class="chracter_off">
                <div class="midwrap">
                  <div class="mid">
                    <h3 class="page-group-sub">하파 (Hapa)</h3>
                    <p class="page-sub">
                      하파의 이름은 합하(閤下)에서 따왔습니다. <br />
                      합하는 존귀한 사람을 높여 부르는 말로<br />
                      고려시대 존경받는 우두머리 장군을<br />
                      합하라고 불렀습니다. 용감하고<br />
                      힘이 센 장군과 같아 이름이 하파입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nametag">
              <div class="name">
                <h5 class="page-sub">Teepa</h5>
                <h3 class="page-group-sub">티파</h3>
              </div>
              <img src="@/assets/scss/images/character_06_1.png" />
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="chracter_on">
                <img src="@/assets/scss/images/character_07.png" />
              </div>
              <div class="chracter_off">
                <div class="midwrap">
                  <div class="mid">
                    <h3 class="page-group-sub">하파 (Hapa)</h3>
                    <p class="page-sub">
                      하파의 이름은 합하(閤下)에서 따왔습니다. <br />
                      합하는 존귀한 사람을 높여 부르는 말로<br />
                      고려시대 존경받는 우두머리 장군을<br />
                      합하라고 불렀습니다. 용감하고<br />
                      힘이 센 장군과 같아 이름이 하파입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nametag">
              <div class="name">
                <h5 class="page-sub">Teepa</h5>
                <h3 class="page-group-sub">티파</h3>
              </div>
              <img src="@/assets/scss/images/character_07_1.png" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </WebsiteLayout>
</template>
<style lang="scss" scoped>
.blockcases {
  display: block;
  @include bp(mobile) {
    display: inline-block;
  }
  @include bp(mobile-lg) {
    display: block;
  }
  @include bp(desktop) {
    display: inline-block;
  }
}
.pcblock {
  display: inline-block;
  @include bp(desktop) {
    display: block;
  }
}
.character_all {
  margin: rem(60) 0 rem(100);
  @include bp(desktop) {
    margin: rem(140) 0 rem(160);
  }
}
h1 {
  color: $dark;
  span {
    color: $dark-400;
  }
}
h2 {
  margin-top: 20px;
  span {
    font-weight: 700;
  }
}
.cha_wrap {
  margin-top: rem(40);
  @include bp(desktop) {
    margin-top: rem(60);
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: rem(20);
    row-gap: rem(30);
    @include bp(mobile-lg) {
      row-gap: rem(50);
    }
    @include bp(desktop) {
      grid-template-columns: repeat(3, 1fr);
      row-gap: rem(60);
    }
    li {
      display: inline-block;
      .wrap {
        background: $dark-400;
        width: 100%;
        height: 58%;
        position: relative;
        @include bp(mobile-lg) {
          height: 65%;
        }
        @include bp(desktop-lg) {
          width: 453px;
          height: 400px;
        }
        .chracter_off {
          background: rgb(0 0 0 / 70%);
          color: #fff;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all 0.5s ease-out;
          .midwrap {
            width: 100%;
            height: 100%;
            text-align: center;
            display: table;
            .mid {
              display: table-cell;
              vertical-align: middle;
              text-align: left;
              padding-left: rem(30);
              h3 {
                font-weight: 700;
                display: none;
                @include bp(tablet) {
                  display: block;
                }
              }
              p {
                display: none;
                @include bp(tablet) {
                  display: block;
                }
              }
            }
          }
        }
      }
      .nametag {
        display: flex;
        justify-content: space-between;
        background: #fff;
        width: 100%;
        box-shadow: 0 2px 7px #0000001c;
        margin-top: 20px;
        padding: 10px 8px 8px 16px;
        @include bp(mobile-lg) {
          padding: 35px 16px 20px 30px;
        }
        .name {
          h5 {
            color: $dark-300;
          }
          h3 {
            @apply text-black font-extrabold;
          }
        }
        img {
          margin-top: 16px;
          width: 38%;
          @include bp(mobile-lg) {
            width: auto;
          }
        }
      }
    }
    li:hover .chracter_off {
      opacity: 0;
      @include bp(tablet) {
        opacity: 1;
      }
    }
  }
}
</style>
