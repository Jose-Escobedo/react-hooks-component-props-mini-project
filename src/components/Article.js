function Article(props) {
  return (
    <article>
      <h3>{props.articleTitle}</h3>
      <small>{props.articleDate}</small>
      <p>{props.articlePreview}</p>
    </article>
  );
}

export default Article;
// {/* <small>{post.date}</small>
// <p>{post.preview}</p> */}
Article.defaultProps = {
  articleDate: "January 1, 1970",
};
