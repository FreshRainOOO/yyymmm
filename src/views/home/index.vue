

<template>
  <div class="scoll">

    <header>
      <h2 class="logo">Logo</h2>
      <nav class="navigation">
        <a href="#" class="active">Home</a>
        <a href="/test">test</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <section class="parallax">
      <img src="/home/hill1.png" id="hill1" ref="hill1" />
      <img src="/home/hill2.png" id="hill2" />
      <img src="/home/hill3.png" id="hill3" />
      <img src="/home/hill4.png" id="hill4" ref="hill4" />
      <img src="/home/hill5.png" id="hill5" ref="hill5" />
      <img src="/home/tree.png" id="tree" />
      <h2 ref="text" id="text">
        <div class="flower">Flower</div>
        <div class="sun">Sun</div>
        <div class="rainbow">Rainbow</div>
      </h2>
      <img src="/home/leaf.png" ref="leaf" id="leaf" />
      <img src="/home/plant.png" id="plant" />
      <div ref="downScollDom" class="downScoll" @click="scroll">
        <span class="iconfont icon-xiangxia"></span>
        <span class="iconfont icon-xiangxia"></span>
        <span class="iconfont icon-xiangxia"></span>
      </div>
    </section>

    <section class="sec">
      <h2>Parallax Scrolling Website</h2>
      <Menu />
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import Menu from "./menu.vue";
import anime from 'animejs/lib/anime.js';
const downScoll = ref<boolean>(true)
const downScollDom = ref<HTMLDivElement>()
const text = ref<HTMLDivElement | null>(null);
const leaf = ref<HTMLDivElement | null>(null);
const hill1 = ref<HTMLDivElement | null>(null);
const hill4 = ref<HTMLDivElement | null>(null);
const hill5 = ref<HTMLDivElement | null>(null);

const scroll = () => {

  const top = document.body.clientHeight
  const pageY = window.pageYOffset;
  const endPosition = top + pageY;

  const startTime = +new Date();
  const duration = 3000; //ms

  function run() {
    const time = +new Date() - startTime;

    window.scrollTo(0, pageY + top * (time / duration));
    run.timer = requestAnimationFrame(run);

    if (time >= duration) {
      window.scrollTo(0, endPosition);
      cancelAnimationFrame(run.timer);
    }
  }

  requestAnimationFrame(run);
}
onMounted(() => {

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    downScoll.value = (value == 0)
    text.value && (text.value.style.marginTop = value * 1.5 + "px");
    leaf.value && (leaf.value.style.top = value * -1.5 + "px");
    leaf.value && (leaf.value.style.left = value * 1.5 + "px");
    hill5.value && (hill5.value.style.left = value * 1.5 + "px");
    hill4.value && (hill4.value.style.left = value * -1.5 + "px");
    hill1.value && (hill1.value.style.top = value * 0.5 + "px");
  });
});
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.downScoll {
  z-index: 120;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;

  &:hover {
    animation: transmove 1s ease-out;
    cursor: pointer;
  }

  span:nth-child(1) {
    animation: transOpacity 6s linear infinite;
  }

  span:nth-child(2) {
    animation: transOpacity 6s linear infinite;
    animation-delay: 2s;
  }

  span:nth-child(3) {
    animation: transOpacity 6s linear infinite;
    animation-delay: 4s;
  }

  .icon-xiangxia {
    color: #fff;

  }
}

@keyframes transmove {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes transOpacity {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

::selection {
  background: rgba(0, 0, 0, 0.2);
}

body {
  background: #f9f9f9;
  min-height: 100vh;
  overflow-x: hidden;
}

.scoll {
  overflow: hidden;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
}

.logo {
  font-size: 2em;
  color: #359381;
  pointer-events: none;
  margin-right: 270px;
}

.navigation a {
  text-decoration: none;
  color: #359381;
  padding: 6px 15px;
  border-radius: 20px;
  margin: 0 10px;
  font-weight: 600;
}

.navigation a:hover,
.navigation a.active {
  background: #359381;
  color: #fff;
}

.parallax {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  #text {
    display: flex;
    width: 800px;

    .flower {
      color: transparent;
      filter: contrast(1.7);
      background-image: url(/home/flower.png);
      background-size: 35%;
      background-clip: text;
      -webkit-background-clip: text;
      margin-right: 40px;
    }

    .sun {
      color: #ff905b;
      &:hover{
      -webkit-animation: shining 0.5s alternate infinite;
      animation: bb 2s 1 alternate ease-in-out, shining 0.5s alternate 2s infinite;
      -webkit-animation: bb 2s 1 alternate ease-in-out, shining 0.5s alternate 2s infinite;
      }
    }
    @-webkit-keyframes bb {
      from {
          text-shadow: 0 0 10px #ff905b, 0 0 20px #ff905b, 0 0 30px #ff905b, 0 0 40px skyblue, 0 0 50px skyblue, 0 0 60px skyblue;
        }

        to {
          text-shadow: 0 0 5px red, 0 0 10px red, 0 0 15px red, 0 0 20px skyblue, 0 0 25px skyblue, 0 0 30px skyblue;
        }
    }
    @-webkit-keyframes shining {
        from {
          text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px skyblue, 0 0 50px skyblue, 0 0 60px skyblue;
        }

        to {
          text-shadow: 0 0 5px red, 0 0 10px red, 0 0 15px red, 0 0 20px skyblue, 0 0 25px skyblue, 0 0 30px skyblue;
        }
      }

    .rainbow {
      position: absolute;
      right: 0;
      -webkit-transform-style: preserve-3d;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-background-size: 200% 100%;

      &:hover {
        -webkit-animation: a1 1.5s 1 alternate ease-in-out, maskedAnimation 4s infinite 1s ease-in-out;
      }

      /*设置元素保留3D位置*/
      /*设置动画*/
      -webkit-animation-fill-mode: forwards;
    }

    @keyframes a1 {

      /*创建动画*/
      0% {
        -webkit-transform: rotateY(0deg) rotateX(0deg);
      }

      50% {
        -webkit-transform: rotateY(180deg) rotateX(30deg);
      }

      100% {
        -webkit-transform: rotateY(360deg) rotateX(0deg);
      }
    }

    @keyframes maskedAnimation {
      0% {
        background-position: 0 0;
        background-image: -webkit-linear-gradient(left, skyblue, pink 25%, skyblue 50%, pink 75%, skyblue);
      }

      100% {
        background-position: -100% 0;
        background-image: -webkit-linear-gradient(left, skyblue, pink 25%, skyblue 50%, pink 75%, skyblue);

      }
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
  }
}

#text {
  position: absolute;
  font-size: 5em;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}


.sec {
  position: relative;
  background: #003329;
  padding: 100px;
  overflow: hidden;

  h2 {
    font-size: 3em;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    color: #fff;
    font-weight: 300;
  }
}
</style>
