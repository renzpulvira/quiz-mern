import MainHeader from "../components/MainHeader";
import PostFilter from "../components/PostFilter";

function Home() {
  document.body.style.backgroundColor = "#333;";
  return (
    <div className="Home">
      <MainHeader />
      <PostFilter />
    </div>
  );
}

export default Home;
