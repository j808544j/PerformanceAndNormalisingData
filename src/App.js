import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./slice";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products[0]);
  useEffect(
    () => {
      dispatch(fetchProducts());
    },
    [dispatch],
    state
  );

  if (state) {
    return (
      <div className="App">
        {state.map((product) => (
          <li key={product.id}> {product.title} </li>
        ))}
      </div>
    );
  }
}
