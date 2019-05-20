import React from 'react'
import Card from './Card'

const CardList = ({ robotList, filterValue }) => {
  let filteredRobot = robotList.filter(robot => {
    return robot.name.includes(filterValue)
  })
  return (
    <div>
      {filteredRobot.map((robo) => {
          return <Card robo={robo} key={robo.id}/>
        })}
    </div>
  )
}

export default CardList