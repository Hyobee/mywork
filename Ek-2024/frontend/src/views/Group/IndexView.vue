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
    <Subnavi>
        <template #depth1>
            <a href="/pages/group/">그룹소개</a>
        </template>
    </Subnavi>
    <div class="container">
        <div class="top_title">
            <h1 class="page-title">교육을 생각하다 미래를 키우다</h1>
            <h3 class="page-group-sub">하늘 아래 모든 아이들이 즐거운 배움을 통해 꿈을 키워나갈 수 있도록 이케이가 함께 하겠습니다</h3>
        </div>
        <div class="titles pdcommon titles1">
            <div class="name">
                <h2 class="page-sub-title-bold">키드키즈</h2>
                <a href="//www.kidkids.net" target="_blank" class="page-sub" >
                    <span>www.kidkids.net</span>
                    <span><img src="@/assets/scss/icons/group-arrow.svg"></span>
                </a>
            </div>
            <div class="info">
                <h5 class="page-sub">아이들은 모두 공평한 교육의 기회를 가지고, 양질의 교육을 받아야 합니다.</h5>
                <h5 class="page-sub">키드키즈는 온라인을 기반으로 유아교육기관을 위한 유아교육 콘텐츠를 서비스하고 있습니다.</h5>
                <h5 class="page-sub">영유아를 위한 교육활동, 교사교육과 원운영을 위한 구인구직, 회계프로그램, 키드키즈 알림장을 서비스합니다.</h5>
            </div>
        </div>
        <div class="piece5">
            <div class="left01">
                <a href="#" target="_blank">
                    <div class="imgback">
                        <div class="img_area"><img src="@/assets/scss/images/group_img_ex_02.png" class="img_view"></div>
                        <div class="text_area">
                            <div class="textwrap">
                                <h4 class="page-group-title">디지털 교육자료</h4>
                                <span class="page-sub">누리과정과 표준보육과정을 토대로 한<br>유아교육 디지털 콘텐츠 제공</span>
                            </div>
                            <img src="@/assets/scss/icons/group-arrow-white.svg" class="arrow">
                        </div>
                    </div>
                </a>
            </div>
            <ul>
                <li>
                    <a href="#" target="_blank">
                        <div class="contents">
                            <div class="img_area"><img src="//images.kidkids.net/issue/event/event_img_20241024090625.PNG" class="img_view"></div>
                            <div class="tex_area">
                                <div class="textwrap">
                                    <span class="page-group-title">
                                        직무연수
                                    </span>
                                    <span>
                                        <img src="@/assets/scss/icons/group-arrow-white.svg">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <div class="contents">
                            <div class="img_area"><img src="@/assets/scss/images/group_img_ex_01.png" class="img_view"></div>
                            <div class="tex_area">
                                <div class="textwrap">
                                    <span class="page-group-title">
                                        직무연수
                                    </span>
                                    <span>
                                        <img src="@/assets/scss/icons/group-arrow-white.svg">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <div class="contents">
                            <div class="img_area"><img src="@/assets/scss/images/group_img_ex_01.png" class="img_view"></div>
                            <div class="tex_area">
                                <div class="textwrap">
                                    <span class="page-group-title">
                                        직무연수
                                    </span>
                                    <span>
                                        <img src="@/assets/scss/icons/group-arrow-white.svg">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <div class="contents">
                            <div class="img_area"><img src="@/assets/scss/images/group_img_ex_01.png" class="img_view"></div>
                            <div class="tex_area">
                                <div class="textwrap">
                                    <span class="page-group-title">
                                        직무연수
                                    </span>
                                    <span>
                                        <img src="@/assets/scss/icons/group-arrow-white.svg">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="contents2">
            <div>
                <div class="titles pdcommon">
                    <div class="name">
                        <h2 class="page-sub-title-bold">평생교육원</h2>
                        <a href="//edu.kidkids.net/main/index.php" target="_blank" class="page-sub" >
                            <span>edu.kidkids.net</span>
                            <span><img src="@/assets/scss/icons/group-arrow.svg"></span>
                        </a>
                    </div>
                    <div class="info">
                        <h5 class="page-sub">고용보험환급과정 인터넷원격교육기관</h5>
                        <h5 class="page-sub">· 보육교직원 전문성 및 직무능력 향상</h5>
                        <h5 class="page-sub">· 현장 사례중심 교육과정</h5>
                    </div>
                </div>
                <div class="img_big">
                    <img src="@/assets/scss/images/group_img_01.png">
                </div>
            </div>
            <div>
                <div class="titles pdcommon">
                    <div class="name">
                        <h2 class="page-sub-title-bold">월간유아</h2>
                        <a href="//iyua.kidkids.net" target="_blank" class="page-sub" >
                            <span>iyua.kidkids.net</span>
                            <span><img src="@/assets/scss/icons/group-arrow.svg"></span>
                        </a>
                    </div>
                    <div class="info">
                        <h5 class="page-sub">1984년 창간, 영유아교육 1등 브랜드 매거진</h5>
                        <h5 class="page-sub">· 유아교육, 문화, 소통에 대한 참신한 콘텐츠</h5>
                        <h5 class="page-sub">· 매월 새로운 교육자료</h5>
                    </div>
                </div>
                <div class="img_big">
                    <img src="@/assets/scss/images/group_img_02.png">
                </div>
            </div>
        </div>
        <div class="titles pdcommon">
            <div class="name">
                <h2 class="page-sub-title-bold">교육쇼핑몰</h2>
                <a href="//mall.kidkids.net" target="_blank" class="page-sub" >
                    <span>mall.kidkids.net</span>
                    <span><img src="@/assets/scss/icons/group-arrow.svg"></span>
                </a>
            </div>
            <div class="info">
                <h5 class="page-sub">키드키즈에서 개발한 교수자료 상품과 우수 협력사의 유아용품 판매</h5>
                <h5 class="page-sub">· 키드키즈몰 : 교재&교구, 만들기, 문구, 사무용품</h5>
                <h5 class="page-sub">· e아울렛 : 대형가전, 디지털가전, 건강식품, 화장품, 패션잡화, 생활잡화, 식음료, 야외용품</h5>
            </div>
        </div>
        <div class="piece5">
            <div class="left01">
                <a href="#" target="_blank">
                    <div class="imgback">
                        <div class="img_area"><img src="@/assets/scss/images/group_img_ex_02.png" class="img_view"></div>
                        <div class="text_area">
                            <div class="textwrap">
                                <h4 class="page-group-title">디지털 교육자료</h4>
                                <span class="page-sub">누리과정과 표준보육과정을 토대로 한<br>유아교육 디지털 콘텐츠 제공</span>
                            </div>
                            <img src="@/assets/scss/icons/group-arrow-white.svg" class="arrow">
                        </div>
                    </div>
                </a>
            </div>
            <ul>
                <li>
                    <a href="#" target="_blank">
                        <div class="contents">
                            <div class="img_area"><img src="//images.kidkids.net/issue/event/event_img_20241024090625.PNG" class="img_view"></div>
                            <div class="tex_area">
                                <div class="textwrap">
                                    <span class="page-group-title">
                                        직무연수
                                    </span>
                                    <span>
                                        <img src="@/assets/scss/icons/group-arrow-white.svg">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <div class="contents">
                            <div class="img_area"><img src="@/assets/scss/images/group_img_ex_01.png" class="img_view"></div>
                            <div class="tex_area">
                                <div class="textwrap">
                                    <span class="page-group-title">
                                        직무연수
                                    </span>
                                    <span>
                                        <img src="@/assets/scss/icons/group-arrow-white.svg">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <div class="contents">
                            <div class="img_area"><img src="@/assets/scss/images/group_img_ex_01.png" class="img_view"></div>
                            <div class="tex_area">
                                <div class="textwrap">
                                    <span class="page-group-title">
                                        직무연수
                                    </span>
                                    <span>
                                        <img src="@/assets/scss/icons/group-arrow-white.svg">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <div class="contents">
                            <div class="img_area"><img src="@/assets/scss/images/group_img_ex_01.png" class="img_view"></div>
                            <div class="tex_area">
                                <div class="textwrap">
                                    <span class="page-group-title">
                                        직무연수
                                    </span>
                                    <span>
                                        <img src="@/assets/scss/icons/group-arrow-white.svg">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="titles pdcommon">
            <div class="name">
                <h2 class="page-sub-title-bold">실버에듀넷</h2>
                <a href="//silveredu.net/" target="_blank" class="page-sub" >
                    <span>silveredu.net</span>
                    <span><img src="@/assets/scss/icons/group-arrow.svg"></span>
                </a>
            </div>
            <div class="info">
                <h5 class="page-sub">시니어 교육의 모든 것, 치매예방 인지교육 프로그램 제공</h5>
                <h5 class="page-sub">· 치매예방 교육 전문콘텐츠, 쇼핑몰, 직무연수, 구인구직</h5>
                <h5 class="page-sub">· 시니어 전문강사 양성과정&효톡(시니어 알림장)</h5>
            </div>
        </div>
        <div class="img_big">
            <img src="@/assets/scss/images/group_img_ex_04.png">
        </div>
        <div class="contents2">
            <div>
                <div class="titles pdcommon">
                    <div class="name">
                        <h2 class="page-sub-title-bold">빅스맘</h2>
                        <a href="#" target="_blank" class="page-sub" >
                            <span>edu.kidkids.net</span>
                            <span><img src="@/assets/scss/icons/group-arrow.svg"></span>
                        </a>
                    </div>
                    <div class="info">
                        <h5 class="page-sub">프리미엄 어린이집 프랜차이즈</h5>
                        <h5 class="page-sub">· 국내 최대 규모의 프랜차이즈 어린이집</h5>
                        <h5 class="page-sub">· 원운영, 홍보전략, 교육프로그램, 원장/교사교육 등 지원</h5>
                    </div>
                </div>
                <div class="img_big">
                    <img src="@/assets/scss/images/group_img_03.png">
                </div>
            </div>
            <div>
                <div class="titles pdcommon">
                    <div class="name">
                        <h2 class="page-sub-title-bold">㈔한국몬테소리협회</h2>
                        <a href="//kkms.co.kr" target="_blank" class="page-sub" >
                            <span>www.kkms.co.kr</span>
                            <span><img src="@/assets/scss/icons/group-arrow.svg"></span>
                        </a>
                    </div>
                    <div class="info">
                        <h5 class="page-sub">교육과학기술부 승인 몬테소리 전문가 육성 단체</h5>
                        <h5 class="page-sub">· 몬테소리 자격증 과정</h5>
                        <h5 class="page-sub">· 몬테소리 교육 연구개발</h5>
                    </div>
                </div>
                <div class="img_big">
                    <img src="@/assets/scss/images/group_img_04.png">
                </div>
            </div>
        </div>
        <div class="contents2">
            <div>
                <div class="titles pdcommon">
                    <div class="name">
                        <h2 class="page-sub-title-bold">EK보육경영연구소</h2>
                        <a href="//www.ekkidscare.com/" target="_blank" class="page-sub" >
                            <span>www.ekkidscare.com</span>
                            <span><img src="@/assets/scss/icons/group-arrow.svg"></span>
                        </a>
                    </div>
                    <div class="info">
                        <h5 class="page-sub">직장어린이집 설치 컨설팅 및 위탁운영 전문기관</h5>
                        <h5 class="page-sub">· 컨설팅, 교육연구개발, 운영지원, 경영관리</h5>
                        <h5 class="page-sub">· 어린이집 설치 관련 통합 컨설팅</h5>
                    </div>
                </div>
                <div class="img_big">
                    <img src="@/assets/scss/images/group_img_05.png">
                </div>
            </div>
            <div>
                <div class="titles pdcommon">
                    <div class="name">
                        <h2 class="page-sub-title-bold">이엔애드</h2>
                        <a href="//www.eknad.com" target="_blank" class="page-sub" >
                            <span>www.eknad.com</span>
                            <span><img src="@/assets/scss/icons/group-arrow.svg"></span>
                        </a>
                    </div>
                    <div class="info">
                        <h5 class="page-sub">키즈&실버 비즈니스 마케팅 에이전시</h5>
                        <h5 class="page-sub">· 전문적인 노하우를 통한 효과적인 상품 및 서비스 마케팅</h5>
                        <h5 class="page-sub">· EK 배너광고, 쇼핑몰 마케팅, 퍼스널 브랜딩, 콘텐츠 마케팅</h5>
                    </div>
                </div>
                <div class="img_big">
                    <img src="@/assets/scss/images/group_img_06.png">
                </div>
            </div>
        </div>
    </div>
