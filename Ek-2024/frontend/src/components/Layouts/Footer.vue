<template>
  <div class="footer">
    <div class="container">
      <img src="@/assets/scss/images/footer_logo.svg" class="mb-4 ">
      <ul>
        <li>
          <span>주소</span>
          <span>경기도 용인시 기흥구 기흥로 58 기흥ICT밸리 B동 29층 이케이주식회사 </span>
        </li>
        <li>
          <span>대표이사</span>
          <span>이희주</span>
        </li>
        <li>
          <span>사업자등록번호</span>
          <span>214-86-51854</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>통신판매업 신고</span>
          <span>제 2021-용인기흥-2008호</span>
        </li>
        <li>
          <span>TEL</span>
          <span>02-5880-115</span>
        </li>
        <li>
          <span>E-MAIL</span>
          <span>KIDKIDS@KIDKIDS.NET</span>
        </li>
      </ul>
      <div class="copyright">
        <span>Copyright © EK all right reserved.</span>
      </div>
    </div>
  </div>

</template>
<style lang="scss" scoped>
.footer {
  @apply bg-[#252726] pt-10 pb-10 mt-36;
  ul{
    @apply flex flex-wrap mb-3;
    li{
      @apply mr-4 text-white text-base mb-2;

      @include bp(tablet-lg) {
        @apply mb-0;
      }
    }
    span:last-child{
      @apply text-[#bbb] ml-1.5;
    }
    li::after{
      content:"";
      width:1px;
      height:12px;
      background:#bbb;
      position: relative;
      top:1px;
      margin-left:12px;
      

      @include bp(mobile) {
        display: none;
      }
      @include bp(mobile-lg) {
        display: inline-block;
      }
    }
    li:last-child:after{
      display: none;
    }
  }
  .copyright{
    @apply border-t border-[#515251] pb-5 w-full;
    span{
      @apply text-[#bbb] flex justify-end pt-5;
    }
  }
}


</style>