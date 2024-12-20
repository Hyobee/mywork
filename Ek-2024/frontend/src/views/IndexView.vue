<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import MainLoading from "@/components/Layouts/MainLoading.vue";
import MainSwiperAwards from "@/components/Layouts/MainSwiperAwards.vue";

function setHoverFixed() {
  const container = document.querySelector(".logoimg_container");
  container.classList.add("fixed-hovered"); // 클래스 추가하여 이미지를 고정시킴
}

/*
 * AOS
------------------------------------*/
onMounted(() => {
  AOS.init({});
});
</script>

<template>
  <WebsiteLayout>
    <MainLoading />

    <div class="mainimg">
      <div class="container">
        <h1 class="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="5000">
          교육을 생각하다<br />
          미래를 키우다
        </h1>
        <h3 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="5000">
          당신과 함께 만들어온 키드키즈,<br />
          키드키즈의 오늘이 유아교육의 미래가 되길 희망합니다.
        </h3>
      </div>
    </div>
    <div class="contents_01">
      <div class="container">
        <h2 class="page-title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
          아이들은 <span class="blockmobile"></span>우리들의 미래입니다
        </h2>
        <h3 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          이 땅의 미래를 키운다는 사명감으로 더 나은 내일을 향해 나아갑니다.
        </h3>
        <div class="brochure">
          <a href="javascript:;">
            브로슈어 다운로드
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
            </svg>
          </a>
        </div>
        <ul class="info">
          <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div class="line"></div>
            <h5>사이트 <span class="blockmobile"></span>오픈</h5>
            <h1>2001.6</h1>
          </li>
          <li data-aos="zoom-in" data-aos-duration="1100" data-aos-delay="200">
            <div class="line"></div>
            <h5>유아교육 <span class="blockmobile"></span>동종업계</h5>
            <h1>1위</h1>
          </li>
          <li data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
            <div class="line"></div>
            <h5>키드키즈 <span class="blockmobile"></span>회원 수</h5>
            <h1>130만 명</h1>
          </li>
          <li data-aos="zoom-in" data-aos-duration="1300" data-aos-delay="400">
            <div class="line"></div>
            <h5>대한민국 <span class="blockmobile"></span>공감받는 브랜드</h5>
            <h1>1위</h1>
          </li>
        </ul>
      </div>
      <div class="flows">
        <p class="flow_text"><b>THINK EDUCATION</b></p>
        <p class="flow_text"><b>THINK EDUCATION</b></p>
        <p class="flow_text"><b>THINK EDUCATION</b></p>
      </div>
    </div>
    <div class="contents_02">
      <div class="container">
        <div class="ekgroup">
          <div class="area_l">
            <div class="c_top">
              <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                <img src="@/assets/scss/images/ek_green.svg" alt="EK" />
              </div>
              <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                ‘교육(education)’과 ‘기술(technology)’의<span class="pcblock"></span> 결합으로 평등한 교육환경과<span class="pcblock"></span> 스마트한
                교육문화를 선도하여<span class="pcblock"></span>
                국내를 넘어 글로벌 교육기업으로 나아갑니다
              </h2>
            </div>
            <div class="c_bottom">
              <a href="javascript:;">
                <img src="@/assets/scss/images/skill_btn.svg" alt="재생버튼" />
              </a>
            </div>
          </div>
          <div class="area_r">
            <div class="text_area">
              <h5>ekgroup.co.kr</h5>
              <h1 class="page-title">
                교육과 기술이 만나,<br />
                더 큰 꿈을 키워나갑니다
              </h1>
            </div>
            <ul>
              <li>
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                  <img src="@/assets/scss/images/skill_img01.png" />
                </div>
                <p>EDUCATION</p>
                <h3>사람을 <span class="blockmobile"></span>바르게 하는<br />교육</h3>
              </li>
              <li>
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                  <img src="@/assets/scss/images/skill_img02.png" />
                </div>
                <p>TECHNOLOGY</p>
                <h3>세상을 <span class="blockmobile"></span>이롭게 하는<br />기술</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="contents_03">
      <div class="container">
        <div class="title">
          <div class="text_area">
            <h5>EDUCATION KIDKIDS</h5>
            <h1 class="page-title">교육을 생각하다<br />미래를 키우다</h1>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700">
            <img src="@/assets/scss/images/logo_EK.svg" />
          </div>
        </div>
        <ul class="logos">
          <li class="active" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
            <a href="//www.kidkids.net/" target="_blank">
              <span class="logoimg_container logo_ek_01 fixed-hovered">
                <img class="default_img" src="@/assets/scss/images/logo_ek_01.png" alt="ek" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_01_hover.png" alt="" />
              </span>
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="650" data-aos-delay="150">
            <a href="//iyua.kidkids.net/" target="_blank">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_02.png" alt="월간유아" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_02_hover.png" alt="" />
              </span>
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="700" data-aos-delay="200">
            <a href="//waglebagle.net/" target="_blank">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_03.png" alt="와글바글" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_03_hover.png" alt="" />
              </span>
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="750" data-aos-delay="250">
            <a href="//edu.kidkids.net/main/index.php" target="_blank">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_04.png" alt="평생교육원" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_04_hover.png" alt="" />
              </span>
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300">
            <a href="//mall.kidkids.net/" target="_blank">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_05.png" alt="키드키즈몰" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_05_hover.png" alt="" />
              </span>
            </a>
          </li>
        </ul>
        <ul class="logos logos2">
          <li data-aos="zoom-in" data-aos-duration="850" data-aos-delay="300">
            <a href="//ekkidscare.com/" target="_blank">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_06.png" alt="보경영" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_06_hover.png" alt="" />
              </span>
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="900" data-aos-delay="300">
            <a href="//bw.bigsmom.com/" target="_blank">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_07.png" alt="빅스맘" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_07_hover.png" alt="" />
              </span>
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="950" data-aos-delay="300">
            <a href="//www.eknad.com/" target="_blank">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_08.png" alt="이앤애드" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_08_hover.png" alt="" />
              </span>
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
            <a href="//www.silveredu.net/">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_09.png" alt="실버에듀넷" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_09_hover.png" alt="" />
              </span>
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
            <a href="javascript:;">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_10.png" alt="뉴질랜드" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_10_hover.png" alt="" />
              </span>
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="300">
            <a href="//kkms.co.kr/" target="_blank">
              <span class="logoimg_container">
                <img class="default_img" src="@/assets/scss/images/logo_ek_11.png" alt="kms" />
                <img class="hover_img" src="@/assets/scss/images/logo_ek_11_hover.png" alt="" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="contents_04">
      <div class="container">
        <div class="title">
          <div class="text_area">
            <h5>
              On-Off 통합 교육 시스템 구축, 유아교육, 교사교육, 부모교육까지 평생교육 기반을 조성하고, <span class="pcblock"></span> 3D, AR, 메타
              기술력이 더해진 교육 커리큘럼과 혁신적인 서비스로 글로벌 교육기업을 향해 나아가겠습니다.
            </h5>
            <h1 class="page-title">
              이케이의 오늘이<br />
              대한민국의 미래가 되길 <span class="blockmobile"></span>희망합니다
            </h1>
          </div>
        </div>
        <ul>
          <li data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
            <h3>
              기본 사업 경쟁력 강화 <span class="pcblock"></span> 교육서비스 혁신 <span class="pcblock"></span> 미디어&광고 사업
              <span class="pcblock"></span>
            </h3>
          </li>
          <li data-aos="zoom-in" data-aos-duration="700" data-aos-delay="200">
            <h3>
              1등 브랜드 다수 확보<span class="pcblock"></span> 프리미엄 서비스<span class="pcblock"></span> 유통채널 강화<span
                class="pcblock"
              ></span>
              학부모 연계사업 강화
            </h3>
          </li>
          <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300">
            <h3>
              해외 사업<span class="pcblock"></span> 미래교육 사업<span class="pcblock"></span> 육성전체 코스웨어 구성<span class="pcblock"></span>
              사업별 시너지 강화<span class="pcblock"></span>
              신사업 추진
            </h3>
          </li>
        </ul>
      </div>
    </div>
    <div class="contents_05">
      <div class="container">
        <div class="title child_senior">
          <div class="img_area">
            <div class="bluebox absolute" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100"></div>
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
              <img class="con05_img_01" src="@/assets/scss/images/con05_img_01.png" />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400">
              <img class="con05_img_02" src="@/assets/scss/images/con05_img_02.png" />
            </div>
            <div class="greenbox absolute" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200"></div>
            <div class="yellobox absolute" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100"></div>
          </div>
          <div class="text_area">
            <h5>LIFE-LONG EDUCATION</h5>
            <h1 class="page-title">유아교육, 교사교육<br />부모교육, 시니어 교육</h1>
            <h5 class="h5_2">모두가 평등하게 <span class="blocktablet"></span>최고의 교육을 받는 세상</h5>
            <a href="javascript:;" class="btn btn-round-full flex justify-center items-center align-bottom">
              <p>그룹소개</p>
              <img class="arrow" src="@/assets/scss/icons/arrow-up-right-wh.svg" />
            </a>
          </div>
        </div>
        <div class="photo_add">
          <div>
            <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
              <img class="absolute con05_img_03" src="@/assets/scss/images/con05_img_03.png" />
            </div>
            <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
              <img class="absolute con05_img_05" src="@/assets/scss/images/con05_img_05.png" />
            </div>
            <div class="orangebox" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100"></div>
            <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
              <img class="absolute con05_img_04" src="@/assets/scss/images/con05_img_04.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-05-01">
      <div class="container mb-20">
        <h1 class="page-title bottomh1" data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
          우리의 교육 씨앗이 <span class="pcblock"></span> 언젠가 세상 가장 위대한 빛이 될 때까지 <span class="pcblock"></span>
          끊임없는 변화와 새로운 도전의 걸음을멈추지 않겠습니다
        </h1>
      </div>

      <!-- 수상 슬라이드 -->
      <MainSwiperAwards data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100" />
    </div>

    <div class="contents_06">
      <div class="container">
        <ul class="prize_wrap">
          <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            <div class="info_area">
              <h1>
                정보보호관리체계<br />
                인증제도 획득
              </h1>
              <p>EK㈜ 키드키즈가 유아교육업계에서 7년 연속 ISMS 인증을 획득하였습니다.</p>
              <p>
                ISMS 인증은 사이버 위협으로부터 정보자산을 안전하게 보호하기 위해<span class="pcblock"></span> 정보보호 관리체계가 우수한 기업·기관에
                부여하는 인증제도입니다.
              </p>
              <p>
                키드키즈는 앞으로도 더 안전하고 신뢰받는 서비스를 통해 교사들의<span class="pcblock"></span> 인권존중과 개인정보보호에 더욱 앞장서는
                기업이 되겠습니다.
              </p>
            </div>
            <div class="link_area">
              <a href="https://iyua.kidkids.net/newsView/?uid=13593" target="_blank" class="btn">
                보도자료
                <span>
                  <img src="@/assets/scss/icons/arrow-up-right-wh.svg" />
                </span>
              </a>
              <img src="@/assets/scss/images/award01.png" alt="prize1" class="prize-image" />
            </div>
          </li>
          <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <div class="info_area">
              <h1>여성가족부 <br />가족친화기업 선정</h1>
              <p>EK그룹이 ‘여성가족부 가족친화기업’에 선정되었습니다.</p>
              <p>
                가족친화기업은 여성가족부에서 가족친화제도를 모범적으로 운영하는 기업 및 공공기관에 대하여 심사를 통해 인증을 부여하는 제도입니다.
              </p>
              <p>EK그룹은 근로자의 일·생활 균형을 지원하여 근무환경 및 국가경쟁력 향상에 힘쓰겠습니다.</p>
            </div>
            <div class="link_area">
              <a href="//ek.kidkids.net/story/pr_view.html?uid=1239&page=1" target="_blank" class="btn">
                보도자료
                <span>
                  <img src="@/assets/scss/icons/arrow-up-right-wh.svg" />
                </span>
              </a>
              <img src="//ek.kidkids.net/story/images/221219_update/award2.png" alt="prize1" class="prize-image" />
            </div>
          </li>
          <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
            <div class="info_area">
              <h1>
                고용노동부 강소기업<br />
                3년 연속 선정
              </h1>
              <p>EK그룹이 고용노동부가 선정하는 ‘강소기업’에 3년 연속 선정되었습니다.</p>
              <p>
                고용노동부는 청년들에게 우수한 중소기업의 정보를 제공하고 중소기업에 대한 이미지를 개선하고자 매년 강소기업을 선정해오고 있습니다.
              </p>
              <p>견실한 중견기업으로 성장하고 있다는 인증을 바탕으로, 앞으로도 고용안정을 위한 우수한 일자리 창출에 힘쓰도록 노력하겠습니다.</p>
            </div>
            <div class="link_area">
              <a href="//ek.kidkids.net/story/pr_view.html?uid=1273&page=1" target="_blank" class="btn">
                보도자료
                <span>
                  <img src="@/assets/scss/icons/arrow-up-right-wh.svg" />
                </span>
              </a>
              <img src="//ek.kidkids.net/story/images/221219_update/award_2023_01.png" alt="prize1" class="prize-image" />
            </div>
          </li>
          <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
            <div class="info_area">
              <h1>
                대한민국디지털고객만족도<br />
                1위 4년 연속 선정
              </h1>
              <p>
                EK㈜ 키드키즈가 한국마케팅협회와 소비자평가에서 주관하는 ‘2022 제 10회 디지털고객만족도’ 조사에서 4년 연속 유아교육콘텐츠부문 1위에
                선정되었습니다.
              </p>
              <p>이케이 대표브랜드 키드키즈는 SNS 채널을 통해 다양한 콘텐츠로 고객과의 소통을 더욱 강화해 나갈 계획입니다.</p>
            </div>
            <div class="link_area">
              <a href="//ek.kidkids.net/story/pr_view.html?uid=1178&page=6" target="_blank" class="btn">
                보도자료
                <span>
                  <img src="@/assets/scss/icons/arrow-up-right-wh.svg" />
                </span>
              </a>
              <img src="//ek.kidkids.net/story/images/221219_update/award4.png" alt="prize1" class="prize-image" />
            </div>
          </li>
          <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
            <div class="info_area">
              <h1>대한민국 교육대상 <br />수상</h1>
              <p>‘2021년 대한민국 교육대상’ 유아온라인교육 부문 대상으로 선정되었습니다.</p>
              <p>
                대한민국 교육대상은 소비자가 직접 참여하여 수상 교육브랜드를 선정합니다. 키드키즈는 코로나 19 팬데믹으로 인해 원격수업이 시행됨에 따라
                다양한 O2O(Online to Offline) 프로그램을 연구·개발 했으며, 그 우수성을 인정 받았습니다.
              </p>
              <p>
                키드키즈는 앞으로도 더 안전하고 신뢰받는 서비스를 통해 교사들의<span class="pcblock"></span> 인권존중과 개인정보보호에 더욱 앞장서는
                기업이 되겠습니다.
              </p>
            </div>
            <div class="link_area">
              <a href="//ek.kidkids.net/story/pr_view.html?uid=1091&page=1" target="_blank" class="btn">
                보도자료
                <span>
                  <img src="@/assets/scss/icons/arrow-up-right-wh.svg" />
                </span>
              </a>
              <img src="//ek.kidkids.net/story/images/edu_grand_prize_2021.png" alt="prize1" class="prize-image" />
            </div>
          </li>
          <li data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
            <div class="info_area">
              <h1>대한민국 강소기업 <br />대상 수상</h1>
              <p>
                (사)한국강소기업협회가 주최하는 ‘대한민국 강소기업 대상’ 시상식 <상생협력 온라인교육 부문>에서 2018, 2019, 2021 3회 대상, <혁신상품
                유아교육 부문>에서 2022 대상을 수상하였습니다.
              </p>
              <p>
                대한민국 강소기업 대상은 강소기업의 실적 및 성과, 강소기업 이미지, 성장성 및 기여도 등 언론사 및 전문가집단의 엄격한 심사를 통해
                선정됩니다.
              </p>
              <p>앞으로도 이케이 키드키즈는 혁신적인 교육문화를 만들어 나가는데 이바지하도록 하겠습니다.</p>
            </div>
            <div class="link_area">
              <a href="//ek.kidkids.net/story/pr_view.html?uid=1243&page=1" target="_blank" class="btn">
                보도자료
                <span>
                  <img src="@/assets/scss/icons/arrow-up-right-wh.svg" />
                </span>
              </a>
              <img src="//ek.kidkids.net/story/images/221219_update/award5.png" alt="prize1" class="prize-image" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="contents_07">
      <div class="container">
        <div class="file_wrap">
          <h3 data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">이케이 그룹 <span class="desktopblock"></span>소개자료</h3>
          <ul>
            <li data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400">
              <a href="https://www.kidkids.net/company-brochure/2022_EK_brochure_N.pdf" target="_blank">
                <h5>국문(PDF) 다운로드</h5>
                <img src="@/assets/scss/icons/filedown.svg" />
              </a>
            </li>
            <!-- <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500">
              <a href="javascript:;">
                <h5>영문(PDF) 다운로드</h5>
                <img src="@/assets/scss/icons/filedown.svg" />
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="container bottom_title">
      <h1 class="page-title text-center leading-tight text-black" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="600">
        우리가 할 수 있는 일, <span class="blockmobile"></span>해야 할 일은 앞으로도 많습니다<span class="pcblock"></span> 더 나은 교육을 위한
        <span class="pcblock"></span><span class="blockmobile"></span>우리의 열정과 도전은 <span class="blockmobile"></span>계속됩니다
      </h1>
    </div>
  </WebsiteLayout>
