<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// DOM 요소 참조
const header = ref<HTMLElement | null>(null);
const isScrolled = ref(false);
const isMenuOpen = ref(false);
const isSubmenuOpen = ref([false, false, false, false]);

// 스크롤 이벤트 처리
function handleScroll() {
  if (!header.value || window.innerWidth <= 1320) return; // 모바일에서 스크롤 이벤트 실행 안함
  isScrolled.value = window.scrollY > 0;
}

// 마우스 오버 이벤트 처리
function onMouseOver(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  if (header.value) header.value.classList.add("on");
  target.classList.add("on");
}

// 마우스 아웃 이벤트 처리
function onMouseOut(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  if (header.value) header.value.classList.remove("on");
  target.classList.remove("on");
}

// 메뉴 토글
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
function toggleSubmenu(index: number) {
  isSubmenuOpen.value[index] = !isSubmenuOpen.value[index];
}

// 스크롤 이벤트 리스너 등록
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header id="header" :class="{ scrolled: isScrolled, on: false, 'menu-open': isMenuOpen }" ref="header">
    <div class="head">
      <h1>
        <a href="/pages/"></a>
      </h1>
      <div class="pcNav">
        <ul class="list">
          <li @mouseover="onMouseOver" @mouseout="onMouseOut" class="menuup">
            <a href="/pages/group/">그룹소개</a>
            <ul class="depth">
              <li><a href="/pages/ad/">홍보센터</a></li>
              <li><a href="/pages/mou/">MOU 체결기관</a></li>
              <li><a href="/pages/ad/">사회공헌</a></li>
              <li><a href="/pages/ci/">CI</a></li>
              <li><a href="/pages/character/">캐릭터 소개</a></li>
              <li><a href="/pages/ad/">물류센터 소개</a></li>
              <li><a href="/pages/location/">오시는 길</a></li>
            </ul>
          </li>
          <li @mouseover="onMouseOver" @mouseout="onMouseOut" class="menuup">
            <a href="/pages/event">이벤트</a>
            <ul class="depth">
              <li><a href="/pages/event/">진행중 이벤트</a></li>
              <li><a href="/pages/eventend/">종료된 이벤트</a></li>
              <li><a href="/pages/eventwin/">당첨자 발표</a></li>
              <!-- <li><a href="/pages/">이벤트 FAQ</a></li> -->
            </ul>
          </li>
          <li @mouseover="onMouseOver" @mouseout="onMouseOut" class="menuup">
            <a href="/pages/campaign/">캠페인</a>
            <ul class="depth">
              <li><a href="/pages/campaign/">캠페인</a></li>
            </ul>
          </li>
          <li @mouseover="onMouseOver" @mouseout="onMouseOut" class="menuup">
            <a href="/pages/recruit/">인재채용</a>
            <ul class="depth">
              <li><a href="/pages/Recruit ">회사생활·복지</a></li>
              <li><a href="/pages/recruit/">채용안내</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="gnb">
        <div class="kidkidsbtn"><a href="//www.kidkids.net/" target="_blank">키드키즈</a></div>
        <div class="language">
          <a href="#" class="flex text-white onlanguage">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-1">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <span>KOR</span>
            <!-- <span>ENG</span> -->
          </a>
          <ul class="lang_wrap">
            <li><a href="#">KR</a></li>
            <li><a href="#">EN</a></li>
          </ul>
        </div>
        <div class="btnMenu" @click="toggleMenu" :class="{ openmenu: isMenuOpen }">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-if="isMenuOpen" class="mobileMenu">
        <ul>
          <li :class="{ open: isSubmenuOpen[0] }" @click="toggleSubmenu(0)">
            <a href="javascript:void(0)">그룹소개</a>
            <ul v-show="isSubmenuOpen[0]" class="submenu">
              <li><a href="/pages/ad/">홍보센터</a></li>
              <li><a href="/pages/mou/">MOU 체결기관</a></li>
              <li><a href="/pages/ad/">사회공헌</a></li>
              <li><a href="/pages/ci/">CI</a></li>
              <li><a href="/pages/character/">캐릭터 소개</a></li>
              <li><a href="/pages/ad/">물류센터 소개</a></li>
              <li><a href="/pages/location/">오시는 길</a></li>
            </ul>
          </li>
          <li :class="{ open: isSubmenuOpen[1] }" @click="toggleSubmenu(1)">
            <a href="javascript:void(0)">이벤트</a>
            <ul v-show="isSubmenuOpen[1]" class="submenu">
              <li><a href="/pages/event/">진행중 이벤트</a></li>
              <li><a href="/pages/eventend/">종료된 이벤트</a></li>
              <li><a href="/pages/eventwin/">당첨자 발표</a></li>
            </ul>
          </li>
          <li>
            <a href="/pages/campaign/">캠페인</a>
          </li>
          <li :class="{ open: isSubmenuOpen[3] }" @click="toggleSubmenu(3)">
            <a href="javascript:void(0)">인재채용</a>
            <ul v-show="isSubmenuOpen[3]" class="submenu">
              <li><a href="/pages/company ">회사생활·복지</a></li>
              <li><a href="/pages/recruit/">채용안내</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1200;
  transition: all 0.4s;
  /* 스크롤 스타일 */
  &.scrolled {
    background: #fff;
    color: #000;
    box-shadow: 0 2px 10px rgba(194, 194, 194, 0.1);
  }
}

#header.nav-up {
  top: -90px;
}

