<template>
    <div class="blog">
        <div v-for="item in mdList" :key="item.title" :style="{}">{{ item.title }}</div>
    </div>
</template>
<script setup lang="ts">
import mdList from '@/markdowns/list'
import { onMounted } from 'vue';

</script>
<style setup lang="scss">
.blog {
    @keyframes aaa {}

    div {
        -webkit-animation: aaa .4s 1 alternate ease-in-out; //TODO:加个从左侧来的动画
    }

}
</style>