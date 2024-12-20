<template>
    <div class="tab">
        <ul>
            <li>
                <a href="javascript:;" class="active"><slot /></a>
            </li>
            <li>
                <a href="javascript:;"><slot /></a>
            </li>
            <li>
                <a href="javascript:;"><slot /></a>
            </li>
            <li>
                <a href="javascript:;"><slot /></a>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.tab{
    padding:0;
    margin-bottom:rem(60);
    ul{
        display: flex;
        li{
            margin-right:rem(8);
            a{
                font-size:$font-base;
                font-weight:500;
                color:$default-100;
                border:1px solid $dark-60;
                border-radius: $radius-2xl;
                padding:rem(10) rem(20);
                background:$default;
                @apply transition-colors duration-300;
                @include bp(desktop){
                    padding:rem(10) rem(40);
                }
            }
            a:hover{
                color:$dark;
                border:1px solid $dark;
            }
            a.active{
                background:$dark;
                color:$default;
                border:1px solid $dark;
            }
        }
    }
}
</style>