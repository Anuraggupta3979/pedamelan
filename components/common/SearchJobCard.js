import React from "react";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
function SearchJobCard() {
  return (
    <div className="searchCard">
      <div className="flex  justify-between align-center">
        <div className="text-lg text-headingColor">
          <p className="text-lg text-headingColor">Search Job</p>
        </div>
        <div>
          <p className="text-lg text-openButton">
            <BookmarkAddedIcon />
            Save Search
          </p>
        </div>
      </div>
      <div className="flex  justify-between mt-8">
        <div className=" w-full bg-bodyColor mr-2">
          <input
            type="search"
            className="search justify-center px-6 py-2  order-2"
            placeholder="eg. UI Designer "
          />
        </div>
        <div className="  w-full bg-bodyColor ml-2">
          <input
            type="search"
            className="SearchLocation justify-center px-6 py-2  order-2"
            placeholder="Location "
          />
        </div>
      </div>
      <div className="text-lg text-white text-center bg-activeButton px-10 py-3 rounded-xl mt-8">
        Search Job
      </div>
    </div>
  );
}

export default SearchJobCard;
