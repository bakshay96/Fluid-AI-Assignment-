import Movie from "../components/Movie";
import InputSearch from "../components/InputSearch";

const Home = () => {
  return (
    <>
      <div className="container">
        
        <InputSearch />
        <Movie />
      </div>
    </>
  );
};

export default Home;