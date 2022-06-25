import React from 'react'

export default function states({units,name}) {
  const hero = units.map((hero,index)=>{
   return(
    <div className="one-third" key={index}>
    <div className="stat">{hero.state}</div>
    <div className="stat-value">{hero.value}</div>
</div>
   )

  })
  return (

    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
     {hero}

    </div>
  )
}
