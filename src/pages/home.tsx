import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="afdkofiodf"
          name="Apple 2023 MacBook Pro"
          price={399900.0}
          stock={435}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/618d5bS2lUL._SL1500_.jpg"
        />
        <ProductCard
          productId="disofdsof"
          name="Apple 2023 Mac Mini Desktop"
          price={119900.0}
          stock={265}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/61jup8h--XL._SL1500_.jpg"
        />
        <ProductCard
          productId="afdkoffedefodf"
          name="Canon EOS R3 Full-Frame Mirrorless Camera"
          price={514990.0}
          stock={95}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/71Lel5-07RL._SL1500_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
