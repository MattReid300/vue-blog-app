import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getArticles() {
    return apiClient.get("/articles");
  },
  getArticle(id) {
    return apiClient.get("/articles/" + id);
  },
  postArticle(article) {
    return apiClient.post("/articles", article);
  },
  nextArticle(id) {
    id = id + 1;
    return apiClient.get("/articles/" + id);
  },
  prevArticle(id) {
    id = id - 1;
    return apiClient.get("/articles/" + id);
  }
};

// export default {
//   methods: {
//     getArticle(id) {
//       const url = `${API_URL}/articles/`;
//       return axios.get(url + id);
//     }
//   }
// };
