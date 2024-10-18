'use client'
import Image from "next/image";
import Card from "../../../components/Card";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import {useState, useEffect} from 'react';
import { CountryDetails } from "../../../models/countryDetails";

export default function Dashboard() {
  const [data, setData] = useState<CountryDetails[]>([]);

  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch('/api/countries');
      const { data } = await response.json();
      setData(data);
    };
    fetchData();
  },[]);
console.log(data)
  return (
    <main className="flex justify-start p-6">
      <aside className="w-1/4">
        <h1 className="text-2xl md:text-xl font-bold p-4 flex flex-row items-center gap-2">
          <MdSpaceDashboard className=""/> Dashboard
        </h1>
      </aside>
      <section className="flex justify-between items-center flex-col">
      <div className="w-3/4 p-4 m-4 flex flex-wrap">
      {data.map((data, i) => (
        <Card 
        key={data.cca2}
        i={i}
        imageSrc={data.flags.png}
        imageAlt={data.flags.alt}
        cardTitle={data.name.official}
        cardDescription={data.capital}
        tagCatId={data.continents[0]}
        /* tagCatName={data.currencies.key?.name}
        tagPrice={data.currencies[Object?.keys(data.currencies)[i]]?.symbol} */
        ></Card>
      ))}

      </div>
    

    </section>
      
    </main>
  );
}

/* export async function getServerSideProps(context: {req: NextApiRequest; res: NextApiResponse} ) {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
} */