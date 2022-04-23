import React from "react";
import SearchJobCard from "../common/SearchJobCard";
import PopularJob from "../common/PopularJob";
function JobsDetail() {
  return (
    <div className="bg-bodyColor pb-24 pt-5 md:pt-0">
      <div className="md:flex w-full justify-between  items-center px-6 md:px-20 py-3">
        <div className="md:w-8/12">
          <h1 className=" text-4xl  md:text-6xl font-semibold text-headingsColor ">
            Get most exciting job from all around the world here.
          </h1>
          <p className="text-urlColor text-xl mt-8">
            work with the largest network of independent professionals and get
            things done-from quick turn arounds to big transformations.{" "}
          </p>
         
          <div>
            <SearchJobCard />
          </div>
        </div>
        <div className="mt-16 md:mt-0">
          <PopularJob />
        </div>
      </div>
    </div>
  );
}

export default JobsDetail;
