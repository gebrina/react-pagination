import React, { useState } from 'react';
import data from './data.json';
import './style.css';
export const App = ()=>{

  const rowsPerpage = 3;

  const [skip,setSkip] = useState(0);

  const handleNextPage = ()=>{
  if(skip===data.length-rowsPerpage){
     setSkip(0);
    }else{
     setSkip(prev=>prev+rowsPerpage);
    }
  }

  const handlePrevPage = ()=>{
    if(skip===0){
     setSkip(data.length-rowsPerpage);
    }else{
     setSkip(prev=>prev-rowsPerpage);
    }
  }

return <section className="data">
   <h1 >Skip: {skip} &nbsp;&nbsp; &nbsp; Take: {rowsPerpage}</h1>
      <div>
        {data.slice(skip,skip+rowsPerpage).map(({title,id,body})=>(<div key={id}>
             <h4>{id}, {title}</h4>
             <p>{body.substring(0,50)}...</p>
        </div>))}
      </div>
    <div className="btns">
    <button onClick={handlePrevPage}>Prev</button>
     <button>{data.length} Items </button>
    <button onClick={handleNextPage}>Next</button>
    </div>
  </section>
}