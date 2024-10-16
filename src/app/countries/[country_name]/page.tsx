import React from "react";
import countryData from "@/countries";
import Link from "next/link";
import CountryDetailCard from "@/component/CountryCard";
type Country = keyof typeof countryData;

const CountryName = ({params}: {params: {country_name: string} }) => {
  const countryName = params.country_name;

  const isValidCountry = (countryName: string): countryName is Country => {
    return countryName in countryData;
  };
  return isValidCountry(countryName) ? (
    <div className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-6xl font-bold">{countryData[countryName].name}</h1>
      <CountryDetailCard
        name={countryData[countryName].name}
        population={countryData[countryName].population}
        capital={countryData[countryName].capital}
      />
        <Link href={"/countries"} className="bg-purple-900 px-4 py-2 rounded-lg">
          Back to country list page
        </Link>
      </div>
 
  ) : (
    <div className="text-center text-4xl font-bold">Country not found</div>
  );
};

export default CountryName;