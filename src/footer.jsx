import React from 'react'

export default function Footer() {
    var date = new Date();
  return (
    
    <footer>
      <div className="container">
        <div className="row justify-content-center m-2">
            <p>Team Allocation app -{date.getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
