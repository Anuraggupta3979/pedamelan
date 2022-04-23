import React from "react";
import PeopleOutlineSharpIcon from "@mui/icons-material/PeopleOutlineSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function PopularJobCard(props) {
  return (
    <div className="card">
      <div className="flex  align-center">
        <div className="rounded-lg mt-auto mb-auto bg-bodyColor p-1">
          {props.icon}
        </div>
        <div className="ml-3">
          <p className="text-lg text-headingColor">{props.title}</p>
          <p className="text-sm text-description">{props.subHeading}</p>
        </div>
      </div>
      <div className="flex  justify-between mt-5">
        <div className="text-people my-auto">
          <PeopleOutlineSharpIcon /> {props.applied} People applied
        </div>
        {props.opened ? (
          <div className="bg-openButtonBg px-2 py-1 my-auto rounded-md">
            <button className="text-openButton">Opened</button>
          </div>
        ) : (
          <div className="bg-shortlistBg px-2 py-1 my-auto rounded-md">
            <button className="text-activeButton">Shortlistened</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopularJobCard;
