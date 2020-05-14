import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useLocalStorage} from '../hooks/useLocalStorage';

export default function BeerDetails ({ beer }) {
  const [showBeerNerdStuff, setShowBeerNerdStuff] = useLocalStorage("beernerd",false);
  console.log(beer.name);

  if (beer!==undefined && beer!==null && showBeerNerdStuff===false) {
    return (
      <div>
        <h2>{beer.name}</h2>
        {beer.image_url!==null?<img src={beer.image_url} alt={beer.name} />:<></>}
        <p>{beer.tagline}</p>
        <p className="description">{beer.description}</p>
        <button onClick={()=>setShowBeerNerdStuff(true)}>Show Beer Nerd Info</button>
      </div>
    );
  } else if (beer!==undefined && beer!==null && showBeerNerdStuff===true) {
    return (
      <div>
        <h2>{beer.name}</h2>
        {beer.image_url!==null?<img src={beer.image_url} alt={beer.name} />:<></>}
        <p>{beer.tagline}</p>
        <p className="description">{beer.description}</p>
        <button onClick={()=>setShowBeerNerdStuff(false)}>Hide Beer Nerd Info</button>
        <h2>Beer Stats</h2>
        <p>ABV: {beer.abv}% - IBU: {beer.ibu}</p>
        <p>Target Original Gravity: {beer.target_og} | Target Final Gravity: {beer.target_fg}</p>
        <p>EBC: {beer.ebc} - SRM: {beer.srm} - PH: {beer.ph}</p>
        <p>Attenuation: {beer.attenuation_level}%</p>
        <p>Boil Volume: {beer.boil_volume.value} {beer.boil_volume.unit}</p>
        <p>Final Volume: {beer.volume.value} {beer.boil_volume.unit}</p>
        <div className="mash">
          <h2>Mash</h2>
          {beer.method.mash_temp.map(m=><p>{m.temp.value}° {m.temp.unit} {m.duration!==null?<>for {m.duration} min.</>:<></>}</p>)}
          <h2>Fermentation Temp</h2>
          {beer.method.fermentation.temp.value}° {beer.method.fermentation.temp.unit}
          {beer.method.twist!==null?<p>{beer.method.twist}</p>:<></>}
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <h3>Malt</h3>
          {beer.ingredients.malt.map(m=>
              <p>{m.amount.value} {m.amount.unit} <Link to={`/malt/${m.name.split(' ').join('_').toLowerCase()}`}>{m.name}</Link></p>
          )}
          <h3>Hops</h3>
          {beer.ingredients.hops.map(h=>
              <p>{h.amount.value} {h.amount.unit} <Link to={`/hops/${h.name.split(' ').join('_').toLowerCase()}`}>{h.name}</Link> - Add for {h.add} - {h.attribute}</p>
          )}
          <h3>Yeast</h3>
          <p><Link to={`/yeast/${beer.ingredients.yeast.split(' ').join('_').toLowerCase()}`}>{beer.ingredients.yeast}</Link></p>
        </div>
        <p className="description">Brewer's Tip: {beer.brewers_tips}</p>
      </div>
    );
  }
};
