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
    <Subnavi>
      <template #depth1>
        <a href="/pages/group/">그룹소개</a>
      </template>
      <template #depth2>
        <a href="/pages/Recruit/">인재채용</a>
      </template>
      <template #depth3>
        <a href="/pages/recruitintro/">직무소개 · 입사지원</a>
      </template>
    </Subnavi>
    <div class="container">
        <div class="flex justify-between flex-col lg:flex-row  text-black">
            <h1 class="page-title">EK 그룹 인재상</h1>
            <h3 class="page-group-sub">
                EK그룹의 4대 핵심가치 ‘창의’, ‘글로벌’, ‘소통’, ‘진취적’에 부합하는<span class="pc_spacing"></span>
                고객을 향한 몰입과 약속을 실천한 인재를 초대합니다.
            </h3>
        </div>
    </div>
    <img src="@/assets/scss/images/recruit_topimg.png" class="mt-10 xl:mt-20 2xl:mt-32 w-full">
    <div class="container">
        <div class="explain">
            <ul>
                <li>
                    <div class="icon_area">
                         <img src="@/assets/scss/icons/recuit_intro_icon_01.svg">
                    </div>
                    <div class="text_area">
                        <h4>Creative</h4>
                        <h2 class="page-group-title">창의적인 인재</h2>
                        <h5>새로운 사고를 가지고 <span class="mbspacing"></span>이를 실현해 내는 인재</h5>
                    </div>
                </li>
                <li>
                    <div class="icon_area">
                         <img src="@/assets/scss/icons/recuit_intro_icon_02.svg">
                    </div>
                    <div class="text_area">
                        <h4>Global</h4>
                        <h2 class="page-group-title">글로벌한 인재</h2>
                        <h5>기업의 발전을 위해 글로벌 <span class="mbspacing"></span>마인드를 가지고 있는 인재</h5>
                    </div>
                </li>
                <li>
                    <div class="icon_area">
                         <img src="@/assets/scss/icons/recuit_intro_icon_03.svg">
                    </div>
                    <div class="text_area">
                        <h4>Communicating</h4>
                        <h2 class="page-group-title">소통하는 인재</h2>
                        <h5>존중하고 협력하여 원활한 <span class="mbspacing"></span>의사소통을 할 수 있는 인재</h5>
                    </div>
                </li>
                <li>
                    <div class="icon_area">
                         <img src="@/assets/scss/icons/recuit_intro_icon_04.svg">
                    </div>
                    <div class="text_area">
                        <h4>Enterprising</h4>
                        <h2 class="page-group-title">진취적인 인재</h2>
                        <h5>현재의 안주하지 않고 높은 <span class="mbspacing"></span>목표를 가지고 성장하는 인재</h5>
                    </div>
                </li>
            </ul>
        </div>
        <div class="process mdcom">
            <h1 class="page-title text-black text-center md:text-left">EK 그룹 채용 프로세스</h1>
            <ul>
                <li>
                    <div class="circle">
                        <h2 class="page-group-title">입사지원</h2>
                    </div>
                    <h5>채용 페이지를 통한<br>지원서 접수</h5>
                </li>
                <li>
                    <div class="line"></div>
                </li>
                <li>
                    <div class="circle">
                        <h2 class="page-group-title">면접</h2>
                    </div>
                    <h5>서류 지원 후<br>1차 합격자 면접 실시</h5>
                </li>
                <li class="linearrow">
                    <img src="@/assets/scss/icons/arrow_process.svg">
                </li>
                <li>
                    <div class="circle">
                        <h2 class="page-group-title">최종합격</h2>
                    </div>
                    <h5>면접 전형 후<br>합격자 개별 연락</h5>
                </li>
            </ul>
        </div>
    </div>
    <div class="jobtitle mdcom">
        <div class="container">
            <h1 class="page-title text-white text-center md:text-left">EK 그룹 직무 소개</h1>
        </div>
    </div>
    <div class="container job">
        <ul>
            <li>
                <div class="title">
                    <span class="page-group-title text-black">IT/디자인</span>
                    <span>채용중</span>
                </div>
                <p>PHP 개발 및 유지보수</p>
                <p>인프라 담당 및 서버보안</p>
                <p>안드로이드 / iOS앱개발</p>
            </li>
            <li>
                <div class="title">
                    <span class="page-group-title text-black">기획/운영/기자</span>
                    <span>채용중</span>
                </div>
                <p>Web/Mobile 기획 및 운영</p>
                <p>UI,UX설계/콘텐츠기획/스토리보드작성</p>
                <p>월간유아 취재 및 기사 작성</p>
                <p>온라인 뉴스 제작 및 배포</p>
                <p>SNS운영 관리</p>   
            </li>
            <li>
                <div class="title">
                    <span class="page-group-title text-black">마케팅</span>
                    <span class="finish">채용완료</span>
                </div>
                <p>온/오프라인 마케팅 기획 및 운영</p>
                <p>시장 및 트렌드 조사</p>
                <p>홍보 영상 촬영 및 편집</p>    
            </li>
            <li>
                <div class="title">
                    <span class="page-group-title text-black">연구소</span>
                    <span class="">채용중</span>
                </div>
                <p>유아/유치 교육계획안 집필</p>
                <p>유아/유치 프로그램 및 콘텐츠 개발</p>
                <p>온라인 직무 교육 / 평생교육원 운영</p>
                <p>사업주 훈련 업무, 원격훈련기관 평가</p>
                <p>실버 프로그램 및 콘텐츠 개발</p>
            </li>
            <li>
                <div class="title">
                    <span class="page-group-title text-black">영업 컨설팅</span>
                    <span class="">채용중</span>
                </div>
                <p>온/오프라인 광고</p>
                <p>시설 및 기관, 연수&교육영업</p>
                <p>행사지원 및 제안서 작성</p>
                <p>직장 및 프랜차이즈 어린이집 운영 관리</p>
                <p>신규 개원 및 위탁운영 상담</p>
            </li>
            <li>
                <div class="title">
                    <span class="page-group-title text-black">쇼핑몰 MD</span>
                    <span class="">채용중</span>
                </div>
                <p>상품소싱 / 카테고리 / 거래처 관리</p>
                <p>프로모션 및 마케팅</p>
                <p>교구 / 교재 제작 및 수입</p>
            </li>
        </ul>
    </div>
    </WebsiteLayout>
