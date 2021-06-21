import Vue from "vue";
import Vuex from "vuex";
import APIService from "@/APIService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showAddArticleLink: false,
    moderatorPassword: "letmepass",
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
    }
  },
  actions: {
    removeArticle: (context, article) => {
      context.commit("REMOVE_ARTICLE", article);
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
  modules: {}
});
