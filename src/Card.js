import React from 'react'

const Card = ({robo}) => {
  let { id, name, username, email} = robo
  return (
    <div className="pa2 bg-navy grow br3 bw2 shadow-3 tc white dib ma2">
      <img src={`https://robohash.org/${username + id}?size=200x200`} alt="robo_picture"/>
      <div className="pa2 f4">{name}</div>
      <div className="pa2 f6">{email}</div>
    </div>
  )
}

export default Card