<template>
    <div class="menu" @click="fullInScreen">
        <div class="a">
            <div>
                <Blog></Blog>
            </div>
        </div>
        <div class="b" :class="fullDom == 'b' && 'full'" @mouseenter="fullInScreen('b')" @mouseleave="reGrid">
            <div>
                <h1>高级撞色设计</h1>
            </div>
        </div>
        <div class="c" :class="fullDom == 'c' && 'full'" @mouseenter="fullInScreen('c')" @mouseleave="reGrid">
            <div>
                <h1>高级撞色设计</h1>
            </div>
        </div>
        <div class="d" :class="fullDom == 'd' && 'full'" @mouseenter="fullInScreen('d')" @mouseleave="reGrid">
            <div>
                <h1>高级撞色设计</h1>
            </div>
        </div>
        <div class="e" :class="fullDom == 'e' && 'full'" @mouseenter="fullInScreen('e')" @mouseleave="reGrid">
            <div>
                <h1>高级撞色设计</h1>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import anime from 'animejs/lib/anime.js';
import Blog from './components/blog.vue'
import { onMounted, ref } from "vue";
const fullDom = ref<string>()
const fullInScreen = (e) => {
    console.log(e);
    fullDom.value = e
}
const reGrid = () => {
    fullDom.value = ''
}
onMounted(() => {

})

</script>
<style lang="scss" scoped>
.menu {
    display: grid;
    width: 100%;
    height: 700px;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(3, 33%);
    /* grid-gap:50px 50px; */
    grid-template-areas: 'a a b'
        'a a e'
        'c d e';

    >div {
        box-sizing: border-box;
        padding: 12px;

        >div {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .full {

        -webkit-animation: full .4s 1 alternate ease-in-out;
        // transition: all 2s ease-out;
        grid-column-start: a-start;
        grid-column-end: b-end;
        grid-row-start: a-start;
        grid-row-end: c-end;
        z-index: 10;

        @keyframes full {
            0% {
                opacity: 0.7
            }

            100% {
                opacity: 1
            }
        }
    }
}

.a {
    grid-area: a;


    div {
        background-color: #ea6b48;
        width: 100%;
        height: 100%;
        border: 5px solid #f2e4e3;

        h1 {
            color: #f2e4e3;
            display: inline-block;
            margin: 0 auto;
            line-height: 100%;
        }

    }
}

.b {
    grid-area: b;

    div {
        background-color: #94aa67;
        width: 100%;
        height: 100%;
        border: 5px solid #dbccb1;
    }

    h1 {
        color: #dbccb1;
    }
}

.c {
    grid-area: c;

    div {
        background-color: #6667ab;
        width: 100%;
        height: 100%;
        border: 5px solid #f7fed5;
    }

    h1 {
        color: #f7fed5;
    }

}

.d {
    grid-area: d;

    div {
        background-color: #d57799;
        width: 100%;
        height: 100%;
        border: 5px solid #fafafa;
    }

    h1 {
        color: #fafafa;
    }
}

.e {
    grid-area: e;

    div {
        background-color: #9dd6cf;
        width: 100%;
        height: 100%;
        border: 5px solid #fff;
    }

    h1 {
        color: #fff;
    }
}
</style>