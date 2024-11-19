import React from "react";
import "./banner.css";
const Banner = () => {
    return (
    <div className="carousel w-full lg:w-[1300px] lg:h-[600px] rounded-lg mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
        <img
            src="https://i.ibb.co/sV1w2r8/bear-lake-reflection-img-1.jpg"
            className="w-full md:w-[90%]md:mx-auto lg:w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
            ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
            ❯
            </a>
        </div>
        <div className="absolute bottom-36 left-32 md:bottom-64 md:left-80 lg:left-96 lg:right-96 flex flex-col items-center justify-center text-white">
                    <h2 className="md:text-2xl text-xl font-bold hover:text-blue-300 py-3 ">Mountain,Bear Lake,USA</h2>
                    <button className="btn bg-blue-500 hover:bg-green-300 hover:text-black mt-2">Learn More</button>
        </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img
            src="https://i.ibb.co/6vcSrqY/ocean-img-2.jpg"
            className="w-full"
            />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
            ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
            ❯
            </a>
            </div>

            <div className="absolute bottom-36 left-40 md:bottom-64 md:left-80 lg:left-96 lg:right-96 flex flex-col items-center justify-center text-white">
                    <h2 className="md:text-2xl text-xl font-bold hover:text-blue-300 py-3 ">Ocean Diving</h2>
                    <button className="btn bg-blue-500 hover:bg-green-300 hover:text-black mt-2">Learn More</button>
        </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/7kX9LzM/bangladesh-river-img-3.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute bottom-36 left-40 md:bottom-64 md:left-80 lg:left-96 lg:right-96 flex flex-col items-center justify-center text-white">
                    <h2 className="md:text-2xl text-xl font-bold hover:text-blue-300 py-3 ">River ,Bangladesh </h2>
                    <button className="btn bg-blue-500 hover:bg-green-300 hover:text-black mt-2">Learn More</button>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/DPXdsWd/farai-bangladesh-gazipur-img-4.jpgp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute bottom-28 left-36 md:bottom-64 md:left-80 lg:left-96 lg:right-96 flex flex-col items-center justify-center text-white">
                    <h2 className="md:text-2xl text-xl font-bold hover:text-blue-300 py-3 ">Safari,Bangladesh</h2>
                    <button className="btn bg-blue-500 hover:bg-green-300 hover:text-black mt-2">Learn More</button>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/q5GQbg4/img-3-bandarban.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute bottom-36 left-40 md:bottom-64 md:left-80 lg:left-96 lg:right-96 flex flex-col items-center justify-center text-white">
                    <h2 className="md:text-2xl text-xl font-bold hover:text-blue-300 py-3 ">River,Bangladesh</h2>
                    <button className="btn bg-blue-500 hover:bg-green-300 hover:text-black mt-2">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