</WebsiteLayout>
</template>
<style lang="scss" scoped>
.top_title{
    border-bottom: 1px solid $dark-60;
    padding-bottom: rem(50);
    color:$dark;
    @include bp(desktop-lg){
        padding-bottom: rem(80);
    }
}
.titles{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color:$dark;
    flex-wrap: wrap;
    
    @include bp(tablet){
        flex-direction:column;
    }
    @include bp(desktop-lg){
        flex-wrap: nowrap;
        flex-direction:row;
    }
    .name{
        display: flex;
        flex-direction:column;
        margin-bottom: 18px;
        align-items: flex-start;
        @include bp(desktop-lg){
            margin-bottom:0;
        }
        h2{
            line-height: 1;
            margin-right:rem(10);
            @include bp(tablet-lg){
                margin-right:0;
                margin-bottom:8px;
            }
        }
        a{
            display: flex;
            justify-content:center;
            span:first-child{
                color:$dark-200;
            }
            span:last-child img{
                width:70%;
                @include bp(tablet-lg){
                    width:100%;
                }
            }
        }
    }
    .info{
        text-align: left;
        @include bp(desktop-lg){
            text-align: right;
        }
        h5:first-child{
            font-weight: 600;
        }
    }
}
.piece5{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @include bp(desktop){
        flex-direction: row;
        align-items: normal;
    }
    .left01{
        margin-bottom:20px;
        @include bp(desktop){
            margin-bottom:0px;
        }
        a{
            .imgback{
                position: relative;
                width: rem(320);
                height:rem(355);
                
                @include bp(desktop-lg){
                    width:450px;
                    height:500px;
                }
                .img_area{
                    .img_view{
                        display: block;
                        transform: scale(1);
                        transition: transform 0.5s ease-in-out;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        object-fit: cover;
                    }
                }
                .text_area{
                    position: absolute;
                    top:0;
                    left:0;
                    background:linear-gradient(0deg, #0000002e, #00000080, #000000b3);
                    width:100%;
                    height:100%;
                    color:#fff;
                    .textwrap{
                        padding:rem(30) 0 0 rem(40);
                    }
                    .arrow{
                        position: absolute;
                        bottom:10px;
                        right:10px;
                    }
                }
            }
         
        }
    }
    ul{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 20px;
        row-gap:13px;
        @include bp(tablet){
            grid-template-columns: repeat(2, 1fr);
        }
        li{
            a{
                .contents{
                    display: inline-block;
                    width:300px;
                    height:160px;
                    position: relative;
                    color:#fff;
                    overflow: hidden;
                    
                    @include bp(desktop-lg){
                        width:452px;
                        height:240px;
                    }
                    .img_area{
                        .img_view{
                            display: block;
                            transform: scale(1);
                            transition: transform 0.5s ease-in-out;
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            object-fit: cover;
                        }
                    }
                    .tex_area{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background:linear-gradient(180deg, rgb(0 0 0 / 13%), rgb(0 0 0 / 15%), rgb(0 0 0 / 75%));
                        color: #fff;
                        opacity: 1;
                        transition: opacity 0.5s ease-in-out;
                        .textwrap{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            position: absolute;
                            bottom:10px;
                            width: 100%;
                            padding:0 rem(10) 0 rem(16);
                        }
                    }
                }
            
            }
        }
    }
}
.contents2{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap:rem(50);
    @include bp(tablet){
        grid-template-columns: repeat(2, 1fr);
    }
}

</style>