import React from 'react';
import ReactDOM from 'react-dom';

const noodles=["thin noodles","kuey teow"]


class Food extends React.Component{
  render (){
    return(
    <div>
    <h1>Type of noodles</h1>
    <ol>
    {
      noodles.map(noodle => <li>{noodle}</li>)
    }
    </ol>
    </div>
    )
  }
}

ReactDOM.render(
  <Food/>,
  document.getElementById('app')
)



