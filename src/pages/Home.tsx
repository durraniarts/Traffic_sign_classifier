import { UploadImage } from "@/components/Dropzone";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ imageData, setImageData }: any) => {
  const navigate = useNavigate();
  console.log(imageData);
  const uploadImg = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        body: JSON.stringify({ data: imageData }),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });
      const data = await res.json();
      //   console.log(data);
      //     const data_string_rejoin = data.toString().split(" ");
      //   console.log(data.toString().split(" "));
      navigate(`/sign/${data}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <section
        style={{ color: "white" }}
        className="flex w-full   gap-6 items-center"
      >
        <div className="flex basis-1/2 flex-col  p-10  gap-12">
          <div className=" flex flex-col gap-4">
            <h1 className="w-fit h-fit  text-4xl  poetsen-one-regular">
              Recognize your Desired Traffic Sign
            </h1>
            <p className="w-3/4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ab voluptas beatae modi ullam quas sequi sit placeat eaque cumque
              deleniti porro, repellat dolorum rem necessitatibus quod vitae
              optio aliquid?
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate("/explore-all-signs")}
              className="w-3/4 bg-white border border-white text-black p-3 rounded-lg font-bold text-lg hover:bg-transparent hover:border-zinc-700 hover:border hover:text-white transition "
            >
              Explore All Signs
            </button>
          </div>
        </div>
        <div className="flex basis-1/2 flex-col gap-6 bg-black border border-zinc-700 rounded-xl p-10 h-[500px]">
          <div className="h-full flex flex-col justify-between">
            <UploadImage setImageData={setImageData} imageDate={imageData} />
            <button
              className="w-full bg-transparent border border-zinc-700 text-white p-3 rounded-lg font-bold hover:bg-white text-lg  hover:border-white hover:border hover:text-black transition "
              onClick={uploadImg}
            >
              Analyze{" "}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