</template>
<style lang="scss" scoped>
.mdcom{
    margin-top:rem(120);
    @include bp(tablet){
        margin-top:rem(300);
    }
}
.mbspacing{
    display: block;
    @include bp(desktop-lg){
        display:inline-block;
    }
}
.pc_spacing{
    display:inline-block;
    @include bp(tablet){
        display:block;
    }
}
h4, h5{
    @apply text-lg 2xl:text-xl;
}
.explain{
    margin-top:rem(70);
    @include bp(desktop){
        margin-top:rem(110);
    }
    ul{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        row-gap:rem(50);
        @include bp(tablet){
            grid-template-columns: repeat(2, 1fr);
            column-gap:rem(80);
        }
        @include bp(desktop-lg){
            column-gap:0;
            row-gap:rem(160);
        }
        li{
            display: flex;
            align-items: flex-start;
            
            @include bp(desktop-lg){
                align-items: center;
            }
            .icon_area{
                margin-right:rem(30);
                @include bp(desktop-lg){
                    margin-right:rem(55);
                }
            }
            .text_area{
                color:#000;
                h4{
                    @apply font-bold text-primary;
                }
                h5{
                    @apply mt-3 2xl:mt-8; 
                }
            }
        }
    }
}
.process{
    ul{
        margin-top:rem(40);
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        @include bp(tablet){
            flex-wrap:nowrap;
        }
        @include bp(desktop){
            margin-top:rem(110);
        }
        li{
            margin-bottom: rem(50);
            @include bp(tablet){
                margin-bottom: 0;
            }
            .circle{
                position: relative;
                width: 200px;
                height:200px;
                border: 1px solid transparent;
                border-radius: 50%;
                background-image: linear-gradient(#fff, #fff), 
                linear-gradient(to top, #73C108 30%, #007CC4 60%);
                background-origin: border-box;
                background-clip: content-box, border-box;
                text-align: center;

                @include bp(desktop-lg){
                    width: 300px;
                    height:300px;
                }

                h2{
                    vertical-align: middle;
                    display: table-cell;
                    width:  200px;
                    height: 200px;
                    text-align: center;
                    @include bp(desktop-lg){
                        width: 300px;
                        height:300px;
                    }
                }
            }
            h5{
                text-align: center;
                line-height: 1.35;
                font-weight: 500;
                margin-top:rem(15);
                @include bp(tablet){
                    margin-top:rem(30);
                }
            }

        }
        .line{
            width:30px;
            height: 1px;
            background:linear-gradient(to right, #73C108 30%, #007CC4 60%);
            margin-bottom:rem(70);
            display: none;
            @include bp(tablet){
                display: block;
            }
        }
        .linearrow{
            margin-bottom:rem(70);
            display: none;
            @include bp(tablet){
                display: block;
            }
        }
        li:last-child{
            margin-left:rem(14);
        }
    }
}
.jobtitle{
    @include bg("@/assets/scss/images/recuit_intro_bg.png");
    height:360px;
    padding-top:rem(80);
    @include bp(tablet){
        height: 450px;
        padding-top:rem(120);
    }
    @include bp(desktop){
        height: 550px;
        padding-top:rem(145);
    }
}
.job{
    margin-top:rem(-250);
    ul{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap:rem(28);
        @include bp(tablet){
            grid-template-columns: repeat(2, 1fr);
        }
        @include bp(desktop-lg){
            grid-template-columns: repeat(3, 1fr);
        }
        li{
            background:#fff;
            box-shadow:0 3px 20px #0000001f;
            padding:rem(40);
            .title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom:rem(65);
                span:last-child{
                    color:$primary;
                    border:1px solid $primary;
                    padding:rem(4) rem(20);
                    border-radius:50px;
                }
                span.finish{
                    color:$dark-300;
                    border:1px solid $dark-100;
                }
            }
            p{
                @apply text-lg;
                text-indent: -23px;
                padding-left: 9px;
                line-height: 1.2;
                margin-bottom: 6px;
                @include bp(desktop){
                    text-indent: -10px;
                    padding-left: 0px;
                }

            }
            p::before{
                content:'-';
                margin-right:rem(6);
                margin-left:rem(12);
            }
        }
    }
}



</style>