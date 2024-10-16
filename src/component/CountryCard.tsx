
interface CountryCardProps {
    name: string;
    population: number;
    capital: string;
  }
  
  const CountryDetailCard = ({ name, population, capital }: CountryCardProps) => {
    return (
      <div className="bg-purple-700 flex justify-center items-center flex-col gap-4">
        <h2 className="text-2xl font-semibold">Population: {population}</h2>
        <h2 className="text-2xl font-semibold">Capital: {capital}</h2>
      </div>
    );
  };
  
  export default CountryDetailCard;
  