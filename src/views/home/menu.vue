<template>
    <div class="menu">
        <div class="a">
            <div>
                <h1>高级撞色设计</h1>
            </div>
        </div>
        <div class="b">
            <div>
                <h1>高级撞色设计</h1>
            </div>
        </div>
        <div class="c">
            <div>
                <h1>高级撞色设计</h1>
            </div>
        </div>
        <div class="d">
            <div>
                <h1>高级撞色设计</h1>
            </div>
        </div>
        <div class="e">
            <div>
                <h1>高级撞色设计</h1>
            </div>
        </div>
</div>
</template>
<script setup lang="ts">
import anime from 'animejs';
import { onMounted } from "vue";
onMounted(() => {
    console.log('anime', anime);

    anime({
        targets: '.a .b',
        left: '240px',
        backgroundColor: '#FFF',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
    })
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