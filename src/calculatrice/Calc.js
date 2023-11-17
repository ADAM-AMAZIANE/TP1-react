import React, { useState } from 'react';

import './style1.css'; 


export default function Calc() {
  const [exp, setExp] = useState('');

  const clear = () => {
    setExp('');
  };

  const result = () => {
    try {
      let v = exp;
      setExp(eval(v));
    } catch (error) {
      setExp('expression non valide');
    }
  };

  const tapecar = (e) => {
    let oldval = exp;
    let newval = oldval + e.target.value;
    setExp(newval);
  };

  return (
    <div className='calculator'>
      <h1>Exemple calcul :</h1>
      <input onClick={(e) => tapecar(e)} type="button" value="." />
      <input onClick={(e) => tapecar(e)} type="button" value="0" />
      <input onClick={(e) => tapecar(e)} type="button" value="1" />
      <input onClick={(e) => tapecar(e)} type="button" value="2" />
      <br />
      <input onClick={(e) => tapecar(e)} type="button" value="3" />
      <input onClick={(e) => tapecar(e)} type="button" value="4" />
      <input onClick={(e) => tapecar(e)} type="button" value="5" />
      <br />
      <input onClick={(e) => tapecar(e)} type="button" value="6" />
      <input onClick={(e) => tapecar(e)} type="button" value="7" />
      <input onClick={(e) => tapecar(e)} type="button" value="8" />
      <input onClick={(e) => tapecar(e)} type="button" value="9" />
      <br />
      <input onClick={(e) => tapecar(e)} type="button" value="+" />
      <input onClick={(e) => tapecar(e)} type="button" value="-" />
      <input onClick={(e) => tapecar(e)} type="button" value="*" />
      <input onClick={(e) => tapecar(e)} type="button" value="/" />
      <br />
      <input onClick={clear} type="button" value="C" className='clear' />
      <input onClick={result} type="button" value="=" />
      <input value={exp} type="text" />
    </div>
  );
}
