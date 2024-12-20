<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Anchor from "@/components/Common/Anchor.vue";
import FooterCaretDownIcon from "@/components/Icons/FooterCaretDown.vue";
import type AnchorItem from "@/modules/Interfaces/AnchorItem";
import type FamilySiteAnchorItem from "@/modules/Interfaces/Footer/FamilySiteAnchorItem";

// 패밀리 사이트 목록
const footerFamilySites = ref<FamilySiteAnchorItem[]>([]);

/**
 * Footer 정보
 */
const info: Array<AnchorItem> = [
  { name: "회사소개", href: "http://www.ekgroup.co.kr/story", target: "_blank" },
  { name: "이용약관", href: "https://www.kidkids.net/cs/agreement.html?type=A", target: "_self" },
  { name: "개인정보 처리방침", href: "https://www.kidkids.net/cs/agreement.html?type=P", target: "_self" },
  { name: "홍보센터", href: "http://www.ekgroup.co.kr/story/pr_center.html", target: "_self", class: "kk-info-hidden" },
  { name: "제휴문의", href: "https://www.kidkids.net/cs/cs_partner.html", target: "_self", class: "kk-info-hidden" },
  { name: "광고문의", href: "https://www.kidkids.net/cs/cs_advertisement.html", target: "_self", class: "kk-info-hidden" },
  { name: "고객센터", href: "https://www.kidkids.net/cs", target: "_self", class: "kk-info-hidden" },
  { name: "서비스 전체보기", href: "https://www.kidkids.net/cs/sitemap.html", target: "_self", class: "kk-info-hidden" },
];

/**
 * 외부 채널 목록
 */
const channels: Array<AnchorItem> = [
  {
    name: "키드키즈 카카오톡채널",
    href: "https://pf.kakao.com/_ilIrM",
    imgSrc: "https://kidkids.net/img/common/btn_2020_re_kakaoch.png",
    target: "_blank",
  },
  {
    name: "키드키즈 공식 유튜브",
    href: "https://www.youtube.com/user/kidkidsnet",
    imgSrc: "https://kidkids.net/img/common/btn_2019_re_youtube.png",
    target: "_blank",
  },

  {
    name: "키드키즈 포스트",
    href: "https://post.naver.com/my.nhn?memberNo=414791",
    imgSrc: "https://kidkids.net/img/common/btn_2019_re_post.png",
    target: "_blank",
  },
  {
    name: "키드키즈 공식 블로그",
    href: "https://blog.naver.com/kidkidscorp",
    imgSrc: "https://kidkids.net/img/common/btn_2019_re_blog.png",
    target: "_blank",
  },
  {
    name: "키드키즈 인스타그램",
    href: "https://www.instagram.com/ek_kidkids",
    imgSrc: "https://kidkids.net/img/common/btn_2019_re_instagram.png",
    target: "_blank",
  },
  {
    name: "키드키즈 페이스북",
    href: "https://www.facebook.com/ekkidkids",
    imgSrc: "https://kidkids.net/img/common/btn_2019_re_facebook.png",
    target: "_blank",
  },
];

/**
 * Footer 하단 Reward 목록
 */
const rewards: Array<AnchorItem> = [
  {
    name: "KISA정보보호 관리체계인증",
    href: "https://www.kidkids.net/event/isms_2018/index_1.html",
    imgSrc: "https://www.kidkids.net/img/emblem/emblem01s.png",
    target: "_blank",
  },
  {
    name: "굿콘테츠 서비스인증",
    href: "https://www.ekgroup.co.kr/story/pr_view.html?uid=942&page=2",
    imgSrc: "https://www.kidkids.net/img/emblem/emblem02s.png",
    target: "_blank",
  },
  {
    name: "교육대상",
    href: "https://www.ekgroup.co.kr/story/pr_view.html?uid=1091&page=1",
    imgSrc: "https://www.kidkids.net/img/emblem/emblem03_2.png",
    target: "_blank",
  },
  {
    name: "디지털고객만족도 유아교육1위",
    href: "https://www.ekgroup.co.kr/story/pr_view.html?uid=1012&page=1",
    imgSrc: "https://www.kidkids.net/img/emblem/emblem03s.png",
    target: "_blank",
  },
  {
    name: "대한민국 강소기업대상",
    href: "https://www.ekgroup.co.kr/story/pr_view.html?uid=962&page=1",
    imgSrc: "https://www.kidkids.net/img/emblem/emblem04s.png",
    target: "_blank",
  },
  {
    name: "국가경쟁력대상 교육부문 대상",
    href: "https://www.ekgroup.co.kr/story/pr_view.html?uid=956&page=2",
    imgSrc: "https://www.kidkids.net/img/emblem/emblem05s.png",
    target: "_blank",
  },
  {
    name: "일본이러닝어워드 글로벌부문 특별상",
    href: "https://www.ekgroup.co.kr/story/pr_view.html?uid=947&page=1",
    imgSrc: "https://www.kidkids.net/img/emblem/emblem06s.png",
    target: "_blank",
  },
  {
    name: "고객이 신뢰하는 브랜드대상 교육부문대상",
    href: "https://www.ekgroup.co.kr/story/pr_view.html?uid=884&page=1",
    imgSrc: "https://www.kidkids.net/img/emblem/emblem07s.png",
    target: "_blank",
  },
  {
    name: "유아온라인대상",
    href: "https://www.ekgroup.co.kr/story/pr_view.html?uid=748&page=4",
    imgSrc: "https://www.kidkids.net/img/emblem/emblem09s.png",
    target: "_blank",
  },
];

