<script lang="ts" setup>
import { ref } from "vue";
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import SubTitle from "@/components/Layouts/SubTitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";
import SubNav from "@/components/Layouts/SubNav.vue";
import Tab from "@/components/Layouts/Tab.vue";
import Paging from "@/components/Layouts/Paging.vue";

const navItems = ref([
  { href: "#", text: "페이지 1" },
  { href: "#", text: "페이지 2" },
  { href: "#", text: "페이지 3" },
]);
</script>

<template>
  <WebsiteLayout>
    <Navbar />
    <SubTitle>홍보센터</SubTitle>
    <!-- <Subnavi>홍보센터 </Subnavi> -->

    <SubNav :subnavItems="navItems" />

    <div class="container">
      <Tab>전체</Tab>
      <div class="list">
        <ul>
          <li>
            <a href="javascript:;" class="article-item">
              <div class="image-container">
                <img src="//images.kidkids.net/issue/board/EK_MOU/mou_img_20241111140500.JPG" class="article-image" />
              </div>
              <div class="text-container">
                <p>업무협약 체결</p>
                <h3>이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정</h3>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="article-item">
              <div class="image-container">
                <img src="//images.kidkids.net/issue/board/EK_MOU/mou_img_20241111140500.JPG" class="article-image" />
              </div>
              <div class="text-container">
                <p>업무협약 체결</p>
                <h3>이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정</h3>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="article-item">
              <div class="image-container">
                <img src="//images.kidkids.net/issue/board/EK_MOU/mou_img_20241111140500.JPG" class="article-image" />
              </div>
              <div class="text-container">
                <p>업무협약 체결</p>
                <h3>이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정</h3>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="article-item">
              <div class="image-container">
                <img src="//images.kidkids.net/issue/board/EK_MOU/mou_img_20241111140500.JPG" class="article-image" />
              </div>
              <div class="text-container">
                <p>업무협약 체결</p>
                <h3>이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정</h3>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="article-item">
              <div class="image-container">
                <img src="//images.kidkids.net/issue/board/EK_MOU/mou_img_20241111140500.JPG" class="article-image" />
              </div>
              <div class="text-container">
                <p>업무협약 체결</p>
                <h3>이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정</h3>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="article-item">
              <div class="image-container">
                <img src="//images.kidkids.net/issue/board/EK_MOU/mou_img_20241111140500.JPG" class="article-image" />
              </div>
              <div class="text-container">
                <p>업무협약 체결</p>
                <h3>이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정</h3>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="article-item">
              <div class="image-container">
                <img src="//images.kidkids.net/issue/board/EK_MOU/mou_img_20241111140500.JPG" class="article-image" />
              </div>
              <div class="text-container">
                <p>업무협약 체결</p>
                <h3>이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정</h3>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="article-item">
              <div class="image-container">
                <img src="//images.kidkids.net/issue/board/EK_MOU/mou_img_20241111140500.JPG" class="article-image" />
              </div>
              <div class="text-container">
                <p>업무협약 체결</p>
                <h3>이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정</h3>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="article-item">
              <div class="image-container">
                <img src="//images.kidkids.net/issue/board/EK_MOU/mou_img_20241111140500.JPG" class="article-image" />
              </div>
              <div class="text-container">
                <p>업무협약 체결</p>
                <h3>이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정이케이 주식회사, 문체부 ‘여가친화인증’ 기업에 선정</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <Paging />
      <h1 class="page-title text-center mt-36 mb-11">영상으로 만나는 키드키즈에 관한 모든 것!</h1>
      <div class="snsbtn">
        <a href=""><img src="@/assets/scss/images/btn_youtube.png" /></a>
        <a href=""><img src="@/assets/scss/images/btn_insta.png" /></a>
        <a href=""><img src="@/assets/scss/images/btn_blog.png" /></a>
        <a href=""><img src="@/assets/scss/images/btn_facebook.png" /></a>
      </div>
      <div class="videoarea"></div>
    </div>
  </WebsiteLayout>
</template>
<style lang="scss" scoped>
.list {
  margin-bottom: rem(120);
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: rem(60);
    column-gap: rem(30);
    @include bp(tablet) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    li {
      .article-item {
        .image-container {
          width: 100%;
          padding-bottom: 56.25%;
          /* 16:9 비율 */
          overflow: hidden;
          position: relative;
          .article-image {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
        }
        .text-container {
          p {
            @apply text-base;
            font-weight: 500;
            color: $primary;
            margin: rem(16) 0 rem(10);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          h3 {
            @apply text-lg md:text-2xl;
            font-weight: 600;
            color: $dark;
            line-height: 1.3;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
            text-align: left;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
/* 이미지 확대 애니메이션 */
.article-item:hover .article-image {
  transform: scale(1.05);
}
.article-item.visible {
  opacity: 1;
}
.snsbtn {
  display: flex;
  justify-content: center;
  margin-bottom: rem(60);
  a {
    margin: 0 rem(5);
  }
}
.videoarea {
  background: #333;
  width: 90%;
  height: 26vh;
  margin: 0 auto;
  @include bp(tablet) {
    height: 36vh;
  }
  @include bp(desktop-lg) {
    width: rem(1200);
    height: rem(620);
  }
}
</style>
