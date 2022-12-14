import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { getProviders, signIn, useSession } from "next-auth/react";

function Signin({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <div className="bg-cover h-screen bg-neutral-900">
            <div className=" text-white flex flex-col items-center p-8">
              <div className="bg-white  bg-opacity-95 text-black h-[29.5rem] w-[22.5rem] sm:h-[40rem] sm:w-[29rem] mt-[3rem] shadow-2xl shadow-slate-400  rounded-3xl sm:p-9 p-10">
                <div className="flex flex-col items-center">
                  <h1 className="font-bold mt-5 text-3xl">SIGN IN FOR FREE</h1>
                  <p className="">Built for educational purposes only.</p>
                </div>
                <div className="flex flex-col items-center relative h-[20rem]">
                  <h1 className="text-[4rem] font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400">
                    FACEBOOK
                  </h1>
                  <h1 className="text-[4rem] font-bold absolute top-[7rem] text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-pink-500">
                    CLONE
                  </h1>
                </div>

                <div
                  onClick={() => {
                    signIn(provider.id, { callbackUrl: "/" });
                  }}
                  className="cursor-pointer flex flex-col items-center bg-neutral-800  p-3 rounded-3xl shadow-lg shadow-orange-200 hover:translate-y-[-3px]"
                >
                  <button className="flex items-center font-semibold text-lg text-orange-100">
                    <FaGoogle className="mr-3" />
                    Sign in with {provider.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default Signin;
