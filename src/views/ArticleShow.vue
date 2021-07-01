<template>
  <div class="main">
    <div class="buttons">
      <button class="btn-left" v-if="id > 1" @click="prevArticle">
        <b-icon
          icon="arrow-left-square-fill"
          scale="1.3"
          style="margin-right: 10px"
        ></b-icon>
        Previous
      </button>
      <button
        class="btn-right"
        v-if="id < $store.getters.totalArticles"
        @click="nextArticle"
      >
        Next
        <b-icon
          icon="arrow-right-square-fill"
          scale="1.3"
          style="margin-left: 10px"
        ></b-icon>
      </button>
    </div>
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
import { mapState } from "vuex";
export default {
  props: ["id"], // "id" has been passed as a prop when I import this file to its parent
  data() {
    return {
      article: {}
    };
  },
  computed: {
    ...mapState(["articles"])
  },
  mounted() {
    this.fetchData();
    if (this.articles == 0) {
      this.$store.dispatch("fetchArticles");
    }
  },
  methods: {
    fetchData(id = this.id) {
      APIService.getArticle(id).then((response) => {
        this.article = response.data;
      });
    },
    nextArticle() {
      const current = this.$route.params.id;
      const newId = Number(current) + 1;
      this.$router.push(`/articles/${newId}`);
      this.fetchData(newId);
    },
    prevArticle() {
      const current = this.$route.params.id;
      const newId = Number(current) - 1;
      this.$router.push(`/articles/${newId}`);
      this.fetchData(newId);
    },
  },
};
</script>

<style lang="css" scoped>
.main {
  text-align: left;
  margin-left: 50px;
  margin-right: 50px;
}
.buttons {
  margin: 30px auto;
  display: flex;
}
.btn-left {
  display: block;
  margin-right: auto;
}
.btn-right {
  display: block;
  margin-left: auto;
}
</style>
