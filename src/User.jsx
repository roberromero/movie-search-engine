import React, { useState } from 'react'
import bin from './img/bin.png';
import edit from './img/edit.png';
import swal from 'sweetalert';

const User = ({ data, updateData, decreaseMovieCounter }) => {

  
  //For editing comments
    const [ value, setValue ] = useState();
    const handleEdit = (id) => {
      swal({
        title: "Please, leave your comment:",
        content: "input"
      })
      .then((value) => {
        setValue(value);
        data.forEach(element => {
          if(element.imdbID === id){
            element.Comment= value;
          }
        })   
      });
        
    }
  //For Deleting films
    const handleDelete = (id) => {
        
      swal({
        title: "Are you sure?",
        buttons: true
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("The movie has been deleted!", {
          });
          updateData( data.filter(elem=> elem.imdbID !== id) );
          decreaseMovieCounter();
        }
      });
  }
   
   
    return (
      <>
        <h2 className='title'>MY MOVIES</h2>
        <section>
          {data.map(elem=>{
            return  <div className="card-container" key={elem.imdbID}>
                      <img src={bin} id='remove' onClick={()=>handleDelete(elem.imdbID)} alt='delete button'/>
                      <img className="card-container__img" src={elem.Poster} alt={`Cover of the film ${elem.Title}`} />
                      <div className='card-container__info-user'>
                        {elem.Title}<br/>
                        {elem.Year}
                      </div>
                      <div>
                        <img src={edit} id='edit' className='card-container__add-edit' onClick={()=>handleEdit(elem.imdbID)} alt='edit comment button'/>
                        <p className='card-container__comment'> {elem.Comment} </p>
                      </div>
                    </div>
          })
          }
        </section>
      </>
    )
}

export default User
