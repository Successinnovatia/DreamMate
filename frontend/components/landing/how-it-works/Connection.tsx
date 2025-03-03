import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Connection() {

  return (
    <section className="flex flex-col justify-center items-center pt-10 pb-14 space-y-4 rounded-md bg-white mx-2">
      <div>
        <h1 className="font-serif text-xl md:text-2xl font-bold text-center">
          Make a Connection{" "}
        </h1>
        <p className="text-center text-[#4F4D55] w-5/6 md:w-2/3 mx-auto">
          {"As a premium user, you'll gain access to special features like direct invites to DreamMate’s luxury events and exclusive networking opportunities. "}
        </p>
      </div>

      <div className="flex flex-col items-center md:items-stretch justify-center md:flex-row w-full md:w-5/6 lg:w-3/4 space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex flex-col w-5/6 md:w-1/2 items-center py-6 px-4 bg-[#F3FDFF]">
          <DotLottieReact
            src="https://lottie.host/55404a74-bae3-4862-a13e-dd690bd842c8/nryresuFDH.lottie"
            className="w-36 h-36"
            loop
            autoplay
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-secondary lg:text-xl font-serif font-bold text-center">
              Send a Wink or Message
            </h3>
            <p className="text-center text-[#4F4D55] ">
              Once your profile is set, DreamMate’s AI-driven matchmaking
              algorithm will suggest potential partners based on shared values,
              lifestyle aspirations, and personal goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-5/6 md:w-1/2 py-6 px-4  bg-[#F6FDEF] items-center">
          <DotLottieReact
            src="https://lottie.host/1507194e-9faa-49c0-9a86-c82ed6f23e59/gIG8dPDu7X.lottie"
            className="w-36 h-36"
            loop
            autoplay
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-secondary lg:text-xl font-serif font-bold text-center">
            Advanced Messaging for Premium Userssage
            </h3>
            <p className="text-center text-[#4F4D55] ">
            Upgrade to DreamMate Premium to enjoy unlimited messaging, video calls, and personalized introductions. Premium members can also see when their messages are read, ensuring smooth communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
