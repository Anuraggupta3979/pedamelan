import React from "react";

function RegisterYourAccount(props) {
  return (
    <div className="bg-bodyColor registerCard md:m-4 overflow-visible mt-8">
      <div className="rounded-full w-24 m-auto  my-10 bg-[#edf7fb]">
        <img
          src={props.url}
          className="rounded-full w-24 m-auto  my-10 p-4"
          alt="Avatar"
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold  md:text-2xl  text-headingsColor">
          {props.title}
        </h1>
        <p className="text-urlColor text-xl mt-10">{props.desc}</p>
      </div>
      <div className="md:px-8 my-10 ">
        {props.filter ? (
          <div className="card">
            <div className="bg-shortlistBg px-2 py-1 my-auto rounded-md">
              <button className="text-activeButton">Create YOur Account</button>
            </div>
            <p className="text-urlColor ml-2 mt-8 mb-3 text-left">
              Experience Level
            </p>
            <div className=" flex justify-between w-full  ">
              <div className="flex">
                <input
                  type="checkbox"
                  className=" m-auto text-left px-6 "
                  placeholder="Enter your full name "
                />
                <p className=" text-left text-sm md:text-base  ml-2 font-semibold text-headingsColor">
                  Entry Level
                </p>
              </div>
              <div>
                <p className="text-urlColor text-sm md:text-base ">255 jobs</p>
              </div>
            </div>{" "}
            <div className=" flex justify-between w-full  ">
              <div className="flex">
                <input
                  type="checkbox"
                  className=" m-auto text-left px-6 "
                  placeholder="Enter your full name "
                />
                <p className=" text-left text-sm md:text-base ml-2 font-semibold text-headingsColor">
                  Intermediate
                </p>
              </div>
              <div>
                <p className="text-urlColor text-sm md:text-base">124 jobs</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="bg-shortlistBg px-2 py-1 my-auto rounded-md">
              <button className="text-activeButton">Create YOur Account</button>
            </div>
            <p className="text-urlColor ml-2 mt-8 mb-3 text-left">Full Name</p>
            <div className="  w-full bg-bodyColor">
              <input
                type="text"
                className="inputName justify-center px-6 py-2  order-2"
                placeholder="Enter your full name "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterYourAccount;
