<template>
  <div class="subnav">
    <ul>
      <li class="home">
        <a href="/pages/">
          <img src="@/assets/scss/icons/icon_home.svg" />
        </a>
      </li>
      <li class="depth">
        <a href="/pages/">
          <span><slot name="depth1" /></span>
        </a>
      </li>
      <li class="depth">
        <a href="javascript:;">
          <span><slot name="depth2" /></span>
        </a>
      </li>
      <li class="depth">
        <a href="javascript:;">
          <span><slot name="depth3" /></span>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.subnav {
  background: $primary;
  width: 90%;
  text-align: center;
  margin: 0 auto;
  margin-top: rem(-36);
  margin-bottom: rem(50);
  @include bp(desktop-lg) {
    width: 1200px;
    margin-bottom: rem(100);
  }
  ul {
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 rem(20);
    box-shadow: 0 2px 5px #00000054;
    li {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 rem(24);
      position: relative;
      a {
        color: #fff;
        span {
          font-size: $font-lg;
        }
      }
    }
    .depth {
      flex: 0 0 120px;
      @include bp(desktop-lg) {
        flex: 0 0 230px;
      }
    }
  }
}
.subnav ul li::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 20px;
  margin-top: -10px;
  background-color: #ffffff63;
}
</style>
