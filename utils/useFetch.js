import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [products, setProducts] = useState(null);
  const apiFetch = async () => {
    const raw = await fetch(URL);
    const data = await raw.json();
    setProducts(data);
  };
  // console.log(products);
  useEffect(() => {
    apiFetch();
  }, []);

  return products;
};

export default useFetch;
