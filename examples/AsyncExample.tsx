import React from 'react';
import { AsyncSkeleton } from '../src/components/AsyncSkeleton';
interface Beer {
  id: number;
  name: string;
  price: string;
  rating: {
    average: number;
    reviews: number;
  };
}

const BeerList: React.FC = () => {
  const fetchBeers = async (): Promise<Beer[]> => {
    const response = await fetch('https://api.sampleapis.com/beers/ale');
    if (!response.ok) {
      throw new Error('Failed to fetch beers');
    }
    return response.json();
  };

  return (
    <div>
      <h1>Beer List</h1>
      <AsyncSkeleton asyncFunction={fetchBeers} width="100%" height="400px">
        {(beers) => (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {beers.slice(0, 10).map((beer) => (
              <li
                key={beer.id}
                style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}
              >
                <h3>{beer.name}</h3>
                <p>Price: {beer.price}</p>
                <p>
                  Rating: {beer.rating.average.toFixed(1)} ({beer.rating.reviews} reviews)
                </p>
              </li>
            ))}
          </ul>
        )}
      </AsyncSkeleton>
    </div>
  );
};

export default BeerList;