</template>
<style lang="scss" scoped>
img {
  max-width: 100%;
}
.container {
  @apply px-6;
  @include bp(mobile-lg) {
    @apply px-12;
  }
  @include bp(desktop-lg) {
    @apply px-0;
  }
}
.blocktablet {
  display: block;
  @include bp(desktop) {
    display: inline-block;
  }
}
.blockmobile {
  display: block;
  @include bp(tablet) {
    display: inline-block;
  }
}
.desktopblock {
  display: block;
  @include bp(desktop-lg) {
    display: inline-block;
  }
}

h3 {
  @apply text-2xl leading-snug;
}

.mainimg {
  @include bg("@/assets/scss/images/ex_main_bg_01.png", center);

  height: 50vh;
  animation: bg-scale-down 5s 1.6s forwards;
  width: 100%;
  padding-top: rem(120);

  @include bp(desktop) {
    height: 890px;
    padding-top: rem(500);
  }

  h1 {
    @apply text-4xl lg:text-9xl text-white font-bold leading-tight;
  }
  h3 {
    @apply text-2xl text-white leading-snug pt-2;
  }
}
.text_area {
  h5 {
    @apply text-lg font-medium text-black mb-2;
  }
  h1 {
    @apply leading-tight text-black;
    letter-spacing: $letter-spacing-1;
  }
}

