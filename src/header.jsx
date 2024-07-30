import React from 'react'

export default function header({team,member}) {
  return (
    <div className='row justify-content-center m-2'><h1>Team Allocation</h1>
      <h3>Team {team} has {member} member</h3>
    </div>
  )
}
