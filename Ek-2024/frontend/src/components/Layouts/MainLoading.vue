<!-- Loading Intro -->
<script lang="ts" setup>
import { onMounted } from "vue";

onMounted((): void => {
  setTimeout((): void => {
    const spans: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".intro h1 span:not(.prefix"
    );
    spans.forEach((span: HTMLElement): void => {
      span.classList.add("out");
    });

    const intro = document.querySelector(".intro") as HTMLElement;
    intro.classList.add("hide");
  }, 1100);
});
</script>

<template>
  <div class="intro">
    <h1>
      <div class="intro-item">
        <span class="prefix">E</span>
        <span class="">D</span>
        <span class="">U</span>
        <span class="">C</span>
        <span class="">A</span>
        <span class="">T</span>
        <span class="">I</span>
        <span class="">O</span>
        <span class="">N</span>
        <span class=""></span>
      </div>
      <div class="intro-item">
        <span class="prefix prefix-k">K</span>
        <span class="">I</span>
        <span class="">D</span>
        <span class="">K</span>
        <span class="">I</span>
        <span class="">D</span>
        <span class="">S</span>
      </div>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
/* Main intro */
.intro {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #1774d0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1201;

  &.hide {
    transition: all ease-out 0.6s;
    top: -100%;
    overflow: hidden;
    transition-delay: 2s;
  }

  h1 {
    opacity: 0;
    font-size: 100px;
    color: #fff;
    font-weight: 800;
    line-height: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(20px);
    animation: fade-in 0.6s forwards;
  }
}

.intro-item {
  scale: 0.5;

  @include bp(tablet) {
    scale: 1;
  }

  span {
    &.out {
      width: 0;
    }
  }

  &:first-of-type {
    animation: move-e 1.3s forwards;
    animation-delay: 2s;

    span {
      transition: all ease-out 0.6s;
      text-align: center;

      &:nth-child(2) {
        animation: fade-out 1s forwards;
        animation-delay: 1.2s;
      }

      &:nth-child(3) {
        animation: fade-out 1s forwards;
        animation-delay: 0.8s;
      }

      &:nth-child(4) {
        animation: fade-out 1s forwards;
        animation-delay: 0.6s;
      }

      &:nth-child(5) {
        animation: fade-out 1s forwards;
        animation-delay: 0.8s;
      }

      &:nth-child(6) {
        animation: fade-out 1s forwards;
        animation-delay: 0.6s;
      }

      &:nth-child(7) {
        animation: fade-out 1s forwards;
        animation-delay: 0.6s;
      }

      &:nth-child(8) {
        animation: fade-out 1s forwards;
        animation-delay: 0.6s;
      }

      &:nth-child(9) {
        animation: fade-out 1s forwards;
        animation-delay: 0.6s;
      }

      &:nth-child(10) {
        width: 30px;
      }
    }
  }

  &:last-of-type {
    animation: move-k 1.3s forwards;
    animation-delay: 2s;

    span {
      &:nth-child(2) {
        animation: fade-out 1s forwards;
        animation-delay: 1.2s;
      }

      &:nth-child(3) {
        animation: fade-out 1s forwards;
        animation-delay: 1.4s;
      }

      &:nth-child(4) {
        animation: fade-out 1s forwards;
        animation-delay: 1.2s;
      }

      &:nth-child(5) {
        animation: fade-out 1s forwards;
        animation-delay: 1.2s;
      }

      &:nth-child(6) {
        animation: fade-out 1s forwards;
        animation-delay: 1.4s;
      }

      &:nth-child(7) {
        animation: fade-out 1s forwards;
        animation-delay: 1.4s;
      }
    }
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Keyframes */
@keyframes move-e {
  0% {
    margin-left: 0;
    margin-bottom: 0;
  }

  40% {
    margin-left: 0;
    margin-bottom: -50px;
  }

  100% {
    margin-left: calc(100% - 60px);
    margin-bottom: -50px;
  }
}

/* Keyframes */
@keyframes move-k {
  0% {
    margin-top: 0;
  }

  40% {
    margin-top: -50px;
    margin-left: 0;
  }

  100% {
    margin-top: -50px;
    margin-left: calc(100% - 6.5rem);
  }
}
</style>
