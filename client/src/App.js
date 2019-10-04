import React from 'react';
import axios from 'axios'
import Players from "./components/Players"
import styled from 'styled-components'


const Row = styled.div`
display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 20px 1rem;
`
const Col = styled.div`
height: auto;
border-radius: 4px
`
const Hold = styled.div`
height: auto;
width: 300px
`




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      searches: []
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
      <div>
        <div className="colorChange">
          <Players />
        </div>
        <div>
          <Row>
            <Col>Player:
                {this.state.players.map(player => (
              <Hold key={player.id}>
                <h2>I am : {player.name}</h2>
                <h3>From: {player.country}</h3>
                <p>searched {player.searches} times</p>
              </Hold>
            ))}
            </Col>
          </Row>

        </div>
      </div>



    )
  }
}


export default App;