.head {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  margin: 0 auto;
  padding: 0 3%;
  text-align: center;
  transition: all 0.4s;

  h1 {
    position: absolute;
    left: 3%;
    z-index: 900;
    display: flex;
    align-items: center;
    height: 100%;

    a {
      display: block;
      width: 50px;
      height: 50px;
      @include bg("@/assets/scss/images/ek_w_logo.svg");
      text-indent: -9999px;
      transition: all 0.4s;
    }
  }

  .gnb {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    right: 3%;
    top: 28px;
    .kidkidsbtn {
      a {
        @apply text-base py-2 w-32 text-center text-white inline-block;
        border-radius: $radius-2xl;
        background: #00000052;
        margin-right: 10px;
      }
    }
    .language {
      position: relative;

      .lang_wrap {
        // display: none;
        opacity: 0;
        visibility: hidden;
        transition:
          opacity 0.3s ease-in-out,
          visibility 0.3s ease-in-out;
        position: absolute;
        left: 56%;
        top: 100%;
        transform: translateX(-50%);
        background: #fff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        z-index: 10;
        width: 60px;
        padding: 10px;

        li {
          list-style: none;
          text-align: center;
          a {
            display: block;
            color: #000;
            text-decoration: none;
            padding: 4px;

            &:hover {
              text-decoration: underline;
              color: $primary;
              text-underline-offset: 4px;
              text-decoration-thickness: 2px;
              transition:
                color 0.3s,
                text-decoration-color 0.3s;
            }
          }
        }
      }

      // .onlanguage에 마우스 오버하면 .lang_wrap 표시
      &:hover {
        .lang_wrap {
          // display: block;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}

.head .pcNav {
  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 420px;
    background: #faf9f9;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transform: scaleY(0);
    transition: all 0.5s;
    transform-origin: top;
  }
  > ul {
    display: flex;
    justify-content: center;

    > li {
      position: relative;
      z-index: 10;
      margin: 0 4vw;
      &:after {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background: $primary;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleX(0);
        transition: all 0.4s;
      }
      &.on:after {
        transform: scaleX(1);
      }

      > a {
        font-size: 18px;
        color: #fff;
        font-weight: 500;
        line-height: 90px;
        transition: all 0.4s;
        font-size: $font-lg;
      }
      > ul {
        display: none;
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        width: 200px;
        padding: 35px 0 0;
        transition: all 0.4s;
        > li {
          margin-bottom: 10px;
          > a {
            font-size: 18px;
            font-weight: 500;
            &:hover {
              color: $primary;
            }
          }
        }
      }
    }
  }
}

.head .mobileMenu {
  display: none;
}

.on,
.scrolled {
  .head {
    background: #fff;
    // border: 1px $dark-60 solid;
    h1 {
      a {
        width: 50px;
        height: 50px;
        @include bg("@/assets/scss/images/ek_logo.svg");
      }
    }
    .language span {
      color: #000;
    }
    svg {
      color: #000;
    }
    .pcNav > ul > li > a {
      color: #000;
    }
  }
}

.on .head .gnb .btnMenu > div {
  background: #000;
}
.on .head .pcNav > ul > li > a {
  color: #000;
}
.on .head .pcNav:after {
  transform: scaleY(1);
  transition: all 0.3s;
}
.on .head .pcNav > ul > li > ul {
  display: block;
}

@media (max-width: 1320px) {
  #header {
    position: relative;
  }
  .on,
  .scrolled {
    .head {
    }
  }
  .head {
    height: 70px;
    position: absolute;
  }
  .head .pcNav,
  .head .kidkidsbtn {
    display: none;
  }
  .menu-open .head {
    background: #fff;
    height: 70px;
  }

  /* 모바일 메뉴 */
  .head .gnb .btnMenu {
    position: relative;
    z-index: 3000;
    width: 30px;
    height: 22px;
    margin-left: 20px;
    cursor: pointer;
    > div {
      width: 100%;
      height: 2px;
      margin-bottom: 8px;
      background: #fff;
      transition: all 0.4s;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .head .mobileMenu {
    display: block;
    background-color: #fff;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.329411);
    ul {
      display: flex;
      flex-direction: column;
      li {
        text-align: center;
        a {
          color: #000;
          text-decoration: none;
          font-size: $font-2xl;
          width: 100%;
          display: flex;
          padding: 18px 5%;
          border-top: 1px solid $dark-60;
          justify-content: space-between;
          align-items: center;
        }
        .submenu {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            border-top: 0;
            a {
              color: #000;
              font-size: $font-lg;
              border-top: 0;
              background: #fff;
              padding-left: 60px;
            }
          }
        }
      }
    }
  }
  .head .mobileMenu li {
    > a:after {
      content: "";
      float: right;
      transition: transform 0.3s ease;
      width: 30px;
      height: 30px;
      display: inline-block;
      @include bg("@/assets/scss/images/ek-regular-down.svg");
    }
    &.open {
      background: $default-50;

      a {
        color: $primary;
      }
      > a:after {
        content: "";
        transform: rotate(180deg);
        @include bg("@/assets/scss/images/ek-regular-down.svg");
      }
      .submenu {
        display: block;
        li > a:after {
          display: none;
        }
      }
    }
  }

  #header {
    transition: none;
    &.menu-open {
      background: #fff; /* 배경을 흰색으로 설정 */
    }
    &.menu-open h1 a {
      @include bg("@/assets/scss/images/ek_logo.svg");
    }
  }

  .head .gnb .btnMenu.openmenu {
    > div {
      background: #000;
      transition: all 0.1s 0.1s;
      &:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
      }
      &:nth-child(2) {
        transform: scale(0);
      }
      &:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
      }
    }
  }
}

/* 기본 모바일 스타일 */
@media (max-width: 812px) {
  .head .gnb {
    top: 21px;
  }
}
</style>
