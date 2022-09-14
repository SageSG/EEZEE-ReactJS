import React from "react";

function ChangePassword() {
  return (
    <div className="flex flex-row flex-wrap w-full bg-w1 rounded m-8 p-8 content-start">
      <span className="flex w-full font-type1 text-[20px] font-bold">
        Change Password
      </span>
      <p className="flex w-full">
        For your account's security, do not share your password with anyone else
      </p>
      <span className="h-[2px] bg-[black] w-full my-2" />

      <div className="flex-row flex-nowrap w-full space-y-2 p-2">
        <div className="flex w-full">
          <div className="self-center px-2 w-[200px]">
            <b>New Password</b>
          </div>
          <input className="input" type="password" placeholder="new password"/>
        </div>
        <div className="flex w-full">
          <div className="self-center px-2 w-[200px]">
            <b>Confirm Password</b>
          </div>
          <input className="input" type="password" placeholder="confirm password"/>
        </div>
        <div className="flex w-full">
          <div className="self-center px-2 w-[200px]">
            <b>Verification Code</b>
          </div>
          <input className="input" type="password" placeholder="OTP"/>
          <button className="btn mx-4">Generate </button>
        </div>
        <div className="flex w-full">
          <button className="btn bg-black mt-8">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
