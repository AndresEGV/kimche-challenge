import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
        <div className="flex container mx-auto">
          <h1 className="font-bold text-xl text-indigo-900">Countries</h1>
          <div className="ml-auto font-medium"></div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Home;
