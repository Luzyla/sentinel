import React from "react";
import Image from "next/image";

export interface CardProps {
    key: string | number;
    i: number;
    imageSrc: string;
    imageAlt: string;
    cardTitle: string;
    cardDescription: string;
    tagCatId: string;
    tagCatName: string | undefined;
    tagPrice: string | undefined;
  }

const Card = ( { key, i, imageSrc, imageAlt, cardTitle, cardDescription, tagCatId, tagCatName, tagPrice }: CardProps  ) => {
    console.log(i, imageSrc)
    return (
        <div className="max-w-48 overflow-hidden even:bg-first-color odd:bg-accent-2nd-color m-6" key={key}>
            <Image className="w-full max-h-24 shadow-lg shadow-second-color" src={imageSrc} alt={imageAlt} width={120} height={100} />
            <div className="px-6 py-4">
                <h4 className="font-bold text-md mb-2 text-center">{cardTitle}</h4>
            </div>
                <div className="px-6 pt-4 pb-2 flex">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${tagCatId}`}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${tagCatName}`}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${tagPrice}`}</span>
                </div>
        </div>
    );
  };
  
export default Card;

/*         <div classNameName='bg-second-color text-accent-color font-semibold rounded-md border-solid border-accent-color border-2 shadow-md shadow-light-color/50 w-48 p-1 m-3'>
            <p>Soy una Card</p>
            {children}
        </div> */