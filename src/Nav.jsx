import React, { useRef } from 'react'
import video from "./img/video.png";
import home from "./img/home.png";
import user from "./img/user.png";
import menu from "./img/menu.png";
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';


const Nav = ({handleSubmit, handleChange, anyMovies, movieCounter}) => {
    
    const handleAnyMovies = ()=> {
        
        if(anyMovies===false){
           swal({
            title: "No movies added",
            text: "Please, add some!"
          });
        }
    }
    //When using "useRef" hook a prop "ref" and the key "refMenu" need to be added to the chosen tag
    const refDropDown = useRef();
    //This function drop down the menu or contract
    const handleMenu = () => {
        refDropDown.current.style.display === "none" ? refDropDown.current.style.display= "flex" 
        : refDropDown.current.style.display= "none";
    }

 return(
    <nav>
        <img src={menu} onClick={handleMenu} alt="menu bottom" id="menu"/>
        <div className="logo">
            <img src={video} alt="movie clapboard icon"/>
            <h1 className="logo">MOVIE SEARCH</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <input className="search-input" typeof="text" placeholder="Search..." onChange={handleChange}/>
            <button typeof="submit">Search</button>
        </form>
        
        <div ref={refDropDown} className='container-icons'>
            <NavLink to="/"> <img src={home} className='nav-home' alt='home icon'/></NavLink>
            <NavLink to='/user'><img src={user} onClick={handleAnyMovies}className='nav-user' alt='user icon'/></NavLink>
            <div className='circle'>{movieCounter}</div>
        </div>
    </nav>
    
 );
}

export default Nav
