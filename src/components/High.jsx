import React from "react";

const High = ({ d }) => {
  return (
    <main className="flex flex-col items-center p-12 content-center sm:flex-col md:flex-row-reverse ">
      <div className="1 flex flex-col pb-6 content-center items-center">
        <h1 className="font-bold text-3xl text-blue-500">{d.heading}</h1>
        <h1 align="center" className="text-slate-900 font-bold text-xl">
          {d.title}
        </h1>
        <p className="text-slate-500 py-2" align="center">
          {d.text}
        </p>
        <a href={d.url}>
          <button className="text-white bg-slate-800 rounded-lg p-4">
            {d.btn}
          </button>
        </a>
      </div>
      <div className="2">
        <img
          align="center"
          src={d.img}
          className="w-[auto]  cursor-pointer hover:-rotate-[20deg] duration-[700ms] transition  hover:scale-110 ease-in-out  h-[150px] sm:h[190px] md:h-[230px] lg:h-[260px] "
          alt="img"
        />
      </div>
    </main>
  );
};

export default High;
