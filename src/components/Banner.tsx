import React from "react";
import { FaMagic } from "react-icons/fa";

export interface BannerProps {
    key: number;
    bannerTitle: string;
    bannerDescription: string;
  }

const Banner = ( { key, bannerTitle, bannerDescription }: BannerProps  ) => {
    return (
        <div className="w-full bg-first-color m-6 rounded-lg" key={key}>
                <h4 className="font-bold text-xl mb-2 flex justify-center items-center gap-4"><FaMagic/> {bannerTitle}</h4>
                <p className="text-center text-lg">{bannerDescription}</p>
        </div>
    );
  };
  
export default Banner;
