<script lang="ts" setup>
import Anchor from "@/components/Common/Anchor.vue";
import NewSmallRectangleIcon from "@/components/Icons/Navbar/Top/NewSmallRectangleIcon.vue";

defineProps({
  // 키드키즈 회원 로그인 여부
  memberLoggedIn: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="ek bg-bggray border-b">
    <div class="container navheader">
      <div class="relative my" v-if="memberLoggedIn">
        <Anchor href="//www.kidkids.net/my/mypage_mship.htm">
          MY 키드키즈
          <span class="text-[9px] relative -top-0.5 ml-2">▼</span>
        </Anchor>

        <ul class="mykidkidslist">
          <li>
            <Anchor href="//www.kidkids.net/my/mypage_personal.htm"> 기본정보 </Anchor>
          </li>
          <li>
            <Anchor href="//www.kidkids.net/my/mypage_mship.htm">유료회원</Anchor>
          </li>
          <li>
            <Anchor href="//www.kidkids.net/my/mypage_point.htm">포인트/캐시</Anchor>
          </li>
          <li>
            <Anchor href="//www.kidkids.net/my/mypage_doc.htm">MY 자료</Anchor>
          </li>
          <li>
            <Anchor href="//www.kidkids.net/my/childwatch/">아동관찰</Anchor>
          </li>
        </ul>
      </div>

      <div v-if="!memberLoggedIn">
        <Anchor href="//www.kidkids.net/join/login.htm">로그인</Anchor>
      </div>

      <div v-if="!memberLoggedIn">
        <Anchor href="//www.kidkids.net/join/join_simple.htm">회원가입</Anchor>
      </div>

      <div v-if="!memberLoggedIn">
        <Anchor href="#">이용안내</Anchor>
      </div>

      <div>
        <Anchor href="//www.kidkids.net/my/sett_info.htm">유료회원</Anchor>
      </div>

      <div>
        <Anchor href="//www.kidkids.net/cs/">고객센터</Anchor>
      </div>

      <div>
        <Anchor href="//mall.kidkids.net/welfare" target="_blank">
          <div class="flex items-center space-x-1">
            <div>e 아울렛</div>
            <div><NewSmallRectangleIcon /></div>
          </div>
        </Anchor>
      </div>

      <div>
        <Anchor href="//www.kidkids.net/eduinfo_new/eduplan_mon.htm">교육계획안</Anchor>
      </div>

      <div v-if="memberLoggedIn">
        <Anchor href="//www.kidkids.net/regist/member_logout.htm">로그아웃</Anchor>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navheader {
  @apply text-gray-500 flex justify-end divide-x items-center;

  a {
    @apply text-xs px-5 py-2 inline-block hover:text-maingreen;
  }

  .mykidkidslist {
    @apply w-[130px] border absolute -right-[1px] bg-white z-50 text-center py-1.5 hidden;

    a {
      @apply py-1;
    }
  }

  .my:hover .mykidkidslist {
    @apply block;
  }
}
</style>
