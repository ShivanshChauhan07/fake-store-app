"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Detail = ({ image, title, description }) => {
  return (
    <motion.div
      className="card mt-36 lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto lg:my-auto"
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 300, duration: 0.3 },
      }}
    >
      <figure className="max-h-96 w-full">
        <img className="h-96 w-72" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={"/"}>
            Go To Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
