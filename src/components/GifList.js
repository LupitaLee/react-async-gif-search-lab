import React from 'react'


const GifList = props => {
  
    return (
      <div>
          <ul>
              <li> {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}</li>
         
      
          </ul>
      </div>
    )
  }
export default GifList