.pcblock {
  /*@media (min-width:$breakpoints-xl){
    display:block;
  }*/
  display: inline-block;
  @include bp(desktop-lg) {
    display: block;
  }
}

.contents_01 {
  @apply text-black relative pb-32;
  h2 {
    @apply pt-16 xl:pt-28 leading-tight mb-1.5 sm:mb-2;
    letter-spacing: $letter-spacing-1;
  }
  h3 {
    @apply text-2xl font-bold mb-3 sm:mb-0;
    letter-spacing: $letter-spacing-1;
  }
  .flows {
    display: flex;
    align-items: center;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 55px;
    white-space: nowrap;
    width: 100%;
    z-index: -10;
    .flow_text {
      animation: scroll-5dfd692b 40s linear infinite;
      color: #f6f6f6;
      font-size: 10rem;
      margin: 0 4rem;
      padding: 0;
    }
  }
  .brochure {
    @apply flex justify-end;
    a {
      @apply flex justify-center text-[#787878];
      svg {
        @apply w-3.5;
      }
    }
  }
  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @include bp(tablet-lg) {
      grid-template-columns: repeat(4, 1fr);
    }

    column-gap: 40px;
    .line {
      width: 100%;
      height: 1px;
      background: #000;
      margin: 42px 0 30px;
    }
    h5 {
      @apply text-lg font-medium;
      letter-spacing: $letter-spacing-1;
    }
    h1 {
      @apply text-4xl sm:text-5xl 2xl:text-8xl font-bold pt-3;
      letter-spacing: $letter-spacing-1;
    }
  }
}

