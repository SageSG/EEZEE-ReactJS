import React from "react";
import { BsDiscord, BsLinkedin, BsTelegram } from "react-icons/bs";
import {BiDonateHeart} from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import {HiOutlineMailOpen} from "react-icons/hi";
import logo from "../../assets/vectors/networking.png";

function Footer() {
  return (
    <footer id="Footer">
      <div className="flex flex-row flex-wrap bg-b2 py-4">
        <div className="flex-none w-1/3 order-none grow-0 space-y-4 self-center">
        <div className="flex flex-row w-full text-w1 justify-center hover:text-[cyan]">
            <HiOutlineMailOpen className="self-center    mr-4"/><u>Subscribe to Newsletter for more deals</u>
          </div>
        <div className="flex flex-row w-full text-w1 justify-center">
            <button className="flex bg-b1 p-4 rounded-lg hover:text-[red] hover:bg-w1"><BiDonateHeart className="self-center mr-4"/>Make a Donation</button>
          </div>
        
          <div className="flex justify-center text-w1 text-center px-8">
          The Titans community has raised over SGD$1,000,000 and donated courses to the underpriviledged in Singapore since 2019.
          </div>
          
          
        </div>
        <div className="flex flex-wrap w-1/3 align-center order-1 grow-0 justify-center">
          <div className="flex flex-col w-full h-3/4 justify-center items-center">
          <img src={logo} className="flex h-[50px] stroke-w1 self-center" alt="Teamwork icons created by Becris - Flaticon"/>

            <span className="text-w1 font-type4 mt-2">Learn4Fund</span>
            <span className="text-w1 font-type5">Titans</span>
          </div>
          <div className="flex flex-row w-full justify-center p-2 gap-2 text-white bg-b2 self-center">
        <a
          href="#"
          className="hover:text-[cyan]"
        >
          <BsLinkedin />
        </a>
        <a href="#" className="hover:text-[cyan]">
          <BsTelegram />
        </a>
        <a
          href="#"
          className="hover:text-[cyan]"
        >
          <BsDiscord />
        </a>
        <a href="#" className="hover:text-[cyan]">
          <FaGithub />
        </a>
      </div>
        </div>
        <div className="flex-none w-1/3 order-2 grow-0 text-w1 space-y-4 self-center">
        <div className="flex-none justify-center text-w1 text-center">
          <b>Purpose & Mission</b>
        <div className="flex justify-center text-w1 text-center text-[12px] mt-2 px-4">
            At Learn4Fund, we are dedicated to providing you with the best
            possible service. We are committed to protecting your privacy and
            security. We will only use the information we collect about you
            lawfully (in accordance with the Data Protection Act 1998).
          </div>
          </div>
            <div className="flex w-full text-[12px] text-center justify-evenly">
          <b>Terms and conditions</b>
                <div className="hover:text-[cyan]"><span className="px-4">&#8226;</span>Terms of Service</div>
                <div className="hover:text-[cyan]"><span className="px-4">&#8226;</span>Legal Notices</div>
          </div>
            <div className="flex w-full text-[12px] text-center justify-evenly">
            <b>User Policies</b>
                <div className="hover:text-[cyan]"><span className="px-4">&#8226;</span>Privacy Policy</div>
                <div className="hover:text-[cyan]"><span className="px-4">&#8226;</span>Cookie Policy</div>
          </div>
        </div>
      </div>

      
      <div className="flex w-full text-white justify-center bg-b2 py-[8px]">
        <small>&copy; Titans. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
