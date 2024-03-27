"use client";
import { URL } from "@/utils/constant/constant";
import useFetch from "@/utils/useFetch";
import React, { useState } from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Loading from "./loading";
import { motion } from "framer-motion";

const mainDivAnimation = {
  initial: {
    opacity: 0,
    x: -100,
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const cardAnimation = {
  initial: {
    opacity: 0,
    x: 10,
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 5,
      restDelta: 0.001,
    },
  },
};

const HomePage = () => {
  const products = useFetch(URL);
  const [filterProduct, setFilterProduct] = useState();

  return !products ? (
    <Loading />
  ) : (
    <div className="p-2">
      <div className="my-6">
        <Filter
          products={products}
          setFilterProduct={setFilterProduct}
          filterProduct={filterProduct}
        />
      </div>
      <motion.div
        className="rounded-lg shadow-inner shadow-black/15 h-fit p-2 flex justify-around flex-wrap gap-3"
        variants={mainDivAnimation}
        initial={"initial"}
        animate={"final"}
      >
        {filterProduct.length === 0 && (
          <h1 className="Text-xl font-semibold">No Result Found !</h1>
        )}
        {filterProduct
          ? filterProduct.map((product) => {
              return (
                <motion.div variants={cardAnimation}>
                  <Card key={product.id} {...product} />
                </motion.div>
              );
            })
          : products?.map((product) => {
              return (
                <motion.div variants={cardAnimation}>
                  <Card key={product.id} {...product} />
                </motion.div>
              );
            })}
      </motion.div>
    </div>
  );
};

export default HomePage;
