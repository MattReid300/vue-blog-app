<template>
  <div id="hello" class="needs-validation" novalidate>
    <h2>Add a new blog post</h2>
    <form @submit.prevent="addArticle()">
      <label>Title:</label>
      <input type="text" v-model="title" required />
      <div class="invalid-feedback">Please fill in all fields!</div>
      <label>Subtitle:</label>
      <input type="text" v-model="subtitle" required />
      <div class="invalid-feedback">Please fill in all fields!</div>
      <label>Article Content:</label>
      <textarea v-model="content" required></textarea>
      <div class="invalid-feedback">Please fill in all fields!</div>
      <br />
      <br />
      <div class="valid-feedback">
        Your article has been creatd successfully
      </div>
      <button type="submit" style="background-color: lawngreen; width: 100%">
        Post
      </button>
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
      alert("Your article has been created successfully");
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
#hello * {
  box-sizing: border-box;
}
#hello {
  margin: 20px auto;
  max-width: 750px;
}
@media screen and (max-width: 750px) {
  #hello {
    margin-right: 30px;
    margin-left: 30px;
  }
}
</style>
