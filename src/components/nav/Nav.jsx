import React, { useEffect, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import SGflag from "../../assets/vectors/singaporeflag.png";
import Eezeelogo from "../../assets/vectors/eezeelogo.png";
import Carticon from "../../assets/vectors/carticon.png";
import {BsCart} from "react-icons/bs";
import {RiLogoutBoxRLine} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();
  const [sessionItems, setSessionItems] = useState(0);

  // Use session storage to save cart items temporarily, acts like a Vuex store
  useEffect(() => {
    let cartItems = sessionStorage.getItem("cartItems");
    if (cartItems) {
      setSessionItems(cartItems);
    } else {
      setSessionItems(0);
    }
  }, []);
  return (
    <section id="Nav">
      <div className="flex flex-row flex-wrap w-full bg-b1 px-[120px] text-w1">
      <span className="font-type4 mt-2 text-[32px]">Learn4Fund</span>
      
      <div className="flex flex-col w-full bg-b1 items-center my-2">
      <div className="flex flex-row flex-wrap w-full justify-between mb-2">
      <div className="flex w-1/2">
        <span className="font-type1 text-[24px]">Hi, User</span>
      </div>
      <div className="flex w-1/2 justify-end">
      <div className="flex flex-row flex-wrap h-[22px] ml-[32px]">
            <img className="w-[24px] h-[24px] mr-[8px] bg-w1" style={{borderRadius: '100%'}} />
            <p className=" h-[22px] font-normal leading-[22px] font-roboto">
              Profile
            </p>
          </div>
          <div className="flex flex-row flex-wrap  h-[22px] ml-[32px]">
            <BsCart className="w-[18px] h-[18px] mr-[8px] self-center" />
            <p className=" h-[22px] text-[14px] font-normal leading-[22px] font-roboto">
              Cart
            </p>
          </div>
          
          <div className="flex flex-row flex-wrap  h-[22px] ml-[32px]">
            <RiLogoutBoxRLine className="w-[18px] h-[18px] mr-[8px]  self-center" />
            <p className=" h-[22px] text-[14px] font-normal leading-[22px] font-roboto">
              Logout
            </p>
          </div>
      </div>
        </div>

        <div className="flex flex-row flex-wrap w-full">

            <div className="flex flex-row flex-wrap w-[91px] h-[22px]">
            <img
              src={SGflag}
              className="w-[20px] h-[14px] top-[4px] mr-[8px] self-center"
              alt={""}
            />
            <p className="flex w-[63px] h-[22px] left-[28px] text-[14px] font-normal leading-[22px] font-roboto">
              Singapore
            </p>
          </div>
          <div className="flex flex-row flex-wrap w-[120px] h-[22px] ml-[32px]">
            <AiOutlinePhone className="w-[18px] h-[18px] mr-[8px] self-center" />
            <p className="w-[94px] h-[22px] text-[14px] font-normal leading-[22px] font-roboto">
              +65 9797 9797
            </p>
          
          </div>
        </div>
        

      </div>
      </div>
      {/* <div className="flex flex-wrap w-full h-[119px] border-b-[1px] border-[#D7D8DB] bg-[#FFFFFF]">
        <div className="flex flex-row w-full h-[80px] justify-between items-center mx-[120px]">
          <img
            src={Eezeelogo}
            className="w-[150px] h-[44px]"
            alt={""}
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="flex flex-col w-[40px] h-[60px] self-start items-center justify-center">
            <div className="relative h-[40px] w-[40px] mt-[14px]">
              <span className="absolute top-0 right-[-8px] w-[20px] h-[20px] rounded-[22px] bg-[#2A64DB] font-normal text-[12px] leading-[20px] text-[#FFFFFF] text-center top-[6px] font-roboto">
                {sessionItems}
              </span>
            </div>
            <img
              src={Carticon}
              className="w-[40px] h-[40px] mt-[14px]"
              alt={""}
            />

            <div className="w-[24px] h-[20px] text-[12px] leading-[20px] text-center text-[#55585D] font-bold font-roboto">
              Cart
            </div>
          </div>
        </div>
        <div className="flex w-full h-[38px] mx-[120px] items-center">
          <Link
            to="/brands"
            className="cursor-pointer w-[97px] h-[22px] font-normal text-[14px] leading-[22px] text-[#2A64DB] font-roboto"
          >
            View All Brands
          </Link>
        </div>
      </div> */}
    </section>
  );
}

export default Nav;
