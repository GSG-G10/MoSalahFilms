import React ,{useContext}from 'react';
// import Card from "../Card"
import Navbars from '../Navbar';
import Img from '../Card/logo192.png';

import {MokaContext} from '../../Context/MokaContext';

const Favorit = () => {
    const Data = useContext(MokaContext);
    console.log("Data in f" ,Data);
  const {fav}=Data
  console.log("in faaaaaa",fav);
    return (
        <div>
            <Navbars/>
            {/* <Card/>  */}
            {fav.length !== 0
               ?  
            <section className="resulte">
            <div className="all">
              {fav.map((ele, index) => {
                const {
                  original_title,
                  overview,
                  poster_path,
                  release_date,
                  vote_count,
                } = ele;
                return (
                  <article key={index} className="card">
                    {poster_path !== null ? (
                      <img
                        className="img"
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={original_title}
                      />
                    ) : (
                      <img className="img" src={Img} alt={original_title} />
                    )}
      
                    <h3 className="title">{original_title}</h3>
                    {overview !== '' ? (
                      <p className="discription">{overview}</p>
                    ) : (
                      <p className="discription">No Content</p>
                    )}
                    {/* <p className="discription">{overview}</p> */}
                    <div className="info">
                      <span className="data">Data:{release_date}</span>
                      <span className="count">Vout Count :{vote_count}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>: <h1>No Filme Here  go to homa and add !</h1>

            }
         
        </div>
    );
}

export default Favorit;
