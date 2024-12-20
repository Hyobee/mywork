<script lang="ts" setup>
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import SubTitle from "@/components/Layouts/SubTitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";
import ListBtn from "@/components/Layouts/ListBtn.vue";
import SubList from "@/components/Layouts/SubList.vue";
import Paging from "@/components/Layouts/Paging.vue";
</script>
<template>
    <WebsiteLayout>    
    <Navbar />
    <SubTitle>홍보센터</SubTitle>
    <Subnavi>회사소개 </Subnavi>
    <div class="container">
        <div class="subject_area">
            <h2>키드키즈</h2>
            <h1>실버에듀넷, 2024 고객만족도 1위 ‘케어런·효톡’서비스 통해 소통 강화</h1>
            <h3>2024.07.05</h3>
        </div>
        <div class="subinfo">
            <ul>
                <li>
                    <h4>실버에듀넷, (사)한국마케팅협회 주최 ‘2024 대한민국디지털고객만족도 조사’에서 시니어교육콘텐츠 부문 1위를 차지</h4>
                </li>
                <li><h4>‘케어런 프로그램’과 ‘효톡 어플’ 등을 통해 어르신들의 인지교육을 돕고, 보호자와 돌봄종사자 간의 소통을 지원하는 서비스를 제공</h4></li>
                <li><h4>관계자는 고령화 사회에 대비해 필요한 서비스를 제공하며, 시니어 돌봄 종사자와 사회복지사 등으로부터 긍정적인 평가를 받고 있다고 밝혀</h4></li>
            </ul>
        </div>
        <div class="img_area"><img src="//img.kidkids.net/user_files/173130039313.jpg"></div>
        <div class="text_area">
            <p>에듀테크기업 이케이 주식회사(회장 이희주)가 ‘2024 여가친화인증’ 기업에 선정되었다고 11월 7일 밝혔다.</p>
            <p>‘여가친화인증’은 문화체육관광부가 근로자가 일과 여가생활을 조화롭게 병행할 수 있도록 지원하는 기업과 기관을 인증하는 제도이다.</p>
            <p>이케이 주식회사는 여가친화인증 평가지표 중 최고경영층 리더십, 직원 만족도, 조직 문화 형성에서 높은 점수를 받았다.</p>
            <p>특히 △업계 최초 4.5일 근무제 도입 △부모 시차출근제 △야근 지양 문화 △자사 및 선택적 복지몰 운영 △장기근속자 포상 △어학비 및 역량개발비 지원 △임직원 문화예술 지원 △사내 카페테리아 운영 △사외 휴양시설 지원 △사내 이벤트를 통한 조기퇴근 및 여가 활동 지원 등 임직원이 일과 여가생활을 조화롭게 병행할 수 있는 다양한 복지 프로그램을 운영하고 있다.</p>
            <p>구직 포털사이트 조사에 따르면 취업 시 가장 고려하는 부분이 ‘워라밸(일과 삶의 밸런스)’, 즉 일과 후 여가가 보장되는 삶인 것으로 나타났다. 이케이 주식회사는 이 같은 사회적 분위기를 반영해 회사 운영 시스템 및 복지 프로그램을 운영하고 있는 것.</p>
        </div>
        <ListBtn />
        <SubList />
        <Paging />
    </div>
</WebsiteLayout>
</template>
<style lang="scss" scoped>
.subject_area{
    border-bottom:1px solid #eee;
    padding-bottom:rem(12);
    h2{
        @apply text-2xl;
        color:$primary;
    }
    h1{
        @apply text-3xl md:text-5xl font-bold tracking-tighter text-black mt-3 mb-14 ;
    }
    h3{
        @apply text-xl font-medium tracking-tight text-[#888];
    }

}
.subinfo{
    margin:rem(50) 0;
    ul{
        background:$dark-30;
        padding:rem(24) rem(30);
        border-radius: $radius-md;
        li{
            margin:8px 0;
            text-indent: 10px;
            h4{
               @apply  text-lg font-medium text-black;
            }
        }
        li::before{
            content:'';
            display: block;
            width:3px;
            height: 3px;
            background: #000;
            border-radius: 100px;
            position: relative;
            top:16px;
        }
    }
}
.img_area{
    img{
        margin:0 auto;
    }
}
.text_area{
    margin:rem(60) 0 rem(100);
    p{
        @apply text-lg md:text-2xl text-black mb-5 text-left; 
    }
}

</style>