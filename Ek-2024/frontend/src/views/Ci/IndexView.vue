<script lang="ts" setup>
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import SubTitle from "@/components/Layouts/SubTitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";
</script>
<template>
    <WebsiteLayout>    
    <Navbar />
    <SubTitle>그룹소개</SubTitle>
    <Subnavi>CI </Subnavi>
    <div class="container ci">
        <h1 class="page-title text-black">
            EK는 교육과 미래를 상징하는 <span class="m_spacing"></span>두 원을 겹쳐 서로 시너지를 
            <span class="m_spacing"></span>발휘하여<span class="pc_spacing"></span>
            신뢰할 수 있는 교육 콘텐츠 제공과 밝은 미래를 <span class="m_spacing"></span>형상화하였습니다.
        </h1>
        <h2 class="page-group-sub text-black mt-4">
            EK는 유아 교육의 대표 기업으로 교육과 미래를 생각하며, <span class="w_spacing"></span>
            누구에게나 평등한 교육 기회를 제공하고자 하는 EK의 기업 정신을 담고 있습니다.
        </h2>
        <img class="mx-auto mt-28 mb-36 " src="@/assets/scss/images/ci_main.png" alt="EK메인이미지">
        <h3 class="page-sub text-black">EK의 전용색상은 브랜드의 근간이 되는 핵심요소로 규정된 색상 지침을 철저히 지킬 수 있도록 한다.</h3>
        <h3 class="page-sub text-black">주색은 ‘신뢰’를 상징하는 블루 계열의 EK Blue이며, 보조색은 ‘성장’을 상징하는 그린 계열의 EK Green이다.</h3>
        <h3 class="page-sub text-black">신문, 잡지 등 인쇄매체의 경우 4원색 스크린 프로세스 규정에 따라 사용해야 한다.</h3>
        <ul class="mt-6 ">
           <li>
            <div class="imgarea"><img src="@/assets/scss/images/ci_01.svg"></div>
            <div class="color_wrap page-sub">
                <span class="">
                    <h5 class="bg-primary">
                        <h4>EK Blue</h4>
                    </h5>
                    <p>C97 M42 Y0 K0</p>
                </span>
                <span class="">
                    <h5 class="bg-secondary">
                        <h4>EK Green</h4>

                    </h5>
                    <p>C50 M0 Y100 K0</p>
                </span>
            </div>
           </li> 
           <li>
            <div class="imgarea"><img src="@/assets/scss/images/ci_02.svg"></div>
            <div class="color_wrap page-sub">
                <span class="">
                    <h5 class="bg-[#939598]">
                        <h4>EK Blue</h4>

                    </h5>
                    <p>C0 M0 Y0 K50</p>
                </span>
                <span class="">
                    <h5 class="bg-[#BCBDC0]">
                        <h4>EK Green</h4>

                    </h5>
                    <p>C0 M0 Y0 K30</p>
                </span>
            </div>
           </li> 
           <li>
            <div class="imgarea"><img src="@/assets/scss/images/ci_03.svg"></div>
            <div class="color_wrap page-sub">
                <span class="">
                    <h5 class="bg-black">
                        <h4></h4>
                    </h5>
                    <p>C0 M0 Y0 K100</p>
                </span>
            </div>
           </li> 
        </ul>
    </div>
</WebsiteLayout>
</template>
<style lang="scss" scoped>
.pc_spacing{
    display:inline-block;
    @include bp(desktop){
        display:block;
    }
}
.m_spacing{
    display:block;
    @include bp(tablet){
        display:inline-block;
    }
}
.ci{
    h1{
        @apply tracking-tighter  leading-snug xl:leading-tight	; 
    }
    ul{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        @include bp(tablet){
            display:grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap:rem(18);
        }
        li{
            width:100%;
            margin-bottom:30px;
            @include bp(tablet){
                margin-bottom: 0;
            }
            .imgarea{
                border:1px solid $dark-60;
                width:100%;
                padding:rem(110) 0;
                img{
                    margin:0 auto;
                }
            }
            .color_wrap{
                display:grid;
                grid-template-columns: repeat(2, 1fr);
                column-gap:rem(12);
                span{
                    display:block;
                    width:100%;
                    h5{
                        width:100%;
                        margin:rem(16) 0 rem(10);
                        h4{
                            padding-left:rem(18);
                            width:100%;
                            height:68px;
                            vertical-align: middle;
                            display: table-cell;
                            color:#fff;
                            font-weight:500;
                        }
                    }
                    p{
                        @apply font-semibold text-base lg:text-lg;
                    }
                }
            }
        }
    }
}

</style>