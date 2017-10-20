import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var correctWord="test";
var triesLeft=0;
var beginningOfGame=true; 

class Square extends React.Component {
  render() {
    return (
      <h1 className="square">
        {'X'}
      </h1>
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
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  renderSquare(i) {
    return (
      <Square 
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Useranswer />
        
      </div>
     
    );
  }
}

// ========================================


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
