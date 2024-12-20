<script lang="ts" setup>
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import SubTitle from "@/components/Layouts/SubTitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";
</script>
<template>
    <WebsiteLayout>    
    <Navbar />
    <SubTitle>EVENT</SubTitle>
    <Subnavi>이벤트 </Subnavi>
    <div class="container">
        <h1 class="page-title text-black">EK물류센터</h1>
        <h2 class="page-group-sub ">물류센터 사진으로 둘러보기</h2>
        <div class="mul">
            <img src="@/assets/scss/images/center_top_img.png" class="w-full h-full object-cover" alt="박스"/>
        </div>
        <div class="pdcommon advantage">
            <h1 class="page-title">EK물류센터만의 장점</h1>
            <div class="advan_wrap">
                <div class="system">
                    <h3>EK물류센터<br>시스템</h3>
                    <h5 class="page-sub">
                        도서, 완구, 생활용품, 교육부자재 등<br>
                        다양한 형태의 유통 및 개발 상품을<br>
                        최고의 퀄리티로 관리합니다.<br>
                        빠르고 정확한 고객 배송을 위해<br>
                        이케이만의 물류 시스템을 가동합니다
                    </h5>
                </div>
                <ul>
                    <li>
                        <div class="num">1</div>
                        <img src="@/assets/scss/icons/icon_center_01.svg">
                        <h5 class="page-sub">올인원 시스템</h5>
                        <p>올인원 시스템에 대한 설명입니다다다<span class="pcblock"></span> 올인원 시스템에 대한 설명입니다다다</p>
                    </li>
                    <li>
                        <div class="num">1</div>
                        <img src="@/assets/scss/icons/icon_center_01.svg">
                        <h5 class="page-sub">올인원 시스템</h5>
                        <p>올인원 시스템에 대한 설명입니다다다<span class="pcblock"></span> 올인원 시스템에 대한 설명입니다다다</p>
                    </li>
                    <li>
                        <div class="num">1</div>
                        <img src="@/assets/scss/icons/icon_center_01.svg">
                        <h5 class="page-sub">올인원 시스템</h5>
                        <p>올인원 시스템에 대한 설명입니다다다<span class="pcblock"></span> 올인원 시스템에 대한 설명입니다다다</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="pdcommon loca">
            <h1 class="page-title text-black">EK물류센터 위치</h1>
            <div class="map_area">
                <img
                src="https://profile.silveredu.net/_nuxt/img/s_pin.96fa80c.png"
                class="absolute z-10 right-[24%] bottom-[52%] md:right-[35%] md:bottom-[50%] lg:right-[44%] lg:bottom-[48%]"
                />

                <img src="@/assets/scss/images/center_map.png" class="w-full h-full object-cover" alt="물류센터지도"/>
            </div>
            <div class="bg-primary text-white py-10 md:py-16 px-7 md:px-12 w-11/12 lg:w-3/4 mx-auto -mt-20 relative">
                <h1 class="text-3xl font-bold">EK로지스틱센터</h1>
                <p class="text-xl flex items-center justify-cente">
                    (31027) 충남 천안시 서북구 입장면 연곡길 172-20
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
                <p class="text-base mt-4 flex items-center	">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span class="ml-2">041-415-0552</span>
                </p>
            </div>
        </div>
        

    </div>
</WebsiteLayout>
</template>
<style lang="scss" scoped>
.pcblock{
    display: inline-block;
    @include bp(desktop){
        display: block;
    }
}
h2{
    color:$dark-300;
    margin-top:5px;
}
.slarea{
    @apply h-[540px] bg-slate-400 text-center mt-9;
}
.advantage{
    h1{
        margin-bottom:rem(18);
        @include bp(desktop-lg){
            margin-bottom:rem(40);
        }
    }    
    .advan_wrap{
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        justify-content: center;
        @include bp(desktop-lg){
            flex-wrap: nowrap;
            justify-content: normal;
        }
        .system{
            width:100%;
            height:48vh;
            background:linear-gradient(to top, #73C108 -7%, #007CC4 40%);
            color:#fff;
            padding:rem(50) 0 0 rem(40);
            margin-bottom:rem(40);
            @include bp(tablet){
                width:470px;
                height:470px;
                padding:rem(80) 0 0 rem(60);
            }
            @include bp(desktop){
                margin-bottom:0;
            }

            h3{
                @apply text-4xl md:text-5xl leading-[1.2] font-semibold mb-5 md:mb-10 ;
            }
        }
        ul{
            display:flex;
            flex-wrap: wrap;
            flex-direction: column;
            column-gap:rem(20);
            margin-left:0px;
            align-items: center;

            @include bp(desktop){
                margin-left:rem(60);
            }
            @include bp(desktop-lg){
                margin-left:rem(-70);
                display:grid;
                grid-template-columns: repeat(3, 1fr);
                column-gap:rem(20);
            }
            li{
                background:#fff;
                box-shadow:2px 2px 12px #00000014;
                text-align: center;
                position: relative;
                color:#000;
                width:100%;
                height:320px;
                padding-top:70px;
                margin-bottom:rem(24);

                @include bp(tablet){
                    width:320px;
                    height:320px;
                }
                @include bp(desktop-lg){
                    margin-bottom:0;
                }
                
                .num{
                    @apply text-2xl;
                    position: absolute;
                    top:5%;
                    left:5%;
                    color:$primary;
                    font-weight:700;
                }
                img{
                    margin:0 auto;
                }
                h5{
                    font-weight:700;
                    margin:20px 0 10px;
                }
                p{
                    @apply text-base font-normal px-6 xl:px-0; 
                }
            }
        }
    }    
    
}
.mul{
    width: 100%;
    height:200px; 
    margin-top:rem(20);
    @include bp(desktop) {
        height:540px;
    }
}
.map_area {
  margin-top: rem(18);
  width: 100%;
  height: 300px;

  @include bp(tablet) {
    height:550px;
  }
  @include bp(desktop-lg) {
    margin-top: rem(40);
    height: 700px;
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
.circle {
  aspect-ratio: 1 / 1;
  max-width: 40px;
  background-color: #000;
  border-radius: 50%;
  width: 20%;
  @apply flex bg-black rounded-full items-center justify-center ml-2 opacity-70;
}

</style>