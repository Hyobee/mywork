<template>
    <div class="paging">
        <ul>
            <li class="pagebtn">
                <a href="javascript:;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg>
                </a>
            </li>
            <li class="pagebtn pagebtn2">
                <a href="javascript:;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">                    
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </a>
            </li>
            <li class="num">
                <a href="javascript:;"><span class="active">1</span></a>
            </li>
            <li class="num">
                <a href="javascript:;"><span>2</span></a>
            </li>
            <li class="num">
                <a href="javascript:;"><span>3</span></a>
            </li>
            <li class="num">
                <a href="javascript:;"><span>4</span></a>
            </li>
            <li class="num">
                <a href="javascript:;"><span>5</span></a>
            </li>
            <li class="pagebtn pagebtn3">
                <a href="javascript:;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </li>
            <li class="pagebtn">
                <a href="javascript:;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    .paging{
        margin:0 auto;
        text-align: center;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                display: inline-block;
                
                a{
                    display: inline-block;
                    svg{
                        width:rem(16);
                        height:rem(16);
                        color:$primary;
                        display: inline-block;
                        @include bp(tablet){
                            width:rem(20);
                            height:rem(20);
                        }
                    }
                    span{
                        font-size:$font-base;
                        color:$dark-250;
                    }
                }
                .active{
                    color:$primary;
                    font-weight:600;
                }
            }
            .pagebtn{
                border: 1px solid $primary;
                a{
                    padding:rem(4) rem(8);
                    @include bp(tablet){
                        padding:rem(7) rem(10);
                    }
                }
            }
            .pagebtn2{
                margin:0 rem(14) 0 rem(8);
            }
            .pagebtn3{
                margin:0 rem(8) 0 rem(14);
            }
            .num{
                padding:0 rem(10);
                @include bp(tablet){
                    padding:0 rem(16);
                }
            }
        }
    }
</style>