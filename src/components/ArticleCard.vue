<template>
  <div>
    <router-link
      class="article-link"
      :to="{ name: 'ArticleShow', params: { id: article.id } }"
    >
      <!-- :article="this.article" -->
      <div class="article-box">
        <h3>{{ article.title }}</h3>
        <h5 style="color: gray">{{ article.subtitle }}</h5>
        <button id="deleteBtn" v-if="isAdmin" @click="deleteArticle">
          Delete
        </button>
      </div>
    </router-link>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  // computed: {
  //   ...mapState(["articles"])
  // },
  props: {
    article: Object
  },
  methods: {
    deleteArticle() {
      this.$store.dispatch("removeArticle", this.article.id);
    }
  }
};
</script>

<style lang="css" scoped>
.article-box {
  padding: 30px;
  margin-bottom: 15px;
  border: solid black 1px;
}
.article-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
#deleteBtn {
  background-color: red;
}
</style>
