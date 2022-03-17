import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData.name);

function App(props) {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About src={blogData.image} about={blogData.about} />
      <ArticleList data={blogData.posts} />
    </div>
  );
}

export default App;
