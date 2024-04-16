import React from 'react'
import './styles.css'
import hi from'./hi.gif'

function Home() {
  return (
    <>
      <center>
        <br></br> <br></br>
        <h3>Hello!🤍 this is Manikanta</h3>
        <h3>Roll No: 2111cs020269</h3>
        <br />
        <img src={hi} alt="" style={{height:"200px",width:'100px'}}/>
      </center>
    </>
  )
}

export default Home