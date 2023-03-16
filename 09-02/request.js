const api = axios.create({
  baseURL: "https://dummyjson.com",
});

api.get("post/user/9").then((res) => {
  $("h1").text(res.data.posts[0].title);
  $("p").text(res.data.posts[0].title);

  
});
