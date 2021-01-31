import MainHeader from "../components/MainHeader";
import PostFilter from "../components/PostFilter";
import Posts from "../components/Posts";

function Home() {
  document.body.style.backgroundColor = "#333;";
  return (
    <div className="Home">
      <MainHeader />
      <div className="postsContainer" style={{ marginTop: 75 + "px" }}>
        <PostFilter />
        <Posts />
      </div>
    </div>
  );
}

export default Home;
