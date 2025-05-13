import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>EXPLORE OUR PROJECTS BELOW!</h1>
      <div className="cards__continer">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="images/dummy.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/projects"
            />
            <CardItem 
              src="images/dummy.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="images/dummy.jpg"
              text="Set Sail the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/projects"
            />
            <CardItem 
              src="images/dummy.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/projects"
            />
            <CardItem 
              src="images/dummy.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
