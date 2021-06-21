<template>
  <div class="main">
    <h3>
      <b
        ><i>{{ article.title }}</i></b
      >
    </h3>
    <h5 style="color: gray">{{ article.subtitle }}</h5>
    <br />
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
import APIService from "@/APIService.js";
export default {
  props: ["id"], // "id" has been passed as a prop when I import this file to its parent
  data() {
    return {
      article: {},
    };
  },
  created() {
    APIService.getArticle(this.id).then((response) => {
      this.article = response.data.article;
    });
    // .catch(error => {
    //   console.log("There was an error:", error.response);
    // });
  }
};
</script>

<style lang="css" scoped>
.main {
  text-align: left;
  margin-left: 50px;
}
</style>
