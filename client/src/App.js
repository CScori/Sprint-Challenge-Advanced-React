import React from 'react';
import axios from 'axios'
import Players from "./components/Players"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        });
        console.log('res', res.data)
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="user">
      {this.state.players.map(player => (
       <div key={player.id}> 
         <h2>{player.name}</h2>
        <h3>{player.country}</h3>
        <p>{player.searches}</p>
       </div>
      ))}
      </div>
      
        
    
    )
  }
}


export default App;
