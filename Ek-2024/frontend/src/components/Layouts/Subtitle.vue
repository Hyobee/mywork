<template>
    <div>
        <div class="sub">
            <div class="container">
                <div class="page-sub-title"><slot /></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .sub{
        @include bg("@/assets/scss/images/bg_sub.png", center);   
        .page-sub-title{
            color:#fff;
            text-align: center;
            padding:rem(140) 0 rem(110);
            @include bp(desktop){
                padding:140px 0 100px;
            }
        }
    }
    
</style>