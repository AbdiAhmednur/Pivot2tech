import React from 'react';
import './Games.css';
import Games from './Games.js';

function GamesList( ) {
  return (
    <div>
      <Games
        img="https://upload.wikimedia.org/wikipedia/en/a/ae/Fortnite_Save_The_World.jpg"
        name="Fortnite"
        Developers="Epic games"
        TypeOfGame="Battle Royal"
      />
      <Games
        img="https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg"
        name="Apex Legends"
        Developers="Respawn"
        TypeOfGame="Battle Royal"
      />
      <Games
        img="https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg" 
        name="God of War ragnarok"
        Developers="Santa monica studio"
        TypeOfGame="Role playing game"
      />
      <Games
        img="https://upload.wikimedia.org/wikipedia/en/a/a1/High_on_Life_cover_art.jpg"
        name="High On Life"
        Developers="Squanch games"
        TypeOfGame="Role playing game"
      />
      <Games
        img="https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg"
        name="Call of duty modern warfare 2 warzone"
        Developers="infinity ward"
        TypeOfGame="Role playing game"
      />
    </div>
  );
}

export default GamesList;
