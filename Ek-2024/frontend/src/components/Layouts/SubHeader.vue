<template>
    <div class="top_nav">
        <div class="navwrap">
            <a href="javascript:;">
                <img src="@/assets/scss/images/ek_logo.svg" alt="로고">
            </a>
            <ul>
                <li>
                    <a href="javascript:;">회사소개</a>
                </li>
                <li>
                    <a href="javascript:;">홍보센터</a>
                </li>
                <li>
                    <a href="javascript:;">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.top_nav{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    z-index: 50;
    border-bottom: 1px solid #eeeeee47;
    @apply px-20 ;
    .navwrap{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding:14px 0 26px;
        ul{
            display: flex;
            justify-content: flex-end;
            max-width: 50rem;
            width: 100%;
            height: 100%;
            li{
                width: 30%;
                height: 100%;
                text-align: center;
                a{
                    color:#fff;
                    font-size:$font-2xl;
                    font-weight: 600;
                    display: inline-block;
                    width: 100%;
                    
                }
                a:hover{
                    color:$primary;
                }
            }
        }
    }
}
</style>