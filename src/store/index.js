import Vue from "vue";
import Vuex from "vuex";
import APIService from "@/APIService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showAddArticleLink: false,
    adminPassword: "letmepass",
    showDeleteButton: false,
    articles: []
  },
  mutations: {
    DISPLAY_ADD_ARTICLE_LINK: state => {
      state.showAddArticleLink = true;
    },
    SET_ARTICLES: (state, articles) => {
      state.articles = articles;
    },
    ADD_ARTICLE: (state, article) => {
      state.articles.push(article);
    },
    REMOVE_ARTICLE: (state, article) => {
      state.articles.splice(article, 1);
    },
    IS_ADMIN: (state, password) => {
      if (password == state.adminPassword) {
        state.isAdmin = true;
      } else alert("Wrong password, try again");
    }
  },
  actions: {
    removeArticle: ({ commit }, id) => {
      return APIService.removeArticle(id).then(() => {
        commit("REMOVE_ARTICLE", id);
      });
    },
    createArticle({ commit }, article) {
      return APIService.postArticle(article).then(() => {
        commit("ADD_ARTICLE", article);
      });
    },
    fetchArticles({ commit }) {
      APIService.getArticles().then(response => {
        commit("SET_ARTICLES", response.data);
      });
      // .catch(error => {
      //   console.log("There was an error" + error.response);
      // });
    }
  },
  getters: {
    totalArticles: state => state.articles.length
  },
  modules: {}
});
