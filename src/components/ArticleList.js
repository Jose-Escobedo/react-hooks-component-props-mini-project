import Article from "./Article";
function ArticleList(props) {
  const articleArray = props.data.map((post) => {
    return (
      <Article
        key={post.id}
        articleTitle={post.title}
        articleDate={post.date}
        articlePreview={post.preview}
      />
    );
  });
  return <main>{articleArray}</main>;
}

export default ArticleList;
