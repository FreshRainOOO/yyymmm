<script setup lang="ts">
import { ref, onMounted } from "vue";
import Menu from "./menu.vue";
const text = ref(null);
const leaf = ref(null);
const hill1 = ref(null);
const hill4 = ref(null);
const hill5 = ref(null);
onMounted(() => {
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.value.style.marginTop = value * 1.5 + "px";
    leaf.value.style.top = value * -1.5 + "px";
    leaf.value.style.left = value * 1.5 + "px";
    hill5.value.style.left = value * 1.5 + "px";
    hill4.value.style.left = value * -1.5 + "px";
    hill1.value.style.top = value * 0.5 + "px";
  });
});
</script>

<template>
  <div class="scoll">
  <header>
    <h2 class="logo">Logo</h2>
    <nav class="navigation">
      <a href="#" class="active">Home</a>
      <a href="#">About</a>
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
    <h2 ref="text" id="text">Parallax Website</h2>
    <img src="/home/leaf.png" ref="leaf" id="leaf" />
    <img src="/home/plant.png" id="plant" />
  </section>

  <section class="sec">
    <h2>Parallax Scrolling Website</h2>
   <Menu />
  </section>
</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

::selection {
  background: rgba(0, 0, 0, 0.2);
}

body {
  background: #f9f9f9;
  min-height: 100vh;
  overflow-x: hidden;
}
.scoll{
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
}

#text {
  position: absolute;
  font-size: 5em;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.parallax img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

.sec {
  position: relative;
  background: #003329;
  padding: 100px;
  overflow: hidden;
}

.sec h2 {
  font-size: 3em;
  color: #fff;
  margin-bottom: 10px;
}

.sec p {
  font-size: 1em;
  color: #fff;
  font-weight: 300;
}
</style>
