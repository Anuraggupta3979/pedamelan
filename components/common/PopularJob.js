import React from "react";
import PopularJobCard from "./PopularJobCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function PopularJob() {
  return (
    <div>
      <div className="bg-popularJobMainCard p-3 rounded-xl h-[470px] ">
        <div className="text-lg text-white text-center bg-popularjobBtn px-10 py-3 rounded-xl mt-3 mb-5">
          <button>Popular Job</button>
        </div>

        <PopularJobCard
          title="Senior Website Developer"
          subHeading="WhatsApp Inc."
          icon={<WhatsAppIcon className=" w-10 h-10 text-whatsapp " />}
          applied="55"
          opened
        />
        <PopularJobCard
          title="Fullstack Website Developer"
          subHeading="Instagram Inc."
          icon={<InstagramIcon className=" w-10 h-10 text-activeButton " />}
          applied="33"
        />
        <PopularJobCard
          title="Frontend Website Developer"
          subHeading="LinkedIn Inc."
          icon={<LinkedInIcon className=" w-10 h-10 text-openButton " />}
          applied="55"
          opened
        />
      </div>
    </div>
  );
}

export default PopularJob;
