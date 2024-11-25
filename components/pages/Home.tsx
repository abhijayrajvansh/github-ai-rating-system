import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto h-screen">
      <div className="mb-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Welcome to eValauate (mvp)!
        </h1>
        <p className="text-lg text-center text-gray-600">
          this is gorgeous landing page, lol
        </p>
      </div>
      <Link href={"/dashboard"}>
        <span className="text-blue-500 underline underline-offset-4 font-light">
          click here to goto dashboard
        </span>
      </Link>
    </div>
  );
};

export default Home;
