import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const label_mapping: any = {
  airport: { title: "Airport ", description: "Airport ahead" },
  Animal_Crossing_Sign: 1,
  "Bridge Ahead": 2,
  Bus_Stop: 3,
  "Cross Roads": 4,
  Danger_Ahead: 5,
  Dense_Ahead: {
    title: "Dense Ahead ",
    description:
      "Dense ahead, Which you might say bump. Which Might cause due to heavy rains or land sliding or maybe some other causes.",
  },

  Dinning_Place: 7,
  DownHeal_Step: 8,
  "Give Way": 9,
  Go_Straight_ahead: 10,
  Hospital: 11,
  Land_Sliding: 12,
  "Left bend": 13,
  MotorWay_Start: 14,
  "No entry for Bikes": 15,
  "No entry for car": 16,
  "No entry for Cycles": 17,
  "No entry for Goods vehicle": 18,
  "No entry for hand crafts": 19,
  "no entry for vehical more than 16.6 feet": 20,
  "No Entry Vehicle weight 70 ton": 21,
  "No Horns": 22,
  "No left turn": 23,
  "No Mobile Allowed": 24,
  "No Overtaking": 25,
  "No Parking": 26,
  "No right turn": 27,
  "No U-Turn": {
    title: "No U Turn Ahead ",
    description:
      "Dense ahead, Which you might say bump. Which Might cause due to heavy rains or land sliding or maybe some other causes.",
  },
  "no walking for pedistrians": 29,
  "No_Entry for aniamal vehicle": 30,
  "One Way ROad": 31,
  "parking on left": 32,
  Pedestrians: 33,
  "petrol pump 3": 34,
  "Railway Crossing": 35,
  "Right bend": 36,
  "right turn": 37,
  "road crossing": 38,
  "Road Divides": 39,
  "Roundabout Ahead": 40,
  "Sharp Right Turn": 41,
  Slow: 42,
  "Speed Breaker Ahead": 43,
  "Speed Limit (20 kmph)": 44,
  "Speed Limit (25 kmph)": 45,
  "Speed Limit (30 kmph)": 46,
  "Speed Limit (40 kmph)": 47,
  "Speed Limit (45 kmph)": 48,
  "Speed Limit (50 kmph)": 49,
  "Speed Limit (60 kmph)": 50,
  "Speed Limit (65 kmph)": 51,
  "Speed Limit (70 kmph)": 52,
  "Speed Limit (80 kmph)": 53,
  "Steep Descent": 54,
  Stop: 55,
  "two way traffic 2": 56,
  "uphill steep": 57,
  "U-Turn": 58,
  "Zigzag Road Ahead": 59,
};

const Content = ({ imageData }: any) => {
  const [base_url, setUrl] = useState<any | undefined>();
  const [text, setText] = useState({ title: "", description: "" });
  const { name } = useParams();
  console.log(label_mapping[`${name}`]);
  useEffect(() => {
    imageData && localStorage.setItem("imageBase64", imageData[0].data_url); // Save to localStorage
    setUrl(localStorage.getItem("imageBase64"));
    setText({
      title: label_mapping[`${name}`].title,
      description: label_mapping[`${name}`].description,
    });
    console.log(text);
  }, []);
  //   if (name && name in label_mapping) {
  //     text.title === "" &&
  //       text.description === "" &&

  //   }

  return (
    <div className="w-3/4 h-[300px] bg-black border border-zinc-700 rounded-lg p-6 flex gap-12 justify-between">
      <div className="w-fit basis-2/5 h-full rounded-md border border-zinc-700 flex justify-center">
        <img
          src={base_url && base_url}
          className="h-full w-auto object-cover object-center "
        />
      </div>
      <div className="flex basis-3/5 flex-col gap-6">
        <h1 className="h-fit text-4xl">{text.title}</h1>
        <p className="text-lg text-white ">{text.description}</p>
      </div>
    </div>
  );
};

export default Content;
