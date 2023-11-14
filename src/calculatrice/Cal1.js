import React, { useState } from 'react'

import './style.css'

export default function Cal1() {
    const [n1,setn1]=useState()
    const [n2,setn2]=useState()
    const [res,setres]=useState()
    


    const sum=()=>{

       setres(Number(n1)+Number(n2)) 
    }

  return (
    <div className='calculator'>
      <h1>    Exemple calcul 1 : </h1>


      Nombre 1: <input type="text" onChange={(e)=>{setn1(e.target.value)}} value={n1}/>

      <br />

      Nombre 2: <input type="text"  onChange={(e)=>{setn2(e.target.value)}}  value={n2} />


      <br />
      <input type="button" value="="  onClick={sum} />

    <br /><br /><br />

      Resultat : <br /><br />  <input disabled type="text"  value={res} /> <br />
    </div>
  )
}
