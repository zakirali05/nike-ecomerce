import react from "react";
const Popular = ({ array }) => {
  return (
    <>
      <div
        align="center"
        className="title  text-slate-800 font-bold text-3xl md:text-4xl"
      >
        {array.title}
      </div>
      <div
        align="center"
        className="wrapper grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
      >
        {array?.items?.map((arr, isp) => {
          return (
            <div
              className={`bg-gradient-to-r ${arr.color} ${
                arr.shadow
              } my-8 mx-6 cursor-pointer  duration-[700ms]  transition  hover:scale-110 ease-in-out  rounded-md p-6 flex-col flex  items-center justify-center ${
                isp ? "flex flex-row justify-between" : "flex-col"
              }`}
            >
              <div className="w1 pb-2 flex flex-col items-center content-center">
                <h1 className="text-xl text-white/90 font-bold">{arr.title}</h1>
                <h1 className="text-lg text-white/80 ">{arr.text}</h1>
                <div className="pr pb-2 flex w-[7rem] items-center justify-between">
                  <button className="bg-white/90 p-1 rounded-lg ">
                    ${arr.price}
                  </button>
                  <h1 className="text-white">*{arr.rating}</h1>
                </div>
                <button className="bg-white/90  rounded-md p-2  hover:scale-110">
                  {arr.btn}
                </button>
              </div>
              <div className="w2">
                <img
                  src={arr.img}
                  className={`w-[auto]  cursor-pointer  duration-[700ms] transition  hover:scale-110 ease-in-out  h-[130px] sm:h[170px] md:h-[200px] lg:h-[200px]`}
                  alt="img"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Popular;
