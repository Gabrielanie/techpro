import React from "react";
import "../Attend/Style/attend.css";
import Attend2 from "../../../assets/images/attend 2.svg";
import AttendSmall from "../../../assets/images/attend2small.svg";
import Attend1 from "../../../assets/images/attend 1.svg";
import Box from "../../../assets/images/Box.svg";

function Attend() {
  return (
    <div className="px-6 py-12 md:px-12 main-attend ">
      <div className="attend-contents mt-10">
        <div className="header-container">
          <h5 className="text-center text-[34px] font-primary font-bold ">
            How to attend the{" "}
            <span className="text-center font-bold">BOOTCAMP</span>
          </h5>
          <p
            className="text-center font-primary "
            style={{ whiteSpace: "pre-line" }}
          >
            Ready to transform your tech journey? Simply visit our website,
            choose your preferred tech track, and secure your spot in our
            upcoming bootcamp.
            <br className="line-break" /> Join our immersive learning
            experience, connect with industry experts, and launch your tech
            career.
            <br className="line-break" /> Enroll now for a future filled with
            possibilities in tech
          </p>
        </div>
        <div className="flex px-20 py-12 justify-between attend-container">
          <div className="w-[60%] attend-inner">
            <div className=" w-[737px] p-5 flex h-[350px] attend attend-1">
              <div className="w-[60%] mt-[47px] attend-1-text">
                <h2 className="font-bold text-[28px] font-primary whitespace-nowrap mb-4">
                  Sign Up for the <span>Bootcamp</span>
                </h2>
                <p className="font-medium font-primary ">
                  sign up now for the TechProsNaija Bootcamp and embark on a
                  transformative journey to master cutting-edge skills and shape
                  your future in technology!
                </p>
                <button className=" w-[206px] h-[52px] px-5 py-3 mt-10 text-[40px] font-primary  rounded-md text-white button-4">
                  <a href="/register">Register</a>
                </button>
              </div>
              <div className="w-[40%] attend-image">
                <img src={Attend2} className="Attend-big" />
                <img src={AttendSmall} className="Attend-small" />
              </div>
            </div>
            <div className="flex mt-5 mr-2 attend-bootcamp">
              <div className="w-[50%]">
                <div className="w-[348px] h-[317px] attends">
                  <div className="p-5 ">
                    <img src={Box} className="mt-1" />
                    <h2 className="font-bold text-[28px] y font-primary  whitespace-nowrap mt-4">
                      Attend Bootcamp
                    </h2>
                    <p className="font-medium text-[16px] font-primary ">
                    For our already registered participants,check your mail for important updates and pre-boot camp information. Familiarize yourself with the schedules and await the bootcamp opening date.


                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="w-[348px] h-[317px] attends">
                  <div className="p-5 ">
                    <img src={Box} className="mt-1" />
                    <h2 className="font-bold text-[28px] font-primary whitespace-nowrap mt-4">
                      Grow in Learning
                    </h2>
                    <p className="font-medium text-[16px] font-primary">
                      As a tech career launchpad bootcamper, this learning
                      process offers you the opportunity to get skilled Up,
                      expand your knowledge and thrive in a competitive tech
                      environment. Your Journey into professional mastery starts
                      here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] select-payment">
            <div className=" w-[520px] h-[690px] attend attend-2">
              <div className="p-5  attend-2-text">
                <h2 className="font-bold text-[30px] font-primary whitespace-nowrap mt-3">
                  Select Payment Options
                </h2>
                <p className="mt-3 font-medium font-primary">
                Choose your preferred payment option; credit card, bank transfer, or other available methods on the remita platform.
                </p>
                <img src={Attend1} className="mt-20" />
              </div>
            </div>
          </div>
          <div className="flex mt-5 mr-2 attend-bootcamp-2">
            <div className="w-[50%] bootcamp-1">
              <div className="w-[348px] h-[317px] attends">
                <div className="p-5 ">
                  <img src={Box} className="mt-1" />
                  <h2 className="font-bold text-[28px] font-primary  whitespace-nowrap mt-4">
                    Attend Bootcamp
                  </h2>
                  <p className="font-medium text-[16px] font-primary ">
                  For our already registered participants,check your mail for important updates and pre-boot camp information. Familiarize yourself with the schedules and await the bootcamp opening date.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%] bootcamp-2">
              <div className="w-[348px] h-[317px] attends">
                <div className="p-5 ">
                  <img src={Box} className="mt-1" />
                  <h2 className="font-bold text-[28px] font-primary  whitespace-nowrap mt-4">
                    Grow in Learning
                  </h2>
                  <p className="font-medium text-[16px] font-primary ">
                    As a tech career launchpad bootcamper, this learning process
                    offers you the opportunity to get skilled Up, expand your
                    knowledge and thrive in a competitive tech environment. Your
                    Journey into professional mastery starts here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attend;
