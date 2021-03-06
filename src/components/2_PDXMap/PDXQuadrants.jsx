import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantListShort from '../3_Quadrant/RestaurantListShort';
import styles from './PDXQuadrants.css';

export default function PDXQuadrants({ restaurants }) {
  const allRestaurants = restaurants.restaurants;

  const northRestaurants = allRestaurants.filter(restaurant => restaurant?.quadrant === 'N');
  const northEastRestaurants = allRestaurants?.filter(restaurant => restaurant.quadrant === 'NE');
  const northWestRestaurants = allRestaurants?.filter(restaurant => restaurant.quadrant === 'NW');
  const southRestaurants = allRestaurants?.filter(restaurant => restaurant.quadrant === 'S');
  const southEastRestaurants = allRestaurants?.filter(restaurant => restaurant.quadrant === 'SE');
  const southWestRestaurants = allRestaurants?.filter(restaurant => restaurant.quadrant === 'SW');

  const quadrants = [
    {
      name: 'North',
      abbrev: 'N',
      restaurants: northRestaurants
    },
    {
      name: 'Northeast',
      abbrev: 'NE',
      restaurants: northEastRestaurants
    },
    {
      name: 'Northwest',
      abbrev: 'NW',
      restaurants: northWestRestaurants
    },
    {
      name: 'South',
      abbrev: 'S',
      restaurants: southRestaurants
    },
    {
      name: 'Southeast',
      abbrev: 'SE',
      restaurants: southEastRestaurants
    },
    {
      name: 'Southwest',
      abbrev: 'SW',
      restaurants: southWestRestaurants
    }
  ];

  const quadrantLists = quadrants.map((quadrant, i) => 
    <div key={i} className={styles.Quadrant}>
      <Link to={`/portland/${quadrant.abbrev}`} className={styles.QuadrantLink}>
        {quadrant.name}
      </Link>
      <RestaurantListShort restaurants={quadrant.restaurants} />
      <div className={styles.ViewAll}>
        <Link to={`/portland/${quadrant.abbrev}`}>{`View all ${quadrant.name} Restaurants`}</Link>
      </div>
    </div>
  );

  return (
    <section>
      {quadrantLists}
    </section>
  );
}