@keyframes scroll-5dfd692b {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.contents_02 {
  background-color: $dark-32;
  padding: 60px 0;
  @include bp(desktop) {
    padding: 110px 0;
  }
  .ekgroup {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    @include bp(desktop) {
      flex-direction: row;
    }
    .area_l {
      @include bg("@/assets/scss/images/bg_earth.png", center);
      width: 100%;
      height: 53vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 50px 40px 50px;
      @include bp(desktop) {
        width: 590px;
        height: 590px;
        padding: 80px 40px 40px;
      }
      .c_top {
        @apply text-left;
        img {
          @apply inline-block mb-7 md:mb-14 w-[30%] sm:w-auto;
        }
        h2 {
          @apply text-white text-lg sm:text-2xl;
        }
      }
      .c_bottom {
        @apply flex justify-end;
      }
    }
    .area_r {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @include bp(desktop) {
        width: 57%;
      }

      .text_area {
        text-align: right;
        margin-bottom: 20px;
        @include bp(desktop) {
          margin-bottom: 0px;
        }
      }
      ul {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        li {
          @apply bg-white text-center ml-0 xl:ml-[1.85rem] pt-8 pb-16 w-1/2;
          img {
            margin: 0 auto;
          }
          p {
            @apply text-lg font-bold;
            color: $primary;
          }
          h3 {
            @apply text-lg sm:text-3xl leading-tight;
          }
        }
        li:last-child {
          @apply ml-5 xl:ml-[1.85rem];
          p {
            color: $secondary;
          }
        }
      }
    }
  }
}
.contents_03 {
  padding-top: 80px;
  .title {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @include bp(mobile-lg) {
      align-items: flex-end;
      justify-content: space-between;
    }
    @include bp(tablet) {
    }
    img {
      display: inline-block;
      width: 30%;
      margin-bottom: 20px;
      @include bp(mobile-lg) {
        width: auto;
        margin-bottom: 0px;
      }
    }
  }
  .logos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    @include bp(desktop) {
      justify-content: space-between;
      flex-wrap: nowrap;
    }

    li {
      border: 1px solid $dark-50;
      width: 50%;
      @include bp(mobile-lg) {
        width: 33%;
      }
      @include bp(tablet-lg) {
        width: 46%;
      }
      .logoimg_container {
        position: relative;
        display: block;
        width: 100%;
        height: 120px;

        @include bp(tablet) {
          width: 100%;
          height: 150px;
        }
        @include bp(desktop-lg) {
          width: 232px;
          height: 210px;
        }

        .default_img,
        .hover_img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 0.3s ease;
        }
        .default_img {
        }
        .hover_img {
          opacity: 0;
        }
      }
      .logo_ek_01 {
        display: block;

        @include bp(desktop-lg) {
          width: 466px;
        }
      }
      .logoimg_container:hover .default_img {
        opacity: 0;
      }
      .logoimg_container:hover .hover_img {
        opacity: 1;
      }
      .fixed-hovered .hover_img {
        opacity: 1;
      }
      .fixed-hovered .default_img {
        opacity: 0;
      }
    }
    li:first-child {
      border-left: 1px solid $dark-50;
    }
    li:hover,
    li.active {
      border-color: $primary;
    }
  }
}
.contents_04 {
  @include bg("@/assets/scss/images/bg_con04.png", center);
  padding: 80px 0;
  @include bp(tablet) {
    padding: 120px 0 140px;
  }
  .text_area {
    display: flex;
    flex-direction: column-reverse;
    h5,
    h1 {
      @apply text-white;
    }
    h5 {
      margin-top: 20px;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    flex-direction: column;
    @include bp(mobile-lg) {
      flex-direction: row;
      margin-top: 100px;
    }
    li {
      background: rgb(0 0 0 / 58%);
      padding: 30px 0;
      margin-bottom: 14px;
      width: 100%;
      @include bp(mobile-lg) {
        width: 31%;
        padding: 70px 0;
        margin-bottom: 0;
      }
      h3 {
        @apply text-2xl text-white leading-tight text-center;
        word-break: keep-all;
        height: 150px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}
.contents_05 {
  padding: 60px 0 85px;
  @include bp(tablet) {
    padding: 130px 0 85px;
  }
  .child_senior {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    @include bp(tablet) {
      flex-direction: row;
    }
    .img_area {
      position: relative;
      width: 100%;
      height: 40.75rem;

      @include bp(tablet-lg) {
        width: 59.688rem;
      }

      .con05_img_01 {
        margin-top: 20px;
        @include bp(mobile) {
          position: absolute;
          top: 130px;
          left: 180px;
          width: 50%;
          margin-top: 0px;
        }
        @include bp(desktop-lg) {
          left: 220px;
          width: auto;
        }
      }
      .con05_img_02 {
        margin: 20px 0 0 0px;
        @include bp(tablet) {
          margin: 38px 0 0 70px;
        }
      }
      .greenbox {
        background: $secondary;
        width: rem(77);
        height: rem(77);
        top: 0;
        left: 30px;
        @include bp(tablet-lg) {
          left: 370px;
        }
      }
      .yellobox {
        background: $yellow;
        width: 77px;
        height: 77px;
        bottom: 60px;
        right: 20px;
      }
      .bluebox {
        display: none;
        @include bp(mobile) {
          background-color: $primary;
          width: rem(140);
          height: rem(140);
          margin-top: 190px;
          display: block;
        }
        @include bp(tablet) {
          margin-left: 60px;
          margin-top: 350px;
        }
        @include bp(desktop) {
          width: rem(160);
          height: rem(160);
        }
        @include bp(desktop-lg) {
          width: 320px;
          height: 300px;
          margin-top: 360px;
        }
      }
    }
    .text_area {
      text-align: right;

      @include bp(tablet) {
        width: 80%;
      }
      .h5_2 {
        margin: 20px 0 30px;
      }
      a {
        width: 40%;
        background-color: $primary;
        color: #fff;
        border-radius: 50px;
        p {
          @apply text-base;
        }
        .arrow {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
      a:hover {
        background-color: #0d457d;
      }
    }
  }
  .photo_add {
    height: 45.188rem;
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin: -100px 50px 0 0;
    @include bp(mobile) {
      height: 33rem;
      margin: -280px 0 0 0;
    }
    @include bp(mobile-lg) {
      margin: -230px 0 0 0;
    }

    @include bp(tablet) {
      margin: -300px 0 0 0;
      height: 36rem;
    }

    @include bp(desktop) {
      margin: -360px 50px 0 0;
    }
    @include bp(desktop-lg) {
      margin: -100px 50px 0 0;
      height: 45.188rem;
    }
    .con05_img_03 {
      top: 184px;
      right: -20px;
      z-index: 2;
      @include bp(mobile) {
        top: 140px;
        right: 0px;
        width: 50%;
      }
      @include bp(tablet) {
        top: 140px;
        right: 140px;
      }
      @include bp(desktop-lg) {
        width: auto;
      }
    }
    .con05_img_05 {
      top: 0;
      right: 0;
      z-index: 1;
    }
    .orangebox {
      display: none;
      @include bp(desktop-lg) {
        width: 315px;
        height: 250px;
        background-color: $orange;
        margin: 480px 60px 0 0;
        display: block;
      }
    }
    .con05_img_04 {
      bottom: 80px;
      left: 50px;
      width: rem(200);
      @include bp(desktop-lg) {
        width: auto;
        left: 80px;
      }
    }
  }
  .bottomh1 {
    @apply text-black leading-tight mt-0 4xl:mt-28;
  }
}

.content-05-01 {
  background-color: #fafafa;
  padding-top: rem(100);
  padding-bottom: rem(100);
  margin-bottom: rem(100);

  :deep(.swiper) {
    .swiper-wrapper {
      .swiper-slide:first-of-type {
        @media (min-width: 390px) {
          margin-left: 20px;
        }

        @include bp(mobile-lg) {
          margin-left: calc((100% - 576px + 6rem) / 2);
        }

        @include bp(tablet) {
          margin-left: calc((100% - 768px + 6rem) / 2);
        }

        @include bp(tablet-lg) {
          margin-left: calc((100% - 992px + 6rem) / 2);
        }

        @include bp(desktop) {
          margin-left: calc((100% - 1024px + 6rem) / 2);
        }

        @media (min-width: 1320px) {
          margin-left: calc((100% - 1320px) / 2);
        }

        @media (min-width: 1440px) {
          margin-left: calc((100% - 1400px - 3rem) / 2);
        }
      }
    }
  }
}

.contents_06 {
  .prize_wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 100%;
      margin-bottom: 50px;
      @include bp(desktop) {
        width: 46%;
      }
      .info_area {
        h1 {
          @apply text-4xl font-bold text-black leading-tight mb-9;
        }
        p {
          @apply text-lg font-light;
          color: $dark-300;
          margin-bottom: 12px;
          @include bp(desktop-lg) {
            margin-bottom: 40px;
          }
        }
      }
      .link_area {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include bp(desktop-lg) {
        }
        .btn {
          @apply rounded-full;
          display: flex;
          background-color: $primary;
          color: #fff;
          width: 60%;
          margin-top: 20px;
          @include bp(mobile) {
            width: 40%;
          }
          @include bp(desktop) {
            width: 40%;
          }
          @include bp(desktop-lg) {
            width: 25%;
            margin-top: 0;
          }
          span {
            img {
              width: 1rem;
              height: 1rem;
            }
          }
        }
        .prize-image {
          width: 30%;
          @include bp(desktop-lg) {
            width: auto;
          }
        }
      }
    }
  }
}
.contents_07 {
  margin: 50px 0 80px;

  .file_wrap {
    @include bg("@/assets/scss/images/bg_filedown.png", center);
    padding: 60px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @include bp(desktop) {
      padding: 100px 80px;
      flex-wrap: nowrap;
    }

    h3 {
      color: #fff;
      font-size: $font-5xl;
      letter-spacing: $letter-spacing-1;
    }
    ul {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      margin-top: 12px;
      @include bp(tablet) {
        flex-wrap: nowrap;
      }
      @include bp(desktop) {
        width: 60%;
        margin-top: 0px;
      }
      @include bp(desktop-lg) {
        width: 44%;
      }
      li {
        width: 100%;
        @include bp(desktop) {
          width: 60%;
        }
        a {
          display: flex;
          justify-content: space-between;
          background: $default;
          border-radius: $radius;
          padding: 20px 20px;
          width: 100%;
          h5 {
            font-size: $font-lg;
            font-weight: 600;
            letter-spacing: $letter-spacing-1;
          }
        }
      }
      li:last-child {
        margin-left: 0;
        margin-top: 12px;
        @include bp(tablet) {
          margin-left: 1.2rem;
          margin-top: 0px;
        }
      }
    }
  }
}
.bottom_title {
  h1 {
    letter-spacing: $letter-spacing-1;
    margin-bottom: 100px;
  }
}
</style>
