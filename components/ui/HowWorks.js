import React from "react";
import RegisterYourAccount from "../RegisterYourAccount";
function HowWorks() {
  return (
    <div className="  w-full justify-between text-center items-center mt-32 md:mt-20 px-6 md:px-20">
      <div className="bg-shortlistBg px-8 py-3 mb-10 w-fit mx-auto rounded-3xl">
        <button className="text-activeButton">How it works</button>
      </div>
      <div>
        <h1 className="text-4xl  md:text-5xl font-semibold text-headingsColor">
          Easy step to get your dream job
        </h1>
        <p className="text-urlColor text-xl mt-8">
          We ensure your next step is a step forward. That's why we built a jobs
          <br />
          marketplace that cut off the boring processes
        </p>
      </div>
      <div className="md:flex mt-20">
        <RegisterYourAccount
          url="../assets/icons/user.svg"
          title="Register your account"
          desc="By registring an account, you can use our basic feature for find
                  hundreds of existing jobs"
        />
        <RegisterYourAccount
          url="../assets/icons/pre.svg"
          title="select your preference"
          desc="Discover jobs most relevant to you by Experience level, salary, location, job type etc."
          filter
        />
        <RegisterYourAccount
          url="../assets/icons/user.svg"
          title="Do the interview"
          desc="Almost done from from quick turn arounds to big transformations with your dream dream   job."
        />
      </div>
    </div>
  );
}

export default HowWorks;
