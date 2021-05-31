<template>
  <div id="app">
    <div class="front-img">
      <div class="img-chunk">
        <Sidebar id="sidebar-1"></Sidebar>
        <b-jumbotron id="title-jumbo">
          <h1 style="font-family: titleFont; font-size: 5rem;">
            The Post
          </h1>
        </b-jumbotron>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
window.addEventListener("load", () => {
  alert("Este proyecto es solamente para practicar código, puede contener información falsa");
});
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar
  }
};
</script>

<style>
/* eslint-disable */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-family: Verdana, Tahoma, sans-serif;
}

#main {
  transition: margin-left 0.5s; /* If you want a transition effect */
  padding: 20px;
}

#title-jumbo {
  margin: auto;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: white;
}

.front-img {
  text-align: center;
  background-image: url("newspaper-wallpaper.png");
  width: 100%;
  height: 15rem;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 30px;
}

.img-chunk {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
}

#sidebar-1 {
  margin: 5px;
}

@media screen and (max-width: 1030px) {
  .img-chunk {
    flex-direction: column;
    text-align: left;
  }
}

@font-face {
  font-family: titleFont;
  src: url(Engravers Old English Normal.ttf);
}
</style>
