<template>
    <div class="listbtn">
        <div class="list">
            <a href="#">목록</a>
        </div>
        <div class="btn_prevnext">
            <a href="#">이전</a>
            <a href="#">다음</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .listbtn{
        display:flex;
        justify-content: space-between;
        border-top:1px solid $dark-60;
        padding-top:rem(22);
        margin-bottom:rem(120);
        .list{
            border:1px solid $dark-100;
            border-radius: $radius-xs;
          
        }
        .btn_prevnext{
            display:flex;
            justify-content: center;
            border:1px solid $dark-100;
            border-radius: $radius-xs;
          
            a:first-child{
                border-right:1px solid $dark-100;
            }
        }
        a{
            @apply text-lg md:text-xl font-semibold text-black inline-block;
            padding:rem(8) rem(22);
            @include bp(desktop){
                padding:rem(10) rem(50);
            }
        }
    }
</style>