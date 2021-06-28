<template>
  <div class="main">
    <div class="buttons">
      <button class="previous" @click="prevArticle">
        <b-icon
          icon="arrow-left-square-fill"
          scale="1.3"
          style="margin-right: 10px"
        ></b-icon>
        Previous
      </button>
      <button class="next" @click="nextArticle">
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
export default {
  props: ["id"], // "id" has been passed as a prop when I import this file to its parent
  data() {
    return {
      article: {}
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData(id = this.id) {
      APIService.getArticle(id).then(response => {
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
    }
  }
};
</script>

<style lang="css" scoped>
.main {
  text-align: left;
  margin-left: 50px;
  margin-right: 50px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
/* .previous {
  justify-content: left;
}
.next {
  justify-content: right;
} */
</style>
