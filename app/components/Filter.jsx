import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const filterCard = {
  initial: {
    opacity: 0,
    x: -20,
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};
const mainfilter = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const Filter = ({ products, setFilterProduct, filterProduct }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [sort, setSort] = useState("none");
  const [order, setOrder] = useState("ascending");
  console.log(filterProduct);

  // Searching title on the fly and updating the filter list with combination of sort and order by logic .
  useEffect(() => {
    if (filterProduct && sort === "price" && order === "ascending") {
      const filterList = products?.filter((product) =>
        product.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
      const newList = filterList.toSorted((a, b) => a.price - b.price);
      setFilterProduct(newList);
    } else if (filterProduct && sort === "price" && order === "decending") {
      const filterList = products?.filter((product) =>
        product.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
      const newList = filterList.toSorted((a, b) => b.price - a.price);
      setFilterProduct(newList);
    } else {
      console.log("i m else");
      const filterList =
        products &&
        products.filter((product) =>
          product.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
      setFilterProduct(filterList);
    }
  }, [searchTitle]);

  // sorting and ordering the result on the fly if with combination of searchTitle passed or with all list logic.
  useEffect(() => {
    if (filterProduct && sort === "price" && order === "ascending") {
      const sorted = filterProduct.toSorted((a, b) => a.price - b.price);
      setFilterProduct(sorted);
    } else if (filterProduct && sort === "price" && order === "decending") {
      const sorted = filterProduct.toSorted((a, b) => b.price - a.price);
      setFilterProduct(sorted);
    } else if (products && sort === "price" && order === "ascending") {
      const sorted = products.toSorted((a, b) => a.price - b.price);
      setFilterProduct(sorted);
    } else if (products && sort === "price" && order === "decending") {
      const sorted = products.toSorted((a, b) => b.price - a.price);
      setFilterProduct(sorted);
    } else if ((searchTitle && sort === "none") || sort === "none") {
      const filterList = products?.filter((product) =>
        product.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
      setFilterProduct(filterList);
    }
  }, [sort, order]);

  return (
    <motion.div
      className="flex flex-col gap-y-4 lg:flex lg:flex-row lg:justify-around"
      variants={mainfilter}
      initial="initial"
      animate="final"
    >
      <div className="flex justify-between lg:flex lg:flex-row lg:items-center lg:gap-10">
        <motion.h3 className="text-xl font-medium" variants={filterCard}>
          Filter By Title:
        </motion.h3>
        <motion.input
          className="p-2 rounded-md  shadow-md"
          type="text"
          placeholder="Product Name Here !"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          variants={filterCard}
        />
      </div>
      <div className="flex justify-between lg:flex lg:flex-row lg:items-center lg:gap-10">
        <motion.h3 className="text-xl font-medium" variants={filterCard}>
          Sort By:
        </motion.h3>
        <motion.select
          className="p-2 rounded-md b shadow-md"
          name="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          variants={filterCard}
        >
          <option value="none" selected>
            None
          </option>
          <option value="price">Price</option>
        </motion.select>
      </div>
      <div className="flex justify-between lg:flex lg:flex-row lg:items-center lg:gap-10">
        <motion.h3 className="text-xl font-medium" variants={filterCard}>
          Order By:
        </motion.h3>
        <motion.select
          className="p-2 rounded-md border border-zinc-200 shadow-md "
          name="order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          variants={filterCard}
        >
          <option value="ascending">low-high</option>
          <option value="decending">high-low</option>
        </motion.select>
      </div>
    </motion.div>
  );
};

export default Filter;
