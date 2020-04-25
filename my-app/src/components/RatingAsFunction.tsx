import * as React from 'react';
import './Rating.css';

export interface RatingProps {
  starsNumber: number;  
}

function Rating({ starsNumber }: RatingProps) {
    if (starsNumber <= 0) {
      throw new Error('There is no negative rating :D');
    }  
    //let stars = new Array (starsNumber);
    return (      
       <div className="rating">
          {String('*').repeat(starsNumber)}
        </div>   
    );
  }  
  
  export default Rating;
  /* <ul>
        {
          stars.map(() => (
            <li>{String('*')}</li>
          ))
        }
      </ul> */