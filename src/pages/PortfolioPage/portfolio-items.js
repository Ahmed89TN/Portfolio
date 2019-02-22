import React from 'react';
import movie from "./movie.PNG";
import map from "./map.PNG";
import world from "./world.PNG";
import click from "./click.PNG";
import stellium from "./stellium.PNG"
export default [{
  name: 'movie war',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Movie-war
      </div>
      <img src={movie} className="movie" alt="me"  />
      <div className='portfolio-item__desc'>
        A war card game based on movies rating on rottan Tomato.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-css3-alt"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ahmed89TN/project01">Github</a>
        <a target="_blank" rel="noopener noreferrer" href="https://ahmed89tn.github.io/project01/">Demo</a>
      </div>
    </div>
  )
}, {
  name: 'munchies map',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Munchies Map
      </div>
      <img src={map} className="map" alt="me"  />
      <div className='portfolio-item__desc'>
        An app for food card where a vendor can list his business on show his current location
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-node"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/c811k/project_two">Github</a>
        <a target="_blank" rel="noopener noreferrer" href="http://munchiesmap.herokuapp.com/">Demo</a>
      </div>
    </div>
  )
}, {
  name: 'world view',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        World View
      </div>
      <img src={world} className="world" alt="me"  />
      <div className='portfolio-item__desc'>
        A social networking app to meet people from all over the world and learn from them about thier culture.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-node"></i>
        <i className="fab fa-react"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ahmed89TN/project-three">Github</a>
        <a target="_blank" rel="noopener noreferrer" href="https://world-view-app.herokuapp.com/login">Demo</a>
      </div>
    </div>
  )
}, {
  name: 'clicky game',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Clicky Game
      </div>
      <img src={click} className="click" alt="me"  />
      <div className='portfolio-item__desc'>
         A game based on memory 
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-css3-alt"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ahmed89TN/clicky-game">Github</a>
        <a target="_blank" rel="noopener noreferrer" href="https://ahmed89tn.github.io/clicky-game/">Demo</a>
      </div>
    </div>
  )
}, {
  name: 'Stellium relation',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Stellium Relation
      </div>
      <img src={stellium} className="stellium" alt="me"  />
      <div className='portfolio-item__desc'>
         A custom made website 
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="http://stelliumrelations.com/index.html">Live</a>
      </div>
    </div>
  )
}
   ]