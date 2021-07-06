<template>
  <div>
    <b-button v-b-toggle.sidebar-1 id="sidebar-btn">
      <b-icon icon="list"></b-icon> Options
    </b-button>
    <b-sidebar id="sidebar-1" title="Options" shadow>
      <div class="px-3 py-2">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About </router-link>
          <router-link to="/articleadder" v-if="showAddArticleLink"
            >Add Article</router-link
          >
        </div>
        <b-dropdown id="dropdown-1" text="I'm an Administrador" class="m-md-2">
          <label><b>Password:</b></label>
          <div style="display: flex; flex-direction: row">
            <b-input type="text" v-model="inputPassword" style="width: 12rem">
            </b-input>
            <b-button @click="PasswordCheck()">Check</b-button>
          </div>
        </b-dropdown>
        <p>(Password: "letmepass")</p>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputPassword: "",
      showAddArticleLink: this.$store.state.showAddArticleLink
    };
  },
  methods: {
    PasswordCheck() {
      if (this.inputPassword == this.$store.state.adminPassword) {
        this.displayArticleAdder();
      } else alert("Wrong password, try again");
    },
    displayArticleAdder() {
      this.$store.commit("DISPLAY_ADD_ARTICLE_LINK");
    }
  }
}
</script>

<style lang="css" scoped>
#sidebar-btn {
  color: black;
  background-color: rgb(230, 230, 230);
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 20px;
}

#nav a {
  color: black;
}

#nav a.router-link-exact-active {
  color: gray;
}
</style>
