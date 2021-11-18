import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 7,
    title: "Cookie Jam",
    description: "Best cookie jam in town!",
  },
  {
    id: "p2",
    price: 4,
    title: "Strawberry Jam",
    description: "Best strawberry jam in town!",
  },
  {
    id: "p3",
    price: 8,
    title: "Grape Jam",
    description: "Best grape jam in town!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
