import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var correctWord="test";
var triesLeft=0;
var beginningOfGame=true; 
var wordLength=3;

function Square (props){

    return (
      <div className="square">
        {props.value}
      </div>
    );
}

class Letter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: this.element.value });
    beginningOfGame=false;
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <p>Enter a letter to guess: </p>
        <label>
          <input type="text" maxLength="1" ref={el => this.element = el} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  
      <ShowWord userLetter = {this.state.value} />
      </div>
    );
  }
}

class ShowWord extends React.Component{
  constructor(props) {
    super(props);
    this.props= {value: 'test'};
    this.checkForLetter();
  }

  checkForLetter(){
    var letter=this.props.userLetter; 
  }
  

  render() {
    return (
      <p>{this.props.userLetter}</p>
    );
  
  }
}
class Useranswer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: this.element.value });
    beginningOfGame=false;
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <p>Want to try and submit a guess?</p>
        <label>
          <input type="text" ref={el => this.element = el} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{"Your answer is: "+ this.state.value }</p>
      
    {!beginningOfGame ? (<IsCorrect answer={this.state.value} />) : 'test' }
      </div>

    );
  }
}


class IsCorrect extends React.Component{
  render(){

    const isCorrect = this.props.answer===correctWord;
     
    return (
    <div>
        {
        isCorrect ? (  <h1>{this.props.answer} is the correct answer! Congratulations!</h1>) : (<h1>WRONG!! The gallows approach...</h1>)
        }
    
      </div>
    
    )
  }
}
var squareArray=[];
var word=['A','B','C'];
function createEmptyWord(){
     for (var i=0; i<wordLength; i++){
        squareArray.push(<Square value={this.props.square[word(i)]}/>)
      }
  return (
   
    squareArray 
  );
}

class Board extends React.Component {
 
  renderSquare() {
   
    for (var i=0; i<wordLength; i++){
      squareArray.push(<Square i={word[i]}/>)
    }
return (
 
  squareArray 
);
   
  }

  render() {
    return (
      <div>
        <div className="board-row">
              {this.renderSquare()}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
    };
  }

  render() {
  

    return (
      <div className="game">
        <div><Letter /> <br /> 
          </div>
        <div>
        <Useranswer />
        </div> 
        <Board onSubmit={i=>this.handleSubmit(i)}/>
      </div>
     
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



// ========================================


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