/**
 * Footer 패밀리 사이트 조회
 */
const fetchFamilySite = async () => {
  try {
    const url = "https://kidkids.net/api/v1/common/footer/familysites.php";

    const response = await fetch(url);
    const ret = await response.json();

    let temp = JSON.parse(ret);

    temp.forEach(function (elem: any) {
      const t: FamilySiteAnchorItem = {
        title: elem.title,
        subtitle: elem.subtitle,
        href: elem.href,
        target: "_blank",
      };

      footerFamilySites.value.push(t);
    });
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await fetchFamilySite();
});
</script>

<template>
  <div class="ek bottom-0 kk-footer">
    <div class="bg-gray-100 lg:py-10 py-4">
      <div class="container mx-auto px-6 lg:px-0">
        <div class="lg:flex lg:justify-between text-center">
          <div class="text-center mx-auto inline-block lg:text-left lg:mx-0">
            <ul class="kk-company flex mt-2">
              <li v-for="(item, i) in info" :key="i" :class="item.class">
                <Anchor :href="item.href" :target="item.target">
                  {{ item.name }}
                </Anchor>
              </li>
            </ul>

            <div class="kk-company mx-auto mt-4 lg:block hidden">
              <ul class="flex text-sm text-gray-400 mb-1">
                <li>EK㈜ 키드키즈 대표이사 : 이희주</li>
                <li>경기도 용인시 기흥구 기흥로 58 기흥ICT밸리 B동 29층</li>
                <li>대표전화 : 02-5880-115</li>
                <li>E-MAIL : KIDKIDS@KIDKIDS.NET</li>
              </ul>

              <ul class="flex text-sm text-gray-400">
                <li>사업자등록번호 : 214-86-51854</li>
                <li>통신판매업 신고 : 제 2021-용인기흥-2008호</li>
                <li>직업제공사업 신고 : 서울청 제2012-29호</li>
              </ul>
            </div>
            <p class="mt-2 text-sm text-gray-400">ⓒ EK Corp.</p>
          </div>

          <div class="lg:inline-block hidden">
            <div class="dropdown lg:inline-block relative md:hidden">
              <button class="kk-btn-family-site">
                <span class="mr-1">FAMILY SITE</span>
                <FooterCaretDownIcon />
              </button>

              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-60">
                <li v-for="(item, i) in footerFamilySites" :key="i">
                  <Anchor
                    :href="item.href"
                    :target="item.target"
                    class="kk-family-site"
                    :class="{ 'rounede-t': i == 0, 'rounded-b': i == footerFamilySites.length - 1 }"
                  >
                    {{ item.title }} - <span class="font-medium">{{ item.subtitle }}</span>
                  </Anchor>
                </li>
              </ul>
            </div>

            <!-- 채널 목록 -->
            <ul class="flex justify-between mt-4">
              <li v-for="(item, i) in channels" :key="i">
                <Anchor :href="item.href" :target="item.target">
                  <img :src="item.imgSrc" :alt="item.name" />
                </Anchor>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-4 lg:block hidden">
      <div class="container mx-auto">
        <!-- 리워드 목록 -->
        <ul class="flex justify-between mt-4">
          <li v-for="(item, i) in rewards" :key="i">
            <Anchor :href="item.href" :target="item.target">
              <img :src="item.imgSrc" :alt="item.name" />
            </Anchor>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.kk-company {
  li {
    @apply text-sm after:content-['_l'] after:text-gray-200 after:mx-2 font-light;

    &:last-child::after {
      content: none;
    }

    a {
      // @apply text-gray-400 font-light hover:text-gray-600 no-underline;
      @apply font-light no-underline;
      @apply text-gray-400 #{!important};
      @apply hover:text-gray-600 #{!important};
    }
  }
}

@media (1px <= width <= 768px) {
  .kk-company li:nth-child(3)::after {
    content: none;
  }
}

.dropdown {
  &:hover {
    .dropdown-menu {
      bottom: 47px;
      display: block;
      text-align: left;
      font-size: 14px;

      .kk-family-site {
        @apply bg-white hover:bg-gray-200 py-2 px-4 block font-light no-underline;
      }
    }
  }
}

// family site
.kk-btn-family-site {
  @apply bg-white text-sm text-gray-700 font-normal py-3 px-4 rounded inline-flex items-center w-60 justify-between;
}

// 회사 정보 hidden 영역 css
.kk-info-hidden {
  @apply lg:inline-block hidden;
}
</style>
