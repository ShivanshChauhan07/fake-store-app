import Detail from "@/app/components/Detail";
import React from "react";

const DetailPage = ({ searchParams }) => {
  const { img, title, des } = searchParams;
  return (
    <div className="flex flex-col justify-center h-screen">
      <div>
        <Detail image={img} title={title} description={des} />
      </div>
    </div>
  );
};

export default DetailPage;
