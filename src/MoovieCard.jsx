import React from "react";

const MoovieCard = ({moovie}) => { 

  return (  
    <div className="moovie">
        <div>
            <p>{moovie.Year}</p>
        </div>
        <div>
            <img 
                src={moovie.Poster !== "N/A" ? moovie.Poster : "https://via.placeholder.com/400" } 
                alt={moovie.Title}
                />
        </div>

        <div>
            <span>{moovie.Type}</span>
            <h3>{moovie.Title}</h3>
        </div>
    </div>
  );
};

export default MoovieCard;