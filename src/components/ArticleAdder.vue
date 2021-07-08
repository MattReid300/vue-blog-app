<template>
  <div class="hello">
    <h2>Add a new blog post</h2>
    <form @submit.prevent="addArticle()">
      <label>Title:</label>
      <input type="text" v-model="title" />
      <label>Subtitle:</label>
      <input type="text" v-model="subtitle" />
      <label>Article Content:</label>
      <textarea v-model="content"></textarea>
      <label>Image:</label>
      <br />
      <button type="submit">Post</button>
      <!--This will take us to a page where we see the article in preview (not yet posted)-->
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "",
      subtitle: "",
      content: ""
    };
  },
  methods: {
    ...mapActions(["createArticle"]),
    addArticle() {
      let newArticle = Object.create(null);
      newArticle["title"] = this.title;
      newArticle["subtitle"] = this.subtitle;
      newArticle["content"] = this.content;
      this.createArticle(newArticle);
      this.title = "";
      this.subtitle = "";
      this.content = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input,
textarea {
  width: 100%;
}
.hello * {
  box-sizing: border-box;
}
.hello {
  margin: 20px auto;
  max-width: 750px;
}
@media screen and (max-width: 750px) {
  .hello {
    margin-right: 30px;
    margin-left: 30px;
  }
}
</style>
