import React from 'react'
import CardState from './CardState'

export default function Card({heros}) {
  return (
    <div className="clash-card barbarian">
    <div className={`clash-card__image clash-card__image--${heros.name}`}>
        <img src={heros.img} alt={heros.name} />
    </div>
    <div className="clash-card__level clash-card__level--barbarian">{heros.level}</div>
    <div className="clash-card__unit-name">{heros.name}</div>
    <div className="clash-card__unit-description">{heros.description} </div>
    <CardState units={heros.units} name={heros.name}/>

</div>
  )
}
