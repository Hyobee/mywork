<script lang="ts" setup>
import WebsiteLayout from "@/components/Layouts/WebsiteLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import SubTitle from "@/components/Layouts/SubTitle.vue";
import Subnavi from "@/components/Layouts/SubNavi.vue";
import SubList from "@/components/Layouts/SubList.vue";
import Tab from "@/components/Layouts/Tab.vue";
import Paging from "@/components/Layouts/Paging.vue";
</script>
<template>
    <WebsiteLayout>    
    <Navbar />
    <SubTitle>EVENT</SubTitle>
    <Subnavi>이벤트 </Subnavi>
    <div class="container">
        <Tab>전체</Tab>
        <SubList />
        <div class="mt-16">
            <Paging />
        </div>

    </div>
</WebsiteLayout>
</template>
<style lang="scss" scoped>


</style>