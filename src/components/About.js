function About(props) {
  return (
    <aside>
      <img src={props.src} alt="blog logo"></img>
      <p>{props.about}</p>
    </aside>
  );
}
About.defaultProps = {
  src: "https://via.placeholder.com/215",
};

export default About;
