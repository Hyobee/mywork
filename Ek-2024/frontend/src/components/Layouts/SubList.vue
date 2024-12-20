<template>
    <div class="sub_list">
        <table class="w-full">
            <thead>
                <tr>
                    <th class="no">
                        <h5><b>NO</b></h5>
                    </th>
                    <th class="name">
                        <h5><b>제목</b></h5>
                    </th>
                    <th class="day">
                        <h5><b>등록일</b></h5>
                    </th>
                </tr>
            </thead>
            <tbody class="">
                <tr class="active">
                    <td>
                        <h5>337</h5>
                    </td>
                    <td class="subject">
                        <a href="">
                            <h5>이케이주식회사, 제57회 납세자의 날 부총리 겸 기획재정부장관 표창 수상</h5>
                        </a>
                    </td>
                    <td>
                        <h5>2024-12-23</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>336</h5>
                    </td>
                    <td class="subject">
                        <a href="">
                            <h5>이케이그룹, 군포시어린이집연합회와 MOU 체결</h5>
                        </a>
                    </td>
                    <td>
                        <h5>2024-12-23</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>335</h5>
                    </td>
                    <td class="subject">
                        <a href="">
                            <h5>이케이그룹, 군포시어린이집연합회와 MOU 체결</h5>
                        </a>
                    </td>
                    <td>
                        <h5>2024-12-23</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>334</h5>
                    </td>
                    <td class="subject">
                        <a href="">
                            <h5>이케이그룹, 군포시어린이집연합회와 MOU 체결</h5>
                        </a>
                    </td>
                    <td>
                        <h5>2024-12-23</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>333</h5>
                    </td>
                    <td class="subject">
                        <a href="">
                            <h5>이케이그룹, 군포시어린이집연합회와 MOU 체결</h5>
                        </a>
                    </td>
                    <td>
                        <h5>2024-12-23</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>332</h5>
                    </td>
                    <td class="subject">
                        <a href="">
                            <h5>이케이그룹, 군포시어린이집연합회와 MOU 체결</h5>
                        </a>
                    </td>
                    <td>
                        <h5>2024-12-23</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>331</h5>
                    </td>
                    <td class="subject">
                        <a href="">
                            <h5>이케이그룹, 군포시어린이집연합회와 MOU 체결</h5>
                        </a>
                    </td>
                    <td>
                        <h5>2024-12-23</h5>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>330</h5>
                    </td>
                    <td class="subject">
                        <a href="">
                            <h5>이케이그룹, 군포시어린이집연합회와 MOU 체결</h5>
                        </a>
                    </td>
                    <td>
                        <h5>2024-12-23</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss" scoped>
.sub_list{
    margin-bottom:60px;
    table{
        @apply text-base md:text-2xl;
        thead{
            background:$dark-60;
            border-top:4px solid $primary;     
            th{
                padding:rem(32) 0;
            }
            .no{
                @apply w-28;
            }
            .name{
                @apply w-auto;
                
            }
            .day{
                @apply w-36;
            }
        
        }
        td{
            text-align: center;
            border-bottom:1px solid $dark-60;
            padding:32px 0;
            h5{
                text-align: center;
            }
        }
        .subject h5{
            max-width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            @include bp(desktop){
                max-width: 100%;
            }
            
        }
        .active td{
            color:$primary;
            font-weight:600;
        }
    }
}
@media (min-width: 481px) and (max-width: 768px) {
    .subject h5 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 430px;
        /* 태블릿 화면에서의 너비 */
    }
}
</style>