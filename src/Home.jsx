import React from "react";
import add from "./img/add.png";
import arrow from "./img/arrow.png";

const Home = ({ movies, handleClick }) => {
  
  //Function to scroll up automatically after pressing arrow button 
  const handleArrow = ()=> {
    let ini= window.pageYOffset;
    setInterval(()=>{
      if(ini>0){
        window.scrollTo(0, ini);
      ini= ini-40;
      }
  }, 10)
    
  }
  
  return (
     <>
     <h2 className='title'>HOME</h2>
     <img className='arrow' src={arrow} onClick={handleArrow} alt='arrow button' />
    <section>
        {movies.map((elem, index)=> {
     return (
              <div className="card-container" key={index} >
                  <img className='card-container__add-edit' src={add} onClick={()=>handleClick(elem)} alt='add icon'/>
                  <img className="card-container__img" src={elem.Poster} alt={`Cover of the film ${elem.Title}`}/>
                  <div className='card-container__info'>
                    {elem.Title}<br/>
                    {elem.Year}
                  </div>
              </div>
              
            )
        })}
    </section>
    </>
  )
}

export default Home
