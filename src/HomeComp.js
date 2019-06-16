import React, { Component } from 'react'
import ChildComp from './ChildComp';
import {CardGroup,Card} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom'
// import $ from 'jquery'
export class HomeComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          throwCount:12,
           count1 : 'fas fa-dice-d6 fa-7x',//<i class="fas fa-dice-d6"></i>
           count2 : 'fas fa-dice-d6 fa-7x',
           playerOneScore : 0,
           playerTwoScore : 0,
           user1 : 'fas fa-user-check fa-3x',
           user2 : 'fas fa-user fa-3x',
           button1 :'',
           button2 : '',
           persons : []
        }

        this.dataVal = ['one','two','three','four','five','six']
        this.rolldice2 = this.rolldice2.bind(this)
        this.roll = this.roll.bind(this)
      };

    //   componentDidMount() {
    //     ax.get(`https://jsonplaceholder.typicode.com/users`)
    //       .then(res => {
    //         const persons = res.data;
    //         this.setState({ persons });
    //       })
    //       // Make a request for a user with a given ID      
    // }


    stateMeth = (dicetext) => {
       var index = Math.floor(Math.random() * this.dataVal.length)
       var valu1 = this.dataVal[index]
       if(dicetext!=='dice2' ) {
        // if((this.state.throwCount / 2) !== 0) {
          console.log(this.state.throwCount)    
        this.setState((prevState) =>(        
          {            
          count1 : 'fas fa-dice-' + valu1 +' fa-7x',
          // count2 :'',
          user2 : 'fas fa-user-check fa-3x',
          user1 : 'fas fa-user fa-3x',
          button1 : 'disabled',
          button2 : '',
          playerOneScore: prevState.playerOneScore + (index + 1),
          throwCount: prevState.throwCount -1 
        }))
       } else {//((this.state.throwCount % 2) !== 0) {
        this.setState((prevState) =>(        
          {            
          count2 : 'fas fa-dice-' + valu1 +' fa-7x',
          user2 : 'fas fa-user fa-3x',
          user1 : 'fas fa-user-check fa-3x',
          button2 : 'disabled',
          button1 :'',
          playerTwoScore: prevState.playerTwoScore + (index+1),
          throwCount: prevState.throwCount -1 
        }))
       }
       }

      roll = () => {
      this.stateMeth('dice1')        
      }   

      rolldice2 = ()  => {       
      this.stateMeth('dice2')        
      }

  render() {     
    const userCheckJSX = ''
    // console.log(this.state.persons)
    const winner = (this.state.playerOneScore>this.state.playerTwoScore) ? <h1>firstplayer is the winner</h1> : <h1>2nd player is the winner</h1>
    return (
      <BrowserRouter>
      <div>
        <CardGroup> 
          <Card style={{ width: '8rem' }}>
          <Card.Body>
          <i className={this.state.user1}></i>
        <Card.Title>Player1</Card.Title>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">{this.state.playerOneScore}</small>
    </Card.Footer>
          <button disabled={this.state.button1} onClick={this.roll}>click</button>
        <ChildComp itype={this.state.count1}></ChildComp>
          </Card>

          <Card>
          <Card.Body>
          <i className={this.state.user2}></i>
        <Card.Title>Player2</Card.Title>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">{this.state.playerTwoScore}</small>
    </Card.Footer>
          <button disabled={this.state.button2} onClick={this.rolldice2}>click</button>
        <ChildComp itype={this.state.count2}></ChildComp>
          </Card>
         </CardGroup>      
         {/* <div>{winner}</div>  */}
      </div>
      </BrowserRouter>
    )
  }
}

export default HomeComp
//disabled="disabled"