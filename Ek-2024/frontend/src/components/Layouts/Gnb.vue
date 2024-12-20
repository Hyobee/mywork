<template>
  <div class="">
    <header id="header" class="up on">
      <h1 class="hd-logo"><a href="javascript:;"><img src="@/assets/scss/images/ek_logo.svg"></a></h1>
      <div class="hd-menu">
        <nav class="gnb-wrap ">
          <ul class="gnb">
            <li class="on">
              <a href="javascript:;" class="menuup">그룹소개</a>
              <div class="depth">
                <ul class="">
                  <li><a href="#">홍보센터</a></li>
                  <li><a href="#">MOU 체결기관</a></li>
                  <li><a href="#">사회공헌</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </li>
            <li class="">
              <a href="javascript:;" class="menuup">이벤트</a>
              <div class="depth">
                <ul>
                  <li><a href="#">진행중 이벤트</a></li>
                  <li><a href="#">종료된 이벤트</a></li>
                  <li><a href="#">당첨자 발표</a></li>
                  <li><a href="#">이벤트 FAQ</a></li>
                </ul>
              </div>
            </li>
            <li class="">
              <a href="javascript:;" class="menuup">캠페인</a>
              <div class="depth">
                <ul>
                  <li><a href="#">캠페인</a></li>
                </ul>
              </div>
            </li>
            <li class="">
              <a href="javascript:;" class="menuup">인재채용</a>
              <div class="depth">
                <ul>
                  <li><a href="#">회사생활·복지</a></li>
                  <li><a href="#">채용안내</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div class="hd-info">
        <div class="kidkidsbtn"><a href="javascript:;">키드키즈</a></div>
        <div class="language">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span>KOR</span>
          </a>
          <ul class="lang_wrap">
            <li><a href="#">KR</a></li>
            <li><a href="#">EN</a></li>
          </ul>
        </div>
      </div>
    </header>
  </div>


  
</template>

<style lang="scss">
/*********************************************** header ***********************************************/
.hide {
	position:absolute;
	left:-9999%;
	font-size:0;
	line-height:0;
	text-indent: -9999%;
} 
#header {
	position:fixed;
	left:0;
	top:0;
	z-index:1000;
	width:100%;
	/*height:100px;*/
	-webkit-transition:all 0.5s;
	-moz-transition:all 0.5s;
	-ms-transition:all 0.5s;
	-o-transition:all 0.5s;
	transition:all 0.5s;
  display: none;

  @include bp(desktop){
     display: block;
  }
  
  .hd-logo {
    position:absolute;
    left:5%;
    top:16px;
    z-index:6000;
  }
  .gnb-wrap {
    height:100px;
    margin: 0 auto;
    width: 40%;

    .gnb {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      height:100%;
      text-align:center;

      li {
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative; 
        height:100%; 
        -webkit-transition:all ease 0.3s;
        -moz-transition:all ease 0.3s;
        -ms-transition:all ease 0.3s;
        -o-transition:all ease 0.3s;
        transition:all ease 0.3s;
        margin:0 3%;
        .menuup{
          @apply text-lg font-medium text-white;
        }
        .depth{
          opacity: 0;
          position: absolute;
          left: 0;
          top: 100%;
          min-width: auto;
          width: 100%;
          padding-top:26px;
          li{
            padding-bottom:15px;
          }
        }
      }
    }
  }
  .hd-info {
    position:absolute;
    right:5%;
    top:34px;
    z-index:6000;
    display: flex;
    align-items: center;

    .kidkidsbtn{
      a{
        @apply text-base py-2 w-32 text-center text-white inline-block;
        border-radius:$radius-2xl;
        background: #00000052;
      }
    }
    .language{
      position:relative;
      a{
        @apply font-semibold;
        display:flex;
        color:#fff;
        svg{
          @apply ml-7 mr-1.5; 
        }
      } 
      .lang_wrap{
          opacity: 0;
          position:absolute;
        } 
    }
  }

}

#header:not(.menu-open).down{
	top:-100px;
}
#header .hd-menu .hd-mak{
	display:none;
}
#header .on:after{ 
	content:'';
	position:absolute;
	left:0;
	top:100px;
	z-index:1;
	width:100%;
	height:1px; 
	background: #eee;
}
/*#header{
		overflow:hidden;
		height:350px;
		background:#fff;
		-webkit-box-shadow:1px 1px 25px rgb(67 67 67 / 10%);
	} */

#header .gnb-wrap .gnb:hover li .depth{
 
  a{
    @apply text-[1.125rem]  text-black;
  }
  a:hover{
    color:$primary;
  }
}
#header .gnb-wrap .gnb:hover .depth{
  opacity: 1;
}
#header .gnb-wrap .gnb li .menuup:hover{
  color:#000;
}
#header:hover .hd-info .language a{
  @apply text-black;
}
#header .hd-info .language:hover{
  opacity: 1;
  
}
#header .hd-info .language:hover .lang_wrap{
  background: #fff;
  border-radius: $radius;
  padding:12px 22px;
  position: absolute;
  left:2vw;
	top:30px;
  box-shadow: 0px 3px 10px #0000002e;
  color:#000;
}
#header:hover .hd-info .language .lang_wrap a:hover{
  color:$primary;
  text-decoration: underline
}




</style>
  