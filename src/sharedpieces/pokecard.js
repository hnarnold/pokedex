import React, { useState, useEffect } from "react";
import './headers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import normalIcon from '../images/normal-icon.png';
import fireIcon from '../images/fire-icon.png';
import fightingIcon from '../images/fighting-icon.png';
import waterIcon from '../images/water-icon.png';
import flyingIcon from '../images/flying-icon.png';
import grassIcon from '../images/grass-icon.png';
import poisonIcon from '../images/poison-icon.png';
import electricIcon from '../images/electric-icon.png';
import groundIcon from '../images/ground-icon.png';
import psychicIcon from '../images/psychic-icon.png';
import rockIcon from '../images/rock-icon.png';
import iceIcon from '../images/ice-icon.png';
import bugIcon from '../images/bug-icon.png';
import dragonIcon from '../images/dragon-icon.png';
import ghostIcon from '../images/ghost-icon.png';
import darkIcon from '../images/dark-icon.png';
import steelIcon from '../images/steel-icon.png';
import fairyIcon from '../images/fairy-icon.png';



export default function Card(props) {
  

  let typeMapping = {
    normal: {
      name: 'normal',
      immunes: [ 'ghost' ],
      weakness: [ 'rock', 'steel' ],
      strengths: [],
      color: '#474747',
      icon: normalIcon
    },
    bug: {
      name: 'bug',
      immunes: [],
      weakness: [
        'fire',   'fighting',
        'poison', 'flying',
        'ghost',  'steel',
        'fairy'
      ],
      strengths: [ 'grass', 'psychic', 'dark' ],
      color: '#64e474',
      icon: bugIcon
    },
    electric: {
      name: 'electric',
      immunes: [ 'ground' ],
      weakness: [ 'electric', 'grass', 'dragon' ],
      strengths: [ 'water', 'flying' ],
      color: '#ebe727',
      icon: electricIcon
    },
    fighting: {
      name: 'fighting',
      immunes: [ 'ghost' ],
      weakness: [ 'poison', 'flying', 'psychic', 'bug', 'fairy' ],
      strengths: [ 'normal', 'ice', 'rock', 'dark', 'steel' ],
      color: '#eb2727',
      icon: fightingIcon
    },
    ghost: {
      name: 'ghost',
      immunes: [ 'normal' ],
      weakness: [ 'dark' ],
      strengths: [ 'psychic', 'ghost' ],
      color: '#da45fc',
      icon: ghostIcon
    },
    psychic: {
      name: 'psychic',
      immunes: [ 'dark' ],
      weakness: [ 'psychic', 'steel' ],
      strengths: [ 'fighting', 'poison' ],
      color: '#833ab4',
      icon: psychicIcon
    },
    flying: {
      name: 'flying',
      immunes: [],
      weakness: [ 'electric', 'rock', 'steel' ],
      strengths: [ 'grass', 'fighting', 'bug' ],
      color: '#589ad5',
      icon: flyingIcon
    },
    steel: {
      name: 'steel',
      immunes: [],
      weakness: [ 'fire', 'water', 'electric', 'steel' ],
      strengths: [ 'ice', 'rock', 'fairy' ],
      color: '#a6afb6',
      icon: steelIcon
    },
    ice: {
      name: 'ice',
      immunes: [],
      weakness: [ 'fire', 'water', 'ice', 'steel' ],
      strengths: [ 'grass', 'ground', 'flying', 'dragon' ],
      color: '#b0dcff',
      icon: iceIcon
    },
    poison: {
      name: 'poison',
      immunes: [ 'steel' ],
      weakness: [ 'poison', 'ground', 'rock', 'ghost' ],
      strengths: [ 'grass', 'fairy' ],
      color: '#c693c8',
      icon: poisonIcon
    },
    fire: {
      name: 'fire',
      immunes: [],
      weakness: [ 'fire', 'water', 'rock', 'dragon' ],
      strengths: [ 'grass', 'ice', 'bug', 'steel' ],
      color: '#e76736',
      icon: fireIcon
    },
    dragon: {
      name: 'dragon',
      immunes: [ 'fairy' ],
      weakness: [ 'steel' ],
      strengths: [ 'dragon' ],
      color: '#420386',
      icon: dragonIcon
    },
    ground: {
      name: 'ground',
      immunes: [ 'flying' ],
      weakness: [ 'grass', 'bug' ],
      strengths: [ 'fire', 'electric', 'poison', 'rock', 'steel' ],
      color: '#b88d0e',
      icon: groundIcon
    },
    water: {
      name: 'water',
      immunes: [],
      weakness: [ 'water', 'grass', 'dragon' ],
      strengths: [ 'fire', 'ground', 'rock' ],
      color: '#004eed',
      icon: waterIcon
    },
    dark: {
      name: 'dark',
      immunes: [],
      weakness: [ 'fighting', 'dark', 'fairy' ],
      strengths: [ 'psychic', 'ghost' ],
      color: '#b4915a',
      icon: darkIcon
    },
    rock: {
      name: 'rock',
      immunes: [],
      weakness: [ 'fighting', 'ground', 'steel' ],
      strengths: [ 'fire', 'ice', 'flying', 'bug' ],
      color: '#ba7200',
      icon: rockIcon
    },
    grass: {
      name: 'grass',
      immunes: [],
      weakness: [
        'fire',   'grass',
        'poison', 'flying',
        'bug',    'dragon',
        'steel'
      ],
      strengths: [ 'water', 'ground', 'rock' ],
      color: '#089e09',
      icon: grassIcon
    },
    fairy: {
      name: 'fairy',
      immunes: [],
      weakness: [ 'fire', 'poison', 'steel' ],
      strengths: [ 'fighting', 'dragon', 'dark' ],
      color: '#f797f9',
      icon: fairyIcon
    }
  }
  var backColor1, backColor2;
  backColor1 = typeMapping[props.type[0]].color;
  if(props.type.length == 1){
    backColor2 = typeMapping[props.type[0]].color;
  }
  else{
    backColor2 = typeMapping[props.type[1]].color;
  }
  let background = {
    background: "linear-gradient(90deg, " + backColor1 + " 0%, rgba(255,255,255,1) 50%, " + backColor2 + " 100%)"
  }



  return (
    <div className='pokecard'>
      <div className='innerCard' style={background}>
        <div className='header'>
          <p className='pokemon-name'>{props.name}</p>
          <div className='health-container'>
            <p className='health-points'><span className="hp">HP</span>{props.health}</p>
              
                {props.type.map((pokeType,index) =>{
                  return(
                    <div className='type-icon' key={index}>
                      <img className='type-icon-image' src={typeMapping[pokeType].icon}  />
                    </div>
                    )
                })}
              
          </div>
        </div>
        <div className='portrait'>
          <img className='portrait-picture' src={props.image}/>
        </div>
        <div className='moves-list'>
          {props.moves.map((moveName, index) => {
          return(
            <div className='move' key={index}>
              <div className="move-header-container">
                <div className='type-icon'>
                  <img className='type-icon-image' src={typeMapping[moveName.type].icon} />
                </div>
                <div className="move-name">
                  <p>{moveName.name}</p>
                </div>
                <div className='move-power'>
                  <p className='move-power-amount'>{moveName.power}+</p>
                </div>
              </div>
              <div className='move-description'>
                <p>{moveName.description}</p>
              </div>
            </div>
          )
        })}
        </div>
        <div className="flavortext-container">
          <div className="weakness">
            <p>weakness</p>
            {props.type.map((pokeType, index) => {
              return(
              typeMapping[pokeType].weakness.map((weak, index) =>{
                  return(
                    <img src={typeMapping[weak].icon} className="type-icon" key={index}/>
                  )
              }))
            })}
          </div>
          <div className="strength">
            <p>strength</p>
            {props.type.map((pokeType, index) => {
              return(
              typeMapping[pokeType].strengths.map((strength, index) =>{
                  return(
                    <img src={typeMapping[strength].icon} className="type-icon" key={index}/>
                  )
              }))
            })}
          </div>
          <div className="flavortext">
            <p>{props.flavorText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}