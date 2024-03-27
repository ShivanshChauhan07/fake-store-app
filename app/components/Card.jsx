import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const card = {
  initial: {
    opacity: 0,
    y: 100,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const Card = ({ id, title, price, image, rating, description, category }) => {
  return (
    <motion.div
      className="card w-96 h-96 bg-base-100 shadow-xl"
      initial="initial"
      animate="final"
    >
      <motion.figure className="h-1/2" variants={card}>
        <img className="h-5/6" src={image} alt="Shoes" />
      </motion.figure>
      <div className="card-body">
        <motion.h2 className="card-title" variants={card}>
          {title}
        </motion.h2>
        <motion.div className="flex justify-between p-1" variants={card}>
          <p>${price}</p>
          <p>⭐{rating.rate}</p>
        </motion.div>
        <motion.div className="card-actions justify-end" variants={card}>
          <Link
            className="btn btn-primary text-white"
            href={{
              pathname: "/detail/" + id,
              query: {
                img: image,
                title: title,
                des: description,
              },
            }}
          >
            Show More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
